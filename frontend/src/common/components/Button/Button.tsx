import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  disabled?: boolean;
  onClick: () => void;
  type?: "submit" | "button";
  children: ReactNode;
};

export default function Button(props: ButtonProps) {
  const { disabled, onClick, children, type } = props;
  return (
    <button
      type={type}
      disabled={disabled}
      className={styles.wrapper}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
