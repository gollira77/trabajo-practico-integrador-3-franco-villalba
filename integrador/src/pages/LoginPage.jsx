import useForm from "../hooks/useForm.js";
import { useState } from "react";
import Loading from "../../components/Loading";

const LoginPage = ({ onLoginSuccess }) => {
  const { values, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) {
        onLoginSuccess();
      } else {
        alert(data.message || "Credenciales inválidas");
        handleReset();
      }
    } catch (err) {
      console.error(err);
      alert("Error al conectar con el servidor");
      handleReset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      {loading && <Loading />}
      <div className="w-full max-w-sm bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-zinc-800">
        <h2 className="text-3xl font-semibold text-center mb-2 text-white tracking-tight">
          Bienvenido
        </h2>
        <p className="text-center text-sm text-zinc-400 mb-8">
          Inicia sesión para continuar
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-zinc-400 mb-1"
            >
              Usuario
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              placeholder="Tu nombre de usuario"
              className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500
                        focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-400 mb-1"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500
                        focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition
                      shadow-lg shadow-red-600/20"
          >
            Ingresar
          </button>
        </form>

        <p className="text-center text-sm text-zinc-500 mt-6">
          ¿No tienes cuenta?{" "}
          <span className="text-red-500 hover:text-red-400 cursor-pointer transition font-medium">
            Regístrate
          </span>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;