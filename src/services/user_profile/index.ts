/* eslint-disable camelcase */
import { BadRequestException, ConflictException } from '../../exceptions';
import { IUserProfile } from '../../interfaces';
import { isEmpty } from '../../utils/utils';
import db from '../../databases/models';

const {
  users, userProfile, branches, department, designation,
} = db.models;
export class UserProfileService {
  public async createUserProfile(data: any): Promise<IUserProfile> {
    if (isEmpty(data)) throw new BadRequestException('data is empty');

    const result: any = await userProfile.findOne({
      where: { userId: data.userId },
    });
    if (result) throw new ConflictException('This user profile already exists');

    const createdUserProfile: any = await userProfile.create({
      ...data,
    });

    return createdUserProfile;
  }

  public async findAllUserProfiles() {
    const foundProfiles = await userProfile.findAll({
      include: [{
        model: users,
        as: 'userDetails',
      }, {
        model: branches,
        as: 'branchDetails',
      },
      {
        model: department,
        as: 'departmentDetails',
      },
      {
        model: designation,
        as: 'designationDetails',
      },
      ],
    });
    // const user: any = await users.findAll({
    //   include: [{
    //     model: roles,
    //     as: 'role',
    //   }],
    // });
    // const userProfiles: any = await userProfile.findAll();
    return foundProfiles;
  }

  public async findProfilesById(
    profileId: string,
  ): Promise<IUserProfile> {
    if (isEmpty(profileId)) throw new BadRequestException('profile ID is empty');

    const result: any = await userProfile.findOne({
      where: { id: profileId },
      include: [{
        model: users,
        as: 'userDetails',
      }, {
        model: branches,
        as: 'branchDetails',
      },
      {
        model: department,
        as: 'departmentDetails',
      },
      {
        model: designation,
        as: 'designationDetails',
      },
      ],
    });
    if (!result) throw new ConflictException("profile doesn't exist");

    return result;
  }

  public async updateUserProfile(
    profileId: string,
    profileData: IUserProfile,
  ): Promise<[affectedCount: number, affectedRows: any[]]> {
    const { userId } = profileData;
    if (isEmpty(profileData)) throw new BadRequestException('profileData is empty');

    if (userId) {
      const result = await userProfile.findOne({
        where: {
          userId,
        },
      });
      if (result) throw new ConflictException('This designation already exists');
    }
    const updateProfileById: [
      affectedCount: number,
      affectedRows: any[],
    ] = await userProfile.update(
      {
        ...profileData,
      },
      { where: { id: profileId }, returning: true },
    );
    if (!updateProfileById) throw new ConflictException("Profile doesn't exist");

    return updateProfileById;
  }

  public async deleteUserProfile(profileId: string): Promise<number> {
    const result = await userProfile.destroy({
      where: { id: profileId },
    });
    if (!result) throw new ConflictException("Profile doesn't exist");
    return result;
  }
}
