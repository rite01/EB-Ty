import { NextFunction, Request, Response } from 'express';
import { IRole } from '../../interfaces';
import { RoleService } from '../../services/roleservice';

export class RoleController {
  public roleData = new RoleService();

  /**
   * @swagger
   *
   * /role/create:
   *   post:
   *     tags:
   *      - Role
   *     description: Create Role
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
   *      properties:
   *        name:
   *          type: string
   *          description: Role name
   */
  public createRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roleData = req.body;
      const createUserRoleData: IRole = await this.roleData.createRole({ ...roleData });

      return res.status(201).json({ data: createUserRoleData, status: 200, message: 'role created' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /role/getAll:
   *   get:
   *     tags:
   *      - Role
   *     description: Get Roles
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  public getRoles = async (_: Request, res: Response, next: NextFunction) => {
    try {
      const findAllRolesData: any = await this.roleData.findAllRoles();

      return res.status(200).json({ data: findAllRolesData, status: 200, message: 'get all roles' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /role/delete/:id:
   *   delete:
   *     tags:
   *      - Role
   *     description: Role Delete
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */
  public deleteRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await this.roleData.deleteRole(id);

      return res.status(200).json({ data, status: 200, message: 'role deleted successfully' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /get/:id:
   *   get:
   *     tags:
   *      - Role
   *     description: Get role by id
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  public getRoleById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roleId: any = req.params.id;
      const findOneRoleData: IRole = await this.roleData.findRoleById(roleId);

      return res.status(200).json({ data: findOneRoleData, status: 200, message: 'findOne' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /role/update/:id:
   *   patch:
   *     tags:
   *      - Role
   *     description: Update Role
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
   *      properties:
   *        name:
   *          type: string
   *          description: role name
   */

  public updateRole = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const role: any = req.body;
      const data = await this.roleData.updateRole(id, role);

      return res.status(200).json({ data, status: 200, message: 'Role updated successfully' });
    } catch (error) {
      return next(error);
    }
  };
}
