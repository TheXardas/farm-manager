import styles from "./AddAnimalForm.module.css";
import TextInput from "../../../common/components/TextInput/TextInput";
import Button from "../../../common/components/Button/Button";
import { FormEvent, useCallback, useRef, useState } from "react";
import animalsApiService from "../../services/AnimalsApiService";
import { Animal } from "../../typings";

type AddAnimalFormProps = {
  onAdd: (newAnimal: Animal) => void;
};

export default function AddAnimalForm(props: AddAnimalFormProps) {
  const { onAdd } = props;
  const [animalName, setAnimalName] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onCreateClick = useCallback(async () => {
    try {
      const result = await animalsApiService.create({ Name: animalName });
      onAdd(result);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
    setAnimalName("");
    inputRef.current?.focus();
  }, [onAdd, animalName, setAnimalName]);

  const onAnimalNameChanged = useCallback(
    (newName: string) => {
      setAnimalName(newName);
      setError("");
    },
    [setAnimalName],
  );

  const disabled = animalName.trim().length === 0;

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      onCreateClick();
    },
    [onCreateClick, disabled],
  );

  return (
    <form onSubmit={onSubmit}>
      <div className={styles.wrapper}>
        <span>Add new animal: </span>
        <TextInput
          innerRef={inputRef}
          value={animalName}
          onChange={onAnimalNameChanged}
        />
        <Button type="button" disabled={disabled} onClick={onCreateClick}>
          Create
        </Button>
        <span className={styles.error}>{error}</span>
      </div>
    </form>
  );
}
