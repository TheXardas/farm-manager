import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { AnimalService } from '../services/animal.service';
import { Animal } from '../typings';
import { IsNotEmpty } from 'class-validator';

export class CreateAnimalDto {
  @IsNotEmpty()
  Name: string;
}

@Controller('/animal')
export class AnimalController {
  constructor(private animalService: AnimalService) {}

  @Get()
  getList(): Animal[] {
    return this.animalService.getList();
  }

  @Post()
  create(
    @Res() response,
    @Req() request,
    @Body() animal: CreateAnimalDto,
  ): Animal {
    const requestBody = { Name: animal.Name };

    try {
      const newAnimal = this.animalService.create(requestBody);
      return response.status(HttpStatus.CREATED).json(newAnimal);
    } catch (e) {
      if (e.constructor.name === 'AlreadyExistsError') {
        return response.status(HttpStatus.CONFLICT).json('Already exists');
      }
      return response
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json('Internal Server Error');
    }
  }

  @Delete('/:name')
  delete(@Res() response, @Param('name') name): void {
    this.animalService.delete(name);

    return response.status(HttpStatus.OK).json('Animal removed');
  }
}
