import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

// this PrivateRoute concept works for react router 5 version only
export default function PrivateRoute5({component:Component, ...rest}){

    const {authUser} = useAuth();

    return (
        <>
        {
            authUser.email ? (
                <Route {...rest}>
                    {(props) => <Component {...props} />}
                </Route>
            ) : (
                <Navigate to="/login" />
            )
        }
        </>
    );
}