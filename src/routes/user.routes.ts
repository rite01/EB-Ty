import { Router } from 'express';
import { config } from '../config';
import { CreateUserDto } from '../dtos/user.dtos';
import { validationMiddleware } from '../middlewares/validation.middleware';
import { Routes } from '../interfaces/routes.interface';
import { RoutesConstants } from '../constants';
import UsersController from '../controllers/user/users.controller';
import { FileUpload } from '../middlewares/multer';

class Route implements Routes {
  public path = `${config.BASE_URL}/`;

  public router = Router();

  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    try {
      this.router.post(RoutesConstants.USER.CREATE, validationMiddleware(CreateUserDto, 'body'), this.usersController.createUser);
      this.router.patch(RoutesConstants.USER.UPDATE, this.usersController.updateUserDetail);
      this.router.post(RoutesConstants.USER.LOGIN, this.usersController.logIn);
      this.router.post(RoutesConstants.USER.CSV, FileUpload, this.usersController.uploadUserFile);
      this.router.get(RoutesConstants.USER.ALL_USER, this.usersController.getUsers);
      this.router.get(RoutesConstants.USER.GET_BY_ID, this.usersController.getUserById);
      this.router.delete(RoutesConstants.USER.DELETE, this.usersController.deleteUser);
    } catch (error) {
      console.log('>>>', error);
    }
  }
}

export const UsersRoute = new Route();
