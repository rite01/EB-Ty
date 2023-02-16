import { HttpMessage, HttpStatus } from '../constants';
import { HttpException } from './http.exception';

export class ForbiddenException extends HttpException {
  public status: number = HttpStatus.FORBIDDEN;

  public message: string;

  constructor(message?: string | undefined) {
    super(message);
    this.message = message || HttpMessage.FORBIDDEN;
    Error.captureStackTrace(this, this.constructor);
  }
}
