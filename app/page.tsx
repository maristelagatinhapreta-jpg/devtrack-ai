"use client";

import { useEffect, useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("devtrack-tasks");

      if (saved) {
        setTasks(JSON.parse(saved));
      }
    } catch {
      console.error("Não foi possível carregar as tarefas.");
    }

    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("devtrack-tasks", JSON.stringify(tasks));
    }
  }, [tasks, loaded]);

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    setTasks((current) => [...current, newTask]);
    setTitle("");
  }

  function toggleTask(id: number) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id: number) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  const completed = tasks.filter((task) => task.completed).length;
  const pending = tasks.length - completed;

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <p className="mb-2 text-sm font-semibold text-blue-400">
            SEU ESPAÇO DE PRODUTIVIDADE
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            DevTrack <span className="text-blue-400">AI</span>
          </h1>

          <p className="mt-3 text-slate-400">
            Organize suas tarefas e acompanhe sua evolução.
          </p>
        </header>

        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Total de tarefas</p>
            <p className="mt-3 text-4xl font-bold">{tasks.length}</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Pendentes</p>
            <p className="mt-3 text-4xl font-bold text-amber-400">
              {pending}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Concluídas</p>
            <p className="mt-3 text-4xl font-bold text-emerald-400">
              {completed}
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <h2 className="mb-5 text-xl font-semibold">
            Minhas tarefas
          </h2>

          <form onSubmit={addTask} className="mb-8 flex flex-col gap-3 sm:flex-row">
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Ex.: Estudar TypeScript"
              aria-label="Nome da nova tarefa"
              className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500"
            >
              + Adicionar
            </button>
          </form>

          <div className="space-y-3">
            {tasks.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-700 p-8 text-center">
                <p className="text-slate-300">
                  Nenhuma tarefa cadastrada.
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Adicione sua primeira atividade acima!
                </p>
              </div>
            ) : (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    aria-label={`Concluir ${task.title}`}
                    className="h-5 w-5 accent-blue-500"
                  />

                  <span
                    className={`min-w-0 flex-1 break-words ${
                      task.completed
                        ? "text-slate-500 line-through"
                        : "text-slate-200"
                    }`}
                  >
                    {task.title}
                  </span>

                  <button
                    type="button"
                    onClick={() => deleteTask(task.id)}
                    className="rounded-lg px-3 py-2 text-sm text-red-400 hover:bg-red-950"
                  >
                    Excluir
                  </button>
                </div>
              ))
            )}
          </div>
        </section>

        <footer className="mt-8 text-center text-sm text-slate-500">
          DevTrack AI · Desenvolvendo seu futuro, uma tarefa por vez.
        </footer>
      </div>
    </main>
  );
}
