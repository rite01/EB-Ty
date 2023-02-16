import { Router } from 'express';
import { config } from '../config';
import { Routes } from '../interfaces/routes.interface';
import { RoutesConstants } from '../constants';
import { DepartmentController } from '../controllers';
import { checkRoleMiddleware } from '../middlewares/auth.middlewares';

class Route implements Routes {
  public path = `${config.BASE_URL}/department`;

  public router = Router();

  public departmentController = new DepartmentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    try {
      this.router.post(RoutesConstants.ADMIN.CREATE, checkRoleMiddleware, this.departmentController.createDepartment);
      this.router.patch(RoutesConstants.ADMIN.UPDATE, checkRoleMiddleware, this.departmentController.updateDepartment);
      this.router.get(RoutesConstants.ADMIN.ALL_DEPARTMENT, this.departmentController.getAllDepartments);
      this.router.get(RoutesConstants.ADMIN.GET_BY_ID, checkRoleMiddleware, this.departmentController.getDepartmentById);
      this.router.delete(RoutesConstants.ADMIN.DELETE, checkRoleMiddleware, this.departmentController.deleteDepartment);
    } catch (error) {
      console.log('>>>', error);
    }
  }
}

export const DepartmentRoute = new Route();
