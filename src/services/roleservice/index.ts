import { IRole } from '../../interfaces';
import db from '../../databases/models';
import { BadRequestException, ConflictException } from '../../exceptions';
import { isEmpty } from '../../utils/utils';

const { roles } = db.models;

export class RoleService {
  public async findAllRoles(): Promise<IRole> {
    const role: any = await roles.findAll();
    return role;
  }

  public async createRole(userData: any): Promise<IRole> {
    if (isEmpty(userData)) throw new BadRequestException('userData is empty');

    const findRole: any = await roles.findOne({ where: { name: userData.name } });
    if (findRole) throw new ConflictException(`This role ${userData.name} already exists`);

    const createRoleData: any = await roles.create({ ...userData });

    return createRoleData;
  }

  public async deleteRole(roleId: string): Promise<IRole> {
    const deleteRoleById: any = await roles.destroy({ where: { id: roleId } });
    if (!deleteRoleById) throw new ConflictException("User doesn't exist");

    return deleteRoleById;
  }

  public async updateRole(
    roleId: string,
    roleData: IRole,
  ): Promise<[affectedCount: number, affectedRows: any[]]> {
    const { id } = roleData;
    if (isEmpty(roleData)) throw new BadRequestException('Role is empty');

    if (id) {
      const result = await roles.findOne({
        where: {
          id,
        },
      });
      if (result) throw new ConflictException('This Role already exists');
    }
    const updateRoleById: [
      affectedCount: number,
      affectedRows: any[],
    ] = await roles.update(
      {
        ...roleData,
      },
      { where: { id: roleId }, returning: true },
    );
    if (!updateRoleById) throw new ConflictException("Role doesn't exist");

    return updateRoleById;
  }

  public async findRoleById(roleId: any): Promise<IRole> {
    if (isEmpty(roleId)) throw new BadRequestException('UserId is empty');

    const findRole: any = await roles.findOne({
      where: { id: roleId },
      include: {
        model: roles,
      },
    });
    if (!findRole) throw new ConflictException("User doesn't exist");

    return findRole;
  }
}
