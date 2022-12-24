import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserProblemDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly idUser: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly idProblem: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly idState: string;
}

export class UpdateUserProblemDto extends PartialType(CreateUserProblemDto) {}
