const TasksPage = () => {
    return (
        <main className="min-h-screen bg-zinc-950 text-white px-6 py-16 flex flex-col items-center">
        <section className="w-full max-w-3xl bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-zinc-800">
            <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold mb-2">
                Mis <span className="text-red-500">Tareas</span>
            </h1>
            <p className="text-zinc-400">Aca gestionaras tus tareas.</p>
            </div>
        </section>
        </main>
    );
};

export default TasksPage;