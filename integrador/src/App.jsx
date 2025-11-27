import AppRouter from "../routes/AppRouter";
import { useState } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("isLogged"));

  const handleLogin = () => {
    localStorage.setItem("isLogged", "true");
    setIsAuth(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    setIsAuth(false);
  };

  return (
    <>
      <Navbar isAuth={isAuth} onLogout={handleLogout} />
      <AppRouter isAuth={isAuth} onLogin={handleLogin} />
      <Footer />
    </>
  );
};

export default App;