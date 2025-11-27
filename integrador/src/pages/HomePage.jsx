const HomePage = () => {
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-16 flex flex-col items-center justify-center">
      <section className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Bienvenido de nuevo, <span className="text-red-500">usuario</span>
        </h1>

        <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
          Estas dentro de una{" "}
          <span className="text-red-500 font-medium">ruta privada</span>.
        </p>
      </section>
    </main>
  );
};

export default HomePage;