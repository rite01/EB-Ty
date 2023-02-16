import 'reflect-metadata';
import express, { Application, Request } from 'express';
import { join } from 'path';
import { Server } from 'http';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import { errorMiddleware } from './middlewares';
import { loggerService } from './libs';
import { ErrorMessage, RoutesConstants } from './constants';
import { config } from './config';
import db from './databases/models';
import { Routes } from './interfaces/routes.interface';
import {
  DepartmentRoute, BranchRoute, IndexRoute, DesignationRoute, UserProfileRoute,
} from './routes';
import { UsersRoute } from './routes/user.routes';
import { NotFoundException } from './exceptions';
import { swaggerSpecs } from './utils/swagger.utils';
import { RoleRoute } from './routes/role.routes';

process.on('uncaughtException', (err: Error) => {
  console.log(`UNCAUGHT EXCEPTION! ${err?.name}: ${err?.message}`);
  loggerService.logger.error(`UNCAUGHT EXCEPTION! ${err?.name}: ${err?.message}`, () => process.exit(1));
});

class App {
  public app: Application;

  public env: string;

  public port: number | boolean;

  public server: Server | undefined;

  constructor() {
    this.app = express();
    this.env = config.NODE_ENV;
    this.port = config.PORT;
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeSwagger();
    this.initializeErrorHandling();
  }

  public async bootstrap(): Promise<void> {
    try {
      await db.authenticate().then(() => {
        loggerService.info(`Database connected 🔥 on ${this.env} mode...`, {
          controller: App.name,
          function: 'bootstrap',
        });
        this.listen();
      });
    } catch (error: any) {
      loggerService.error(`Database not connected: ${error?.message}`, {
        controller: App.name,
        function: 'bootstrap',
      });
      process.exit(1);
    }
  }

  private listen(): void {
    this.server = this.app.listen(this.port, () => {
      loggerService.info(`🚀 App listening on the port ${this.port} ENV: ${this.env} mode...`, {
        controller: App.name,
        function: 'listen',
      });
    });
  }

  public getServerInstance(): Application {
    return this.app;
  }

  private initializeMiddlewares(): void {
    this.app.use(cors({ origin: config.CORS.ORIGIN, credentials: config.CORS.CREDENTIALS }));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(join(__dirname, 'public')));
  }

  private initializeRoutes(): void {
    const routes: Routes[] = [
      IndexRoute,
      UsersRoute,
      DepartmentRoute,
      BranchRoute,
      DesignationRoute,
      RoleRoute,
      UserProfileRoute,
    ];
    routes?.forEach((route) => this.app.use((route.path), route.router));
  }

  private initializeSwagger(): void {
    this.app.use(config.SWAGGER_URL, swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
  }

  private initializeErrorHandling(): void {
    this.app.all(RoutesConstants.NOT_FOUND, (req: Request) => {
      throw new NotFoundException(`Can't find ${req?.originalUrl} on this server!`);
    });
    this.app.use(errorMiddleware);
  }
}

process.on('SIGTERM', () => {
  console.log(ErrorMessage.SIGTERM);
  new App().server?.close(() => {
    loggerService.logger.error('HTTP server closed!');
  });
});

process.on('unhandledRejection', (err: Error) => {
  console.log(ErrorMessage.UNCAUGHT_REJECTION);
  loggerService.logger.error(`UNCAUGHT REJECTION! ${err?.name}: ${err?.message}`, () => process.exit(1));
});

export default new App();
