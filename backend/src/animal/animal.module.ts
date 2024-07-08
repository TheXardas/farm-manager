import { Module } from '@nestjs/common';
import { AnimalController } from './controllers/animal.controller';
import { AnimalService } from './services/animal.service';

@Module({
  imports: [],
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule {}
