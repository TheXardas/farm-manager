import { ChangeEvent, Ref, useCallback } from 'react';
import styles from './TextInput.module.css';
type TextInputProps = {
  value: string;
  onChange: (newValue: string) => void;
  innerRef?: Ref<HTMLInputElement>;
}

export default function TextInput(props: TextInputProps) {
  const { value, onChange, innerRef } = props;
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }, [onChange])
  return (
    <input className={styles.wrapper} ref={innerRef} autoFocus value={value} onChange={handleChange} />
  )
}