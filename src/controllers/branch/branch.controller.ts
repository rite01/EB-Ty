import { NextFunction, Request, Response } from 'express';
import { IBranch } from '../../interfaces';
import { CreateUserDto } from '../../dtos/user.dtos';
import { BranchService } from '../../services';

export class BranchController {
  private branchService = new BranchService();

  /**
   * @swagger
   *
   * /branch/create:
   *   post:
   *     tags:
   *      - Branch
   *     description: Cerate branch
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
   *          - buildingNo
   *          - street
   *          - landmark
   *          - city
   *          - state
   *          - country
   *          - zipCode
   *      properties:
   *        buildingNo:
   *          type: integer
   *          description: building number
   *        street:
   *          type: string
   *          description: street
   *        landmark:
   *          type: string
   *          description: landmark
   *        city:
   *          type: string
   *          description: city
   *        state:
   *          type: string
   *          description: state
   *        country:
   *          type: string
   *          description: country
   *        zipCode:
   *          type: integer
   *          description: zipCode
   */

  public createBranch = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const departmentData: CreateUserDto = req.body;
      const data: IBranch = await this.branchService.createBranch(departmentData);

      return res.status(201).json({ data, status: 200, message: 'branch created successfully' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /branch/getAll:
   *   get:
   *     tags:
   *      - Branch
   *     description: Get all branch
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  public getAllBranches = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: IBranch[] = await this.branchService.findAllBranches();

      return res.status(200).json({ data, status: 200, message: 'branches fetched successfully' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /branch/getAll/:id:
   *   get:
   *     tags:
   *      - Branch
   *     description: Get branch by id
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  public getBranchById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data: IBranch = await this.branchService.findBranchById(id);

      return res.status(200).json({ data, status: 200, message: 'success' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /branch/create:
   *   patch:
   *     tags:
   *      - Branch
   *     description: Cerate branch
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
   *          - buildingNo
   *          - street
   *          - landmark
   *          - city
   *          - state
   *          - country
   *          - zipCode
   *      properties:
   *        buildingNo:
   *          type: integer
   *          description: building number
   *        street:
   *          type: string
   *          description: street
   *        landmark:
   *          type: string
   *          description: landmark
   *        city:
   *          type: string
   *          description: city
   *        state:
   *          type: string
   *          description: state
   *        country:
   *          type: string
   *          description: country
   *        zipCode:
   *          type: integer
   *          description: zipCode
   */

  public updateBranch = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const branchData: IBranch = req.body;
      const data = await this.branchService.updateBranch(id, branchData);

      return res.status(200).json({ data, status: 200, message: 'branch updated successfully' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /branch/delete/:id:
   *   delete:
   *     tags:
   *      - Branch
   *     description: branch Delete
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  public deleteBranch = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await this.branchService.deleteBranch(id);

      return res.status(200).json({ data, status: 200, message: 'branch deleted successfully' });
    } catch (error) {
      return next(error);
    }
  };
}
