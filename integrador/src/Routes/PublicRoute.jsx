import { Navigate } from "react-router-dom";

const PublicRoute = ({ children, isAuth }) => {
    if (isAuth) {
        return <Navigate to="/home" />;
    }

    return children;
};

export default PublicRoute;