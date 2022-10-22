import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

// this PrivateRoute concept works for react router 6 version only
export default function PrivateRoute(){
    const {authUser} = useAuth();
    
    // return authUser?.email ? children : <Navigate to="/auth/login" />;
    return authUser?.email ? <Outlet /> : <Navigate to="/auth/login" />;
}