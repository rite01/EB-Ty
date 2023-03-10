/* eslint-disable class-methods-use-this */
import { NextFunction, Request, Response } from 'express';
import { LoggerService } from '../../libs';
import { ErrorMessage, HttpMessage, HttpStatus } from '../../constants';

class IndexController {
  private loggerService = new LoggerService();

  /**
   * @swagger
   *
   * /:
   *   get:
   *     tags:
   *      - Health
   *     description: Check server status
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */
  public index = (_: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: HttpMessage.OK,
      });
    } catch (error) {
      return next(error);
    }
  };

  /**
   * @swagger
   *
   * /health:
   *   get:
   *     tags:
   *      - Health
   *     description: Check server status
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: success
   */
  public health = (req: Request, res: Response, next: NextFunction) => {
    try {
      this.loggerService.info(`${ErrorMessage.SERVER_HEALTH} - ${req.originalUrl}`, {
        controller: IndexController.name,
        function: 'health',
        method: req.method,
        status: HttpStatus.OK,
      });
      return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: ErrorMessage.SERVER_HEALTH,
      });
    } catch (error) {
      return next(error);
    }
  };
}

export default IndexController;
