import AnimalsList from '../AnimalsList/AnimalsList';
import AddAnimalForm from '../AddAnimalForm/AddAnimalForm';
import { Animal } from '../../typings';
import AnimalsListItem from '../AnimalsListItem/AnimalsListItem';
import Placeholder from '../../../common/components/Placeholder/Placeholder';
import styles from './AnimalsPage.module.css';
import { useCallback, useEffect, useState } from 'react';
import animalsApiService from '../../services/AnimalsApiService';

export default function AnimalsPage() {
  const [animals, setAnimals] = useState<Animal[]>([]);

  const loadAnimals = useCallback(() => {
    animalsApiService.getList()
      .then((apiAnimals: Animal[]) => setAnimals(apiAnimals));
  }, [setAnimals])

  useEffect(() => {
    loadAnimals();
  }, [])

  return (
    <div className={styles.wrapper}>
      <AddAnimalForm onAdd={loadAnimals}/>

      <AnimalsList>
        {animals.length > 0 ? animals.map((animal) =>
          <AnimalsListItem key={animal.Name} animal={animal} onRemove={loadAnimals}/>
        ) : (
          <Placeholder>
            No animals in database.
          </Placeholder>
        )}
      </AnimalsList>
    </div>
  );
}