/* eslint-disable class-methods-use-this */
import { compare, genSalt, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { config } from '../../config';
import { IUser } from '../../interfaces';

export class BcryptService {
  async hashPassword(password: string): Promise<string> {
    const salt: string = await genSalt(10);
    const hashedPassword: string = await hash(password, salt);
    return hashedPassword;
  }

  async comparePassword(enteredPassword: string, originalPassword: string): Promise<boolean> {
    const isMatch: boolean = await compare(enteredPassword, originalPassword);
    return isMatch;
  }

  public createToken(user: any): any {
    const dataStoredInToken: any = { id: user.id, role: user?.role?.name };
    const secretKey: string = config.JWT.JWT_SECRET;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }
}

export const bcryptService = new BcryptService();
