import LoginImage from "../assets/images/login.svg";
import signupImage from "../assets/images/signup.svg";
import styles from "../styles/Illustrator.module.css";


const Illustrator = ({showSignupImage = false}) => {
  const authImage =  showSignupImage ? signupImage : LoginImage;
  return (
    <div className={styles.illustration}>
        <img src={authImage} alt="Signup" />
    </div>
  )
}

export default Illustrator;