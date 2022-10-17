import styles from '../styles/Button.module.css';


export default function Button({className, children, ...rest}){
    return (
        <div className={`${styles.button} ${className}`} {...rest}>
            <span>{children}</span>
        </div>
    );
}