import Button from "../../../common/components/Button/Button";
import { Animal } from "../../typings";
import { useCallback } from "react";
import animalsApiService from "../../services/AnimalsApiService";

type DeleteAnimalButtonProps = {
  onRemove: (animal: Animal) => void;
  animal: Animal;
};

export default function DeleteAnimalButton(props: DeleteAnimalButtonProps) {
  const { animal, onRemove } = props;
  const onClick = useCallback(async () => {
    await animalsApiService.delete(animal);
    onRemove(animal);
  }, [animal, onRemove]);

  return <Button onClick={onClick}>❌</Button>;
}
