import { ReactNode } from 'react';
import styles from './Placeholder.module.css';
type PlaceholderProps = {
  children: ReactNode;
}

export default function Placeholder(props: PlaceholderProps) {
  return (
    <div className={styles.wrapper}>{props.children}</div>
  );
}