import { Animal } from '../../typings';
import DeleteAnimalButton from '../DeleteAnimalButton/DeleteAnimalButton';
import styles from './AnimalsListItem.module.css';

type AnimalsListItemProps = {
  onRemove: (animal: Animal) => void;
  animal: Animal;
}

export default function AnimalsListItem(props: AnimalsListItemProps) {
  const { animal, onRemove } = props;
  return (
    <div className={styles.wrapper}>
      <DeleteAnimalButton animal={animal} onRemove={onRemove} /> 🪿 {animal.Name}
    </div>
  );
}