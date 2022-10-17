import styles from "../styles/InputText.module.css";

export default function InputText ({icon, ...rest}){
    return (
        <div className={styles.textInput}>
            <input {...rest} />
            <span className="material-icons-outlined"> {icon} 
            </span>
        </div>
    );
}