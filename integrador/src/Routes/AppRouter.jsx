import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import TasksPage from "../pages/Tasks";
import PrivateRoute from "../pages/PrivateRoute";
import PublicRoute from "../pages/PublicRoute";

const AppRouter = ({ isAuth }) => {

    return (
        <Routes>
         <Route
        path="/login"
        element={
          <PublicRoute isAuth={isAuth}>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute isAuth={isAuth}>
            <RegisterPage />
          </PublicRoute>
        }
      />

      {/* Rutas Privadas */}
      <Route
        path="/home"
        element={
          <PrivateRoute isAuth={isAuth}>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute isAuth={isAuth}>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/tasks"
        element={
          <PrivateRoute isAuth={isAuth}>
            <TasksPage />
          </PrivateRoute>
        }
      />
       <Route path="*" element={<Navigate to={isAuth ? "/home" : "/login"} />} />
        </Routes>
    );
};

export default AppRouter;