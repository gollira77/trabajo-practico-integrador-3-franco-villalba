import useForm from "../hooks/useForm.js";

const RegisterPage = () => {
  const { values, handleChange, handleReset } = useForm({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    dni: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Valores de registro:", values);
    handleReset();
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-zinc-950 text-white py-12">
      <div className="w-full max-w-md bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-zinc-800">
        <h2 className="text-3xl font-semibold text-center mb-2 text-white tracking-tight">
          Crear cuenta
        </h2>
        <p className="text-center text-sm text-zinc-400 mb-8">
          Completa los campos para registrarte
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
              name="username"
              type="text"
              placeholder="Nombre de usuario"
              value={values.username}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500
                        focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-400 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="correo@ejemplo.com"
              value={values.email}
              onChange={handleChange}
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
              name="password"
              type="password"
              placeholder="••••••••"
              value={values.password}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500
                        focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
              required
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-zinc-400 mb-1"
              >
                Nombre
              </label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                placeholder="Hai"
                value={values.firstname}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500
                          focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
                required
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-zinc-400 mb-1"
              >
                Apellido
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Weiss"
                value={values.lastname}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500
                          focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="dni"
              className="block text-sm font-medium text-zinc-400 mb-1"
            >
              DNI
            </label>
            <input
              id="dni"
              name="dni"
              type="text"
              placeholder="12345678"
              value={values.dni}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-white placeholder-zinc-500
                        focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
              required
            />
          </div>

          {/* Boton */}
          <button
            type="submit"
            className="w-full py-2.5 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition
                      shadow-lg shadow-red-600/20"
          >
            Registrarse
          </button>
        </form>

        <p className="text-center text-sm text-zinc-500 mt-6">
          ¿Ya tienes cuenta?{" "}
          <span className="text-red-500 hover:text-red-400 cursor-pointer transition font-medium">
            Inicia sesión
          </span>
        </p>
      </div>
    </main>
  );
  return <h1>Soy el RegisterPage</h1>;
};

export default RegisterPage;