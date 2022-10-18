import styles from "../styles/Questions.module.css";
import Answers from "./Answers";
export default function Questions() {
  return (
    <div className={styles.question}>
      <div className={styles.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>

      <Answers />
    </div>
  );
}
