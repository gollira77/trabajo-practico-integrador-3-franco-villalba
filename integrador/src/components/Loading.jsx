const Loading = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-zinc-950/80 backdrop-blur-sm z-50">
        <div className="w-12 h-12 border-3 border-zinc-400 border-t-red-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-sm text-zinc-400 tracking-wide">Cargando...</p>
        </div>
    );
};

export default Loading;