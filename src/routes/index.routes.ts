import { Router } from 'express';
import { config } from '../config';
import { Routes } from '../interfaces/routes.interface';
import { RoutesConstants } from '../constants';
import IndexController from '../controllers/health/index.controller';

class Route implements Routes {
  public path = `${config.BASE_URL}/`;

  public router = Router();

  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get(RoutesConstants.HEALTH, this.indexController.health);
  }
}
export const IndexRoute = new Route();
