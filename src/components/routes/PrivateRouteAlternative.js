import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function PrivateRouteAlternative({children}){
    const {authUser} = useAuth();
    
    return authUser?.email ? children : <Navigate to="/login"/>;
}