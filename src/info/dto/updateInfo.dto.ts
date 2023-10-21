import {
  IsString,
  MinLength,
  IsNumber,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class UpdateInfoDto {
  @IsOptional()
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  companyName: string;

  @IsOptional()
  @IsNotEmpty()
  id: number;

  @IsOptional()
  @IsNumber()
  usersQuantity: number;

  @IsOptional()
  @IsNumber()
  productsQuantity: number;

  @IsOptional()
  @IsNumber()
  percentage: number;

  @IsOptional()
  @IsNumber()
  userId: number;
}
