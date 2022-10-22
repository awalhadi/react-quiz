import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";


// this PrivateRoute concept works for react router 5 version only

export default function PublicRoute5 ({component:Component, ...rest}){
    const {authUser} = useAuth();
    return (
        <>
        {
            !authUser?.email ? (
                <Navigate {...rest}>
                    {(props) => <Component {...props}/>}
                </Navigate>
            ) : (
                <Navigate to="/" />
            )
        }
        </>
        
    );
}