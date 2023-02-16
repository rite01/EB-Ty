/* eslint-disable radix */
import { NextFunction, Request, Response } from 'express';
import { IUser } from '../../interfaces';
import { CreateUserDto } from '../../dtos/user.dtos';
import { UserService } from '../../services/user';
import { readBuffer } from '../../utils/fs.utils';

class UsersController {
  public userService = new UserService();

  /**
   * @swagger
   *
   * /create:
   *   post:
   *     tags:
   *      - Users
   *     description: Create User to the application
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
   *          - email
   *          - phoneNumber
   *          - password
   *      properties:
   *        name:
   *          type: string
   *          description: User name
   *        email:
   *          type: string
   *          description: User email
   *        phone:
   *          type: string
   *          description: User phone number
   *        password:
   *          type: string
   *          description: User password
   */

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const createUserData: IUser = await this.userService.createUser({ ...userData });

      return res.status(201).json({ data: createUserData, status: 200, message: 'created' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /login:
   *   post:
   *     tags:
   *      - Users
   *     description: Login user to the application
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
   *          - email
   *          - password
   *      properties:
   *        email:
   *          type: string
   *          description: User email
   *        password:
   *          type: string
   *          description: User password
   */

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const responseData = await this.userService.login(userData);

      return res.status(200).json({ ...responseData, status: 200, message: 'login successfully' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /getAll:
   *   get:
   *     tags:
   *      - Users
   *     description: Login user to the application
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  public getUsers = async (req: any, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page) || 0;
      const pageSize = parseInt(req.query.limit) || 25;
      const findAllUsersData:any = await this.userService.findAllUser({
        pageSize,
        page,
      });

      return res.status(200).json({
        data: findAllUsersData, status: 200, message: 'findAll data',
      });
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
   *      - Users
   *     description: Login user to the application
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: any = req.params.id;
      const findOneUserData: IUser = await this.userService.findUserById(userId);

      return res.status(200).json({ data: findOneUserData, status: 200, message: 'findOne' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /delete/:id:
   *   delete:
   *     tags:
   *      - Users
   *     description: Login user to the application
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */

  public deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await this.userService.deleteUser(id);

      return res.status(200).json({ data, status: 200, message: 'user deleted successfully' });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /update/:id:
   *   patch:
   *     tags:
   *      - Users
   *     description: Update user profile
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
   *          - phone
   *      properties:
   *        name:
   *          type: string
   *          description: user name
   *        phone:
   *          type: string
   *          description: user phone
   */

  public updateUserDetail = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const userData: IUser = req.body;
      const data = await this.userService.updateUserDetail(id, userData);

      return res.status(200).json({ data, status: 200, message: 'User updated successfully' });
    } catch (error) {
      return next(error);
    }
  };

  public uploadUserFile = async (req: any, res: any, next: NextFunction) => {
    try {
      if (!req.file) {
        return res.status(400).send('Please upload a CSV file!');
      }
      const data = await readBuffer(req.file.buffer);
      await this.userService.uploadFile(data);
      return res.status(200).json({
        status: 200,
        message: 'data insert successfully',
      });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  };
}

export default UsersController;
