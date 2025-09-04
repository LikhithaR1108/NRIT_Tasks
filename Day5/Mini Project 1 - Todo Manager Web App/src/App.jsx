import { useState, useMemo } from "react";

function TodoManager() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, title: "Finish React Day 5", done: false },
    { id: 2, title: "Gym & stretch", done: true },
  ]);
  const [filter, setFilter] = useState("all"); // all | active | completed

  const filtered = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.done);
    if (filter === "completed") return todos.filter((t) => t.done);
    return todos;
  }, [todos, filter]);

  function addTodo(e) {
    e.preventDefault();
    const name = text.trim();
    if (!name) return;
    setTodos((prev) => [{ id: Date.now(), title: name, done: false }, ...prev]);
    setText("");
  }
  const toggle = (id) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const removeOne = (id) => setTodos((prev) => prev.filter((t) => t.id !== id));

  return (
    <div className="container space-y-4">
      <form onSubmit={addTodo} className="flex gap-2">
        <input
          className="input"
          placeholder="Add a todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>

      <div className="flex gap-2">
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`btn ${filter === f ? "btn-primary" : ""}`}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-slate-400">
          No todos {filter !== "all" ? `in ${filter}` : ""}.
        </p>
      ) : (
        <ul className="space-y-2">
          {filtered.map((t) => (
            <li
              key={t.id}
              className="flex items-center gap-3 p-3 rounded-xl border border-slate-800 bg-slate-900"
            >
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
              <span className={`flex-1 ${t.done ? "line-through text-slate-500" : ""}`}>
                {t.title}
              </span>
              <button
                className="btn bg-rose-600 border-rose-500 hover:bg-rose-500 text-white"
                onClick={() => removeOne(t.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1 className="text-2xl font-semibold p-6">Mini Project 1 – Todo Manager</h1>
      <TodoManager />
    </div>
  );
}
