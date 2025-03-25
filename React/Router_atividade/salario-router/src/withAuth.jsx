import { Navigate } from "react-router-dom";

const withAuth = (Component) => {
  const AuthRoute = () => {
    const isAuth = !!localStorage.getItem("usuario");
    return isAuth ? <Component /> : <Navigate to="/login" />;
  };
  return AuthRoute;
};

export default withAuth;