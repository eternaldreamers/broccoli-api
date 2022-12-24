import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateStateDto, UpdateStateDto } from './dto/create-state.dto';
import { State } from './state.entity';
import { StateService } from './state.service';

@Controller('states')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  findAll(): Promise<State[]> {
    return this.stateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<State> {
    return this.stateService.findOne(id);
  }

  @Post()
  create(@Body() createUserDto: CreateStateDto) {
    return this.stateService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateStateDto) {
    return this.stateService.update(id, payload);
  }

  @Delete(':id')
  DeleteById(@Param('id') id: string) {
    return this.stateService.deleteById(id);
  }
}
