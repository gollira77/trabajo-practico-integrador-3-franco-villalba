import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import useForm from "../hooks/useForm"; 

const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    const { values, setValues, handleChange, handleReset } = useForm({
        title: "",
        description: "",
        is_completed: false, 
    });

    const [idToEdit, setIdToEdit] = useState(null);

    const fetchTasks = async () => {
        if (tasks.length === 0) {
        setLoading(true);
        }

        try {
        const res = await fetch("http://localhost:3000/api/tasks-by-user", {
            credentials: "include",
        });

        if (res.ok) {
            const data = await res.json();
            setTasks(data.tasks || (Array.isArray(data) ? data : []));
        } else {
            console.error("Error al obtener las tareas");
            setTasks([]);
        }
        } catch (error) {
        console.error(error);
        setTasks([]);
        } finally {
        setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (idToEdit) {
        handleUpdateTask();
        } else {
        handleCreateTask();
        }
    };
    const handleSelectEdit = (task) => {
        setIdToEdit(task.id);
        setValues({
        title: task.title,
        description: task.description,
        is_completed: task.is_completed,
        });
    };

    const handleCancelEdit = () => {
        setIdToEdit(null); 
        handleReset(); 
    };

    const handleCreateTask = async () => {
        if (!values.title) {
        alert("El título es obligatorio");
        return;
        }

        try {
        const res = await fetch("http://localhost:3000/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(values),
        });

        if (res.ok) {
            alert("¡Tarea creada exitosamente!");
            handleReset();
            fetchTasks(); 
            fetchTasks();
        } else {
            const data = await res.json();
            alert(data.message || "Error al crear la tarea");
            
        }
    };
    return (
        <main className="min-h-screen bg-zinc-950 text-white px-6 py-16">
            <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
                <section className="md:col-span-1">
                <h2 className="text-2xl font-semibold mb-4 text-white">
                    Crear <span className="text-red-500">Tarea</span>
                </h2>

                <form
                    onSubmit={handleCreateSubmit}
                    className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-zinc-800 space-y-4"
                >
                    <div>
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-zinc-400 mb-1"
                    >
                        Título
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={values.title} 
                        onChange={handleChange}
                        placeholder="Ej: Comprar leche"
                        className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                    </div>
                    <div>
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-zinc-400 mb-1"
                    >
                        Descripción
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Detalles de la tarea..."
                        className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                    ></textarea>
                    </div>
                    <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="is_completed"
                        name="is_completed"
                        checked={values.is_completed}
                        onChange={handleChange}
                        className="h-4 w-4 rounded bg-zinc-800 border-zinc-700 text-red-600 focus:ring-red-600"
                    />
                    <label htmlFor="is_completed" className="text-sm text-zinc-400">
                        Marcar como completada
                    </label>
                    </div>

                    <button
                    type="submit"
                    className="w-full py-2.5 bg-red-600 hover:bg-red-700 rounded-lg font-medium transition shadow-lg shadow-red-600/20"
                    >
                    Guardar Tarea
                    </button>
                </form>
                </section>

                <section className="md:col-span-2">
                <h2 className="text-2xl font-semibold mb-4 text-white">
                    Mis <span className="text-red-500">Tareas</span>
                    </h2>

                <div className="bg-zinc-900/60 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-zinc-800 relative min-h-[200px]">
                    {loading && <Loading />}

                    {!loading && (
                    <>
                        {tasks.length === 0 ? (
                        <p className="text-center text-zinc-400 pt-10">
                            Aún no tienes tareas. ¡Añade una!
                        </p>
                        ) : (
                        <div className="space-y-4">
                            {tasks.map((task) => (
                            <div
                                key={task.id}
                                className="bg-zinc-950 border border-zinc-800 p-4 rounded-lg flex justify-between items-center"
                            >
                                <div>
                                <h3
                                    className={`text-lg font-medium ${
                                    task.is_completed
                                        ? "text-zinc-500 line-through"
                                        : "text-white"
                                    }`}
                                >
                                    {task.title}
                                </h3>
                                <p
                                    className={`text-sm ${
                                    task.is_completed
                                        ? "text-zinc-600 line-through"
                                        : "text-zinc-400"
                                    }`}
                                >
                                    {task.description}
                                </p>
                                </div>
                                <div className="flex gap-2">
                                <button className="text-sm bg-yellow-600 hover:bg-yellow-700 px-3 py-1 rounded">
                                    Editar
                                </button>
                                <button
                                    onClick={() => handleDelete(task.id)} 
                                    className="text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
                                >
                                </button>
                                </div>
                            </div>
                            ))}
                        </div>
                        )}
                    </>
                    )}
                </div>
                </section>
            </div>
            </main>
        );
    };

export default TasksPage;