export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold">
          DevTrack AI
        </h1>

        <p className="mt-4 text-xl text-slate-300">
          Plataforma inteligente para acompanhar sua evolução como desenvolvedora.
        </p>

        <button className="mt-8 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600">
          Começar
        </button>
      </div>
    </main>
  );
}