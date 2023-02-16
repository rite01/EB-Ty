import { Router } from 'express';
import { config } from '../config';
import { Routes } from '../interfaces/routes.interface';
import { RoutesConstants } from '../constants';
import { RoleController } from '../controllers/role/role.controller';

class Route implements Routes {
  public path = `${config.BASE_URL}/role`;

  public router = Router();

  public roleController = new RoleController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    try {
      this.router.get(RoutesConstants.ROLE.GET_ROLE, this.roleController.getRoles);
      this.router.post(RoutesConstants.ROLE.CREATE, this.roleController.createRole);
      this.router.patch(RoutesConstants.ROLE.UPDATE, this.roleController.updateRole);
      this.router.get(RoutesConstants.ROLE.GET_BY_ID, this.roleController.getRoleById);
      this.router.delete(RoutesConstants.ROLE.DELETE, this.roleController.deleteRole);
    } catch (error) {
      console.log('>>>', error);
    }
  }
}

export const RoleRoute = new Route();
