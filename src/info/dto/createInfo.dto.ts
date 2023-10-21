import {
  IsNotEmpty,
  IsEmpty,
  IsString,
  MinLength,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateInfoDto {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  companyName: string;

  @IsNumber()
  @IsNotEmpty()
  usersQuantity: number;

  @IsNumber()
  @IsNotEmpty()
  productsQuantity: number;

  @IsNumber()
  @IsNotEmpty()
  percentage: number;

  @IsString()
  @IsNotEmpty()
  userUid: string;
}
export class UpdateInfoDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsOptional()
  companyName: string;

  @IsNumber()
  @IsOptional()
  usersQuantity: number;

  @IsNumber()
  @IsOptional()
  productsQuantity: number;

  @IsNumber()
  @IsOptional()
  percentage: number;

  @IsString()
  @IsOptional()
  userUid: string;
}
