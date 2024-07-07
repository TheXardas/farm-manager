import AnimalsPage from "../../../animals/components/AnimalsPage/AnimalsPage";
import Header from "../Header/Header";
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.wrapper}>
      <Header/>

      <AnimalsPage/>
    </div>
  );
}
