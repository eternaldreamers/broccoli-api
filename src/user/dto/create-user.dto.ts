import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  username: string;

  @IsString()
  @IsEmail()
  @ApiProperty({
    description: 'the email of the user',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;

  @IsPositive()
  @IsOptional()
  @ApiProperty()
  level: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  picture: string;
}
