import styles from "./AnimalsList.module.css";
import { ReactNode } from "react";

type AnimalsListProps = {
  children: ReactNode;
};

export default function AnimalsList(props: AnimalsListProps) {
  return <div className={styles.wrapper}>{props.children}</div>;
}
