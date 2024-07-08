import { Animal } from '../typings';
import AlreadyExistsError from '../../common/errors/already-exists.error';

export class AnimalService {
  animals: { [K: string]: Animal } = {};

  constructor() {}

  getList() {
    return Object.values(this.animals);
  }

  create(animal: Animal) {
    if (this.animals[animal.Name]) {
      throw new AlreadyExistsError('Animal already exists');
    }

    this.animals[animal.Name] = animal;
    return this.animals[animal.Name];
  }

  delete(animalName: string) {
    delete this.animals[animalName];
  }
}
