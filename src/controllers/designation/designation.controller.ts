import { NextFunction, Request, Response } from 'express';
import { IDesignation } from '../../interfaces';
import { CreateUserDto } from '../../dtos/user.dtos';
import { DesignationService } from '../../services';

export class DesignationController {
  private designationService = new DesignationService();

  /**
   * @swagger
   *
   * /designation/create:
   *   post:
   *     tags:
   *      - Designation
   *     description: Cerate Designation
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
  public createDesignation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const designationData: CreateUserDto = req.body;
      const data: IDesignation = await this.designationService.createDesignation(designationData);

      return res.status(201).json({ data, status: 200, message: 'designation created successfully' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /designation/getAll:
   *   get:
   *     tags:
   *      - Designation
   *     description: Get all designation
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  public getAllDesignation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: IDesignation[] = await this.designationService.findAllDesignations();

      return res.status(200).json({ data, status: 200, message: 'designation fetched successfully' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /designation/getAll/:id:
   *   get:
   *     tags:
   *      - Designation
   *     description: Get designation by id
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  public getDesignationById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data: IDesignation = await this.designationService.findDesignationById(id);

      return res.status(200).json({ data, status: 200, message: 'success' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /designation/update/:id:
   *   patch:
   *     tags:
   *      - Designation
   *     description: Update designation
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
   *          description: designation name
   *        level:
   *          type: enum
   *          description: designation level
   */

  public updateDesignation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const designationData: IDesignation = req.body;
      const data = await this.designationService.updateDesignation(id, designationData);

      return res.status(200).json({ data, status: 200, message: 'designation updated successfully' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /designation/delete/:id:
   *   delete:
   *     tags:
   *      - Designation
   *     description: Role Delete
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  public deleteDesignation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await this.designationService.deleteDesignation(id);

      return res.status(200).json({ data, status: 200, message: 'designation deleted successfully' });
    } catch (error) {
      return next(error);
    }
  };
}
