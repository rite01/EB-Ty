/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import { hash } from 'bcrypt';
import { BadRequestException, ConflictException } from '../../exceptions';
import { IUser } from '../../interfaces';
import { CreateUserDto } from '../../dtos/user.dtos';
import db from '../../databases/models';
import { isEmpty } from '../../utils/utils';
import { bcryptService } from '../bcrypt';

const {
  roles, users,
} = db.models;

export class UserService {
  public async createUser(userData: any): Promise<IUser> {
    if (isEmpty(userData)) throw new BadRequestException('userData is empty');

    const findUser: any = await users.findOne({
      where: { email: userData.email },
    });
    if (findUser) {
      throw new ConflictException(
        `This email ${userData.email} already exists`,
      );
    }

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: any = await users.create({
      ...userData,
      password: hashedPassword,
    });

    return createUserData;
  }

  public async login(
    userData: CreateUserDto,
  ): Promise<any> {
    if (isEmpty(userData)) throw new BadRequestException('userData is empty');

    const findUser: any = await users.findOne({
      include: [{
        model: roles,
        as: 'role',
      }],
      where: { email: userData.email },
    });
    if (!findUser) { throw new ConflictException(`This email ${userData.email} was not found`); }

    const isPasswordMatching: boolean = await bcryptService.comparePassword(
      userData.password.toString(),
      findUser.password,
    );
    if (!isPasswordMatching) { throw new ConflictException('Password is not matching'); }

    const tokenData: any = bcryptService.createToken(findUser);

    return { data: findUser, ...tokenData };
  }

  public paginate = ({ page, pageSize }) => {
    const pageNo = !page || page === 1 ? 0 : page - 1;
    const offset = pageNo * pageSize;
    const limit = pageSize;

    return {
      offset,
      limit,
    };
  };

  public async findAllUser({ page, pageSize }) {
    const {
      offset,
      limit,
    } = this.paginate({ page, pageSize });
    const user: any = await users.findAll({
      offset,
      limit,
      include: [{
        model: roles,
        as: 'role',
        attributes: ['id', 'name'],
      }],
    });
    console.log(user.length);

    const foundRoles = await roles.findAll({
      include: [{
        model: users,
        as: 'users',
      }],
    });
    return { user };
  }

  public async findUserById(userId: any): Promise<IUser> {
    if (isEmpty(userId)) throw new BadRequestException('UserId is empty');

    const findUser: any = await users.findOne({
      where: { id: userId },
      include: {
        model: roles,
        as: 'role',
        attributes: ['id', 'name'],
      },
    });
    if (!findUser) throw new ConflictException("User doesn't exist");

    return findUser;
  }

  public async uploadFile(userDataFile: any): Promise<IUser> {
    if (isEmpty(userDataFile)) throw new BadRequestException('Please select file');
    const createUserDataFile: any = await users.bulkCreate(userDataFile);
    return createUserDataFile;
  }

  public async deleteUser(userId: string): Promise<number> {
    const result = await users.destroy({
      where: { id: userId },
    });
    if (!result) throw new ConflictException("User doesn't exist");
    return result;
  }

  public async updateUserDetail(
    userId: string,
    userData: IUser,
  ): Promise<[affectedCount: number, affectedRows: any[]]> {
    const { name, phoneNumber } = userData;
    if (isEmpty(userData)) throw new BadRequestException('user not found');

    if (name || phoneNumber) {
      const result = await users.findOne({
        where: {
          name, phoneNumber,
        },
      });
      if (result) throw new ConflictException('This user already exists');
    }
    const updateUserById: [
      affectedCount: number,
      affectedRows: any[],
    ] = await users.update(
      {
        name, phoneNumber,
      },
      { where: { id: userId }, returning: true },
    );
    if (!updateUserById) throw new ConflictException("Designation doesn't exist");

    return updateUserById;
  }
}
