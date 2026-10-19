export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-96 bg-slate-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl text-white font-bold mb-2">
          Conecte-se
        </h1>

        <p className="text-slate-400 mb-6">
          Entre para acessar o DevTrack AI
        </p>

        <input
          type="email"
          placeholder="Digite seu e-mail"
          className="w-full p-3 mb-4 rounded-lg bg-slate-700 text-white"
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          className="w-full p-3 mb-4 rounded-lg bg-slate-700 text-white"
        />

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg">
          Entrar
        </button>

        <p className="text-slate-400 text-center mt-4">
          Não possui conta? Cadastre-se
        </p>
      </div>
    </main>
  );
}