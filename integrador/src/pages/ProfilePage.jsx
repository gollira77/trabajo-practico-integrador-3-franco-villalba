const ProfilePage = () => {
    return (
        <main className="min-h-screen bg-zinc-950 text-white px-6 py-16 flex flex-col items-center">
        <section className="w-full max-w-2xl bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-zinc-800">
            <h1 className="text-3xl font-semibold mb-2 text-center">
            Mi <span className="text-red-500">Perfil</span>
            </h1>
            <p className="text-center text-zinc-400 mb-8">
            Aca podras ver tu información personal.
            </p>
        </section>
        </main>
    );
};

export default ProfilePage;