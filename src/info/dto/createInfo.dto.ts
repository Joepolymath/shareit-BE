import {
  IsNotEmpty,
  IsEmpty,
  IsString,
  MinLength,
  IsNumber,
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

  @IsNumber()
  @IsEmpty()
  userId: number;
}
