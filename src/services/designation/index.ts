/* eslint-disable camelcase */
import { BadRequestException, ConflictException } from '../../exceptions';
import { IDesignation } from '../../interfaces';
import { isEmpty } from '../../utils/utils';
import db from '../../databases/models';

export class DesignationService {
  private designation = db.models.designation;

  public async createDesignation(data: any): Promise<IDesignation> {
    if (isEmpty(data)) throw new BadRequestException('data is empty');

    const result: any = await this.designation.findOne({
      where: { name: data.name },
    });
    if (result) throw new ConflictException('This designation already exists');

    const createDesignation: any = await this.designation.create({
      ...data,
    });

    return createDesignation;
  }

  public async findAllDesignations(): Promise<IDesignation[]> {
    const designations: any = await this.designation.findAll();
    return designations;
  }

  public async findDesignationById(
    designationId: string,
  ): Promise<IDesignation> {
    if (isEmpty(designationId)) throw new BadRequestException('designation ID is empty');

    const result: any = await this.designation.findOne({
      where: { id: designationId },
    });
    if (!result) throw new ConflictException("designation doesn't exist");

    return result;
  }

  public async updateDesignation(
    designationId: string,
    designationData: IDesignation,
  ): Promise<[affectedCount: number, affectedRows: any[]]> {
    const { name, level } = designationData;
    if (isEmpty(designationData)) throw new BadRequestException('designationData is empty');

    if (name || level) {
      const result = await this.designation.findOne({
        where: {
          name, level,
        },
      });
      if (result) throw new ConflictException('This designation already exists');
    }
    const updateDesignationById: [
      affectedCount: number,
      affectedRows: any[],
    ] = await this.designation.update(
      {
        name, level,
      },
      { where: { id: designationId }, returning: true },
    );
    if (!updateDesignationById) throw new ConflictException("Designation doesn't exist");

    return updateDesignationById;
  }

  public async deleteDesignation(designationId: string): Promise<number> {
    const result = await this.designation.destroy({
      where: { id: designationId },
    });
    if (!result) throw new ConflictException("Designation doesn't exist");
    return result;
  }
}
