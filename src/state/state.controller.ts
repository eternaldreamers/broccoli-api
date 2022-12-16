import { Controller, Get } from '@nestjs/common';
import { State } from './state.entity';
import { StateService } from './state.service';

@Controller('states')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  findAll(): Promise<State[]> {
    return this.stateService.findAll();
  }
}
