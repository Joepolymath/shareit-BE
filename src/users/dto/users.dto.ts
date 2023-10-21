import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  @IsOptional()
  uid: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Please provide email.' })
  email: string;

  @IsString()
  @IsOptional()
  role: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}
