import { Router } from 'express';
import { config } from '../config';
import { Routes } from '../interfaces/routes.interface';
import { RoutesConstants } from '../constants';
import { UserProfileController } from '../controllers/userProfile';

class Route implements Routes {
  public path = `${config.BASE_URL}/profile`;

  public router = Router();

  public profileController = new UserProfileController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    try {
      this.router.post(RoutesConstants.ADMIN.CREATE, this.profileController.createUserProfiles);
      this.router.patch(RoutesConstants.ADMIN.UPDATE, this.profileController.updateProfile);
      this.router.get(RoutesConstants.ADMIN.ALL_DEPARTMENT, this.profileController.getAllProfiles);
      this.router.get(RoutesConstants.ADMIN.GET_BY_ID, this.profileController.getProfileById);
      this.router.delete(RoutesConstants.ADMIN.DELETE, this.profileController.deleteUserProfile);
    } catch (error) {
      console.log('>>>', error);
    }
  }
}

export const UserProfileRoute = new Route();
