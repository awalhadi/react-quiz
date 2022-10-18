import styles from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

export default function Answers (){
    return (
        <div className={styles.answers}>
            <Checkbox className={styles.answer} text="A New Hope 1" />
            <Checkbox className={styles.answer} text="A New Hope 2" />
            <Checkbox className={styles.answer} text="A New Hope 3" />
            <Checkbox className={styles.answer} text="A New Hope 1" />
            <Checkbox className={styles.answer} text="A New Hope 2" />
            <Checkbox className={styles.answer} text="A New Hope 3" />
            <Checkbox className={styles.answer} text="A New Hope 1" />
            <Checkbox className={styles.answer} text="A New Hope 2" />
            <Checkbox className={styles.answer} text="A New Hope 3" />
        </div>
    );
}