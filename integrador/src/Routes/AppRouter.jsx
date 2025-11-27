import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ProfilePage from "../pages/ProfilePage";
import TasksPage from "../pages/Tasks";

const AppRouter = () => {
    return (
        <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        </Routes>
    );
};

export default AppRouter;