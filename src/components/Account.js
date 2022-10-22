import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "../styles/Account.module.css";

export default function Account(){
    const {authUser, logout} = useAuth();
    const navigate = useNavigate();
    
    async function LogoutHandler(){
        
        // signOut
        await logout();
        navigate('/');
    }
    return (
        <div className={styles.account}>
            
            {authUser.email ? (
                <>
                    <span className="material-icons-outlined" title="Account">
                    account_circle
                    </span>
                    <span>{authUser.displayName}</span>
                    <span className="material-icons-outlined" title="Logout" onClick={LogoutHandler} > logout </span>
                </>
            ):(
                <>
                    <Link to="/auth/signup">Signup</Link>
                    <Link to="/auth/login">Login</Link>
                </>
            )}
            

            
            
      </div>
    );
}