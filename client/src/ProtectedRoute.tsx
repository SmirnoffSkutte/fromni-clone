import { FC, ReactNode, useContext } from "react";
import { Navigate, Outlet, RouteProps } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import LoginPage from "./Pages/LoginPage";

interface PrivateRouteProps extends RouteProps {
  children?: ReactNode
  // any props that come into the component
}

const ProtectedRoutes = () => {
    const {isAuth}=useContext(AuthContext)
    return isAuth ? <Outlet/> : <Navigate to="/login"/>
};

export default ProtectedRoutes