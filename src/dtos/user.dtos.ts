import {
  IsEmail, IsNumber, IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string | undefined;

  @IsString()
  public password: string | Buffer;

  @IsString()
  public name: string | Buffer;

  @IsNumber()
  public phoneNumber: number | Buffer;
}
