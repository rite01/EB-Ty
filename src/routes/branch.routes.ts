import { Router } from 'express';
import { config } from '../config';
import { Routes } from '../interfaces/routes.interface';
import { RoutesConstants } from '../constants';
import { BranchController } from '../controllers';
import { checkRoleMiddleware } from '../middlewares/auth.middlewares';

class Route implements Routes {
  public path = `${config.BASE_URL}/branch`;

  public router = Router();

  public branchController = new BranchController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    try {
      this.router.post(RoutesConstants.ADMIN.CREATE, checkRoleMiddleware, this.branchController.createBranch);
      this.router.patch(RoutesConstants.ADMIN.UPDATE, checkRoleMiddleware, this.branchController.updateBranch);
      this.router.get(RoutesConstants.ADMIN.ALL_DEPARTMENT, this.branchController.getAllBranches);
      this.router.get(RoutesConstants.ADMIN.GET_BY_ID, checkRoleMiddleware, this.branchController.getBranchById);
      this.router.delete(RoutesConstants.ADMIN.DELETE, checkRoleMiddleware, this.branchController.deleteBranch);
    } catch (error) {
      console.log('>>>', error);
    }
  }
}

export const BranchRoute = new Route();
