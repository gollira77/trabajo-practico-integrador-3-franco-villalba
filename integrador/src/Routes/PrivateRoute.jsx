import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isAuth }) => {
    if (!isAuth) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;