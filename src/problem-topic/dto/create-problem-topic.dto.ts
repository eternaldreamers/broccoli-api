import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProblemTopicDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly idProblem: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly idTopic: string;
}

export class UpdateProblemTopicDto extends PartialType(CreateProblemTopicDto) {}
