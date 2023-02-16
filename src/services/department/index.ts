import { BadRequestException, ConflictException } from '../../exceptions';
import { IDepartment } from '../../interfaces';
import { CreateUserDto } from '../../dtos/user.dtos';
import db from '../../databases/models';
import { isEmpty } from '../../utils/utils';

const { department } = db.models;
export class DepartmentService {
  public async createDepartment(departmentData: any): Promise<IDepartment> {
    if (isEmpty(departmentData)) throw new BadRequestException('department is empty');

    const findDepartment: any = await department.findOne({
      where: { name: departmentData.name },
    });
    if (findDepartment) throw new ConflictException('This department already exists');

    const createDepartment: any = await department.create({
      ...departmentData,
    });

    return createDepartment;
  }

  public async findAllDepartment(): Promise<IDepartment[]> {
    const departments: any = await department.findAll();
    return departments;
  }

  public async findDepartmentById(
    departmentId: string,
  ): Promise<IDepartment> {
    if (isEmpty(departmentId)) throw new BadRequestException('Department ID is empty');

    const findDepartment: any = await department.findOne({
      where: { id: departmentId },
    });
    if (!findDepartment) throw new ConflictException("Department doesn't exist");

    return findDepartment;
  }

  public async updateDepartment(
    departmentId: string,
    departmentData: CreateUserDto,
  ): Promise<[affectedCount: number, affectedRows: any[]]> {
    if (isEmpty(departmentData)) throw new BadRequestException('departmentData is empty');

    if (departmentData.name) {
      const findDepartment = await department.findOne({
        where: { name: departmentData.name },
      });
      if (findDepartment) throw new ConflictException('This department already exists');
    }
    const updateDepartmentById: [
      affectedCount: number,
      affectedRows: any[],
    ] = await department.update(
      { name: departmentData.name },
      { where: { id: departmentId }, returning: true },
    );
    if (!updateDepartmentById) throw new ConflictException("Department doesn't exist");

    return updateDepartmentById;
  }

  public async deleteDepartment(departmentId: string): Promise<number> {
    const result = await department.destroy({
      where: { id: departmentId },
    });
    if (!result) throw new ConflictException("Department doesn't exist");
    return result;
  }
}
