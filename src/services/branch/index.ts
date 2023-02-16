/* eslint-disable camelcase */
import { BadRequestException, ConflictException } from '../../exceptions';
import { IBranch } from '../../interfaces';
import { isEmpty } from '../../utils/utils';
import db from '../../databases/models';

export class BranchService {
  private branch = db.models.branches;

  public async createBranch(branchData: any): Promise<IBranch> {
    const {
      buildingNo, street, landmark,
    } = branchData;
    if (isEmpty(branchData)) throw new BadRequestException('branch is empty');

    const result: any = await this.branch.findOne({
      where: {
        buildingNo, street, landmark,
      },
    });
    if (result) throw new ConflictException('This branch already exists');

    const createBranch: any = await this.branch.create({
      ...branchData,
    });

    return createBranch;
  }

  public async findAllBranches(): Promise<IBranch[]> {
    const branches: any = await this.branch.findAll();
    return branches;
  }

  public async findBranchById(
    branchId: string,
  ): Promise<IBranch> {
    if (isEmpty(branchId)) throw new BadRequestException('Department ID is empty');

    const result: any = await this.branch.findOne({
      where: { id: branchId },
    });
    if (!result) throw new ConflictException("Department doesn't exist");

    return result;
  }

  public async updateBranch(
    branchId: string,
    branchData: IBranch,
  ): Promise<[affectedCount: number, affectedRows: any[]]> {
    const {
      buildingNo, street, landmark, city, state, country, zipCode,
    } = branchData;
    if (isEmpty(branchData)) throw new BadRequestException('branchData is empty');

    // if (branchData) {
    //   const result = await this.branch.findOne({
    //     where: {
    //       building_no, street, landmark,
    //     },
    //   });
    //   if (result) throw new ConflictException('This branch already exists');
    // }
    const updateBranchById: [
      affectedCount: number,
      affectedRows: any[],
    ] = await this.branch.update(
      {
        buildingNo, street, landmark, city, state, country, zipCode,
      },
      { where: { id: branchId }, returning: true },
    );
    if (!updateBranchById) throw new ConflictException("Branch doesn't exist");

    return updateBranchById;
  }

  public async deleteBranch(branchId: string): Promise<number> {
    const result = await this.branch.destroy({
      where: { id: branchId },
    });
    if (!result) throw new ConflictException("Branch doesn't exist");
    return result;
  }
}
