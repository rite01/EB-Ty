import { NextFunction, Request, Response } from 'express';
import { IDepartment } from '../../interfaces';
import { CreateUserDto } from '../../dtos/user.dtos';
import { DepartmentService } from '../../services/department';

export class DepartmentController {
  private departmentService = new DepartmentService();

  /**
   * @swagger
   *
   * /department/create:
   *   post:
   *     tags:
   *      - Department
   *     description: Cerate department
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: user data.
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Create'
   *     responses:
   *       200:
   *         description: success
   * definitions:
   *    Create:
   *      required:
   *          - name
   *          - level
   *      properties:
   *        name:
   *          type: string
   *          description: User name
   *        level:
   *          type: enum
   *          description: User email
   */

  public createDepartment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const departmentData: CreateUserDto = req.body;
      const createDepartmentData: IDepartment = await this.departmentService.createDepartment(departmentData);

      return res.status(201).json({ data: createDepartmentData, status: 200, message: 'department created successfully' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /department/getAll:
   *   get:
   *     tags:
   *      - Department
   *     description: Get all department
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  public getAllDepartments = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllUsersData: IDepartment[] = await this.departmentService.findAllDepartment();

      return res.status(200).json({ data: findAllUsersData, status: 200, message: 'departments fetched successfully' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /department/getAll/:id:
   *   get:
   *     tags:
   *      - Department
   *     description: Get department by id
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  public getDepartmentById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const departmentId: string = req.params.id;
      const findOneUserData: IDepartment = await this.departmentService.findDepartmentById(departmentId);

      return res.status(200).json({ data: findOneUserData, status: 200, message: 'success' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /department/update/:id:
   *   patch:
   *     tags:
   *      - Department
   *     description: Update department
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: body
   *         description: user data.
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Create'
   *     responses:
   *       200:
   *         description: success
   * definitions:
   *    Create:
   *      required:
   *          - name
   *          - description
   *          - logo
   *      properties:
   *        name:
   *          type: string
   *          description: designation name
   *        description:
   *          type: string
   *          description: description
   *        logo:
   *          type: string
   *          description: logo
   */

  public updateDepartment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const departmentId: string = req.params.id;
      const departmentData: CreateUserDto = req.body;
      const updateDepartmentData: [affectedCount: number, affectedRows: any[]] = await this.departmentService.updateDepartment(departmentId, departmentData);

      return res.status(200).json({ data: updateDepartmentData, status: 200, message: 'department updated successfully' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /department/delete/:id:
   *   delete:
   *     tags:
   *      - Department
   *     description: department Delete
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  public deleteDepartment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const departmentId: string = req.params.id;
      const deleteDepartmentData = await this.departmentService.deleteDepartment(departmentId);

      return res.status(200).json({ data: deleteDepartmentData, status: 200, message: 'department deleted successfully' });
    } catch (error) {
      return next(error);
    }
  };
}
