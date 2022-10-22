
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

// this PrivateRoute concept works for react router 6 version only
export default function PublicRoute(){
    const {authUser} = useAuth();
    
    return authUser?.email ? <Navigate to="/" /> :  <Outlet />;
    // return authUser?.email ? <Navigate to="/" /> : children;
}