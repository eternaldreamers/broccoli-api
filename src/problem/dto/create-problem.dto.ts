import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsPositive, IsString } from 'class-validator';

export class CreateProblemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  link: string;

  @IsPositive()
  @IsOptional()
  @ApiProperty()
  rating: number;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  readonly idPlatform: string;
}

export class UpdateProblemDto extends PartialType(CreateProblemDto) {}
