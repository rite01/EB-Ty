import { Router } from 'express';
import { config } from '../config';
import { Routes } from '../interfaces/routes.interface';
import { RoutesConstants } from '../constants';
import { DesignationController } from '../controllers/designation';
import { checkRoleMiddleware } from '../middlewares/auth.middlewares';

class Route implements Routes {
  public path = `${config.BASE_URL}/designation`;

  public router = Router();

  public designationController = new DesignationController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    try {
      this.router.post(RoutesConstants.ADMIN.CREATE, checkRoleMiddleware, this.designationController.createDesignation);
      this.router.patch(RoutesConstants.ADMIN.UPDATE, checkRoleMiddleware, this.designationController.updateDesignation);
      this.router.get(RoutesConstants.ADMIN.ALL_DEPARTMENT, checkRoleMiddleware, this.designationController.getAllDesignation);
      this.router.get(RoutesConstants.ADMIN.GET_BY_ID, checkRoleMiddleware, this.designationController.getDesignationById);
      this.router.delete(RoutesConstants.ADMIN.DELETE, checkRoleMiddleware, this.designationController.deleteDesignation);
    } catch (error) {
      console.log('>>>', error);
    }
  }
}

export const DesignationRoute = new Route();
