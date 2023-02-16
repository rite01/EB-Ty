import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

export const GenerateToken = (data: any): string => {
  const token = jwt.sign(data, process.env.JWT_TOKEN as string);
  return token;
};

export const GenerateRefreshToken = (data: any): string => {
  const token = jwt.sign(data, process.env.JWT_REFRESH_TOKEN as string, { expiresIn: '1d' });

  return token;
};

export const PasswordHashing = async (password: string): Promise<string> => {
  const result = await bcrypt.hash(password, 10);
  return result;
};

export const PasswordCompare = async (password: string, passwordHash: string): Promise<boolean> => {
  const matched = await bcrypt.compare(password, passwordHash);

  return matched;
};

export const ExtractToken = (token: string): any | null => {
  const secretKey: string = process.env.JWT_TOKEN as string;

  let resData: any;

  const res:any = jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      resData = null;
    } else {
      resData = decoded;
    }
    return res;
  });

  if (resData) {
    const result: any = <any>(resData);
    return result;
  }
  return null;
};
