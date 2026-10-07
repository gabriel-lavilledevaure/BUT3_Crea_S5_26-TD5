import { useState } from "react";

export default function Exercice8() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Dune", watched: true },
    { id: 2, title: "Interstellar", watched: false },
    { id: 3, title: "Oppenheimer", watched: false },
  ]);

  let visiblesMovies = movies;
  // TODO : state filter ("all" | "watched" | "unwatched")
  const [filterMovie, setFilter] = useState("all");

  // TODO : crée l'objet filters (all, watched, unwatched)

  // TODO : calcule visibleMovies avec filters[filter] (pas un state !)
  switch (filterMovie) {
    case "watched":
      visiblesMovies = movies.filter((movie) => movie.watched);
      break;
    case "unwatched":
      visiblesMovies = movies.filter((movie) => !movie.watched);
      break;
  }
  // BONUS : fonction toggleWatched(id), comme toggleUser à l'Ex. 5

  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl">Exercice 8</h1>

      <div className="mb-4 flex gap-2">
        {/* TODO : 3 boutons qui appellent setFilter, avec le compteur entre parenthèses,
            un style différent pour le filtre actif et aria-pressed */}
        <button
          className="rounded border px-3 py-1"
          onClick={() => setFilter("all")}
        >
          Tous {movies.length}
        </button>
        <button
          className="rounded border px-3 py-1"
          onClick={() => setFilter("watched").length}
        >
          Vus {movies.filter((movie) => movie.watched).length}
        </button>
        <button
          className="rounded border px-3 py-1"
          onClick={() => setFilter("unwatched")}
        >
          À voir {movies.filter((movie) => !movie.watched).length}
        </button>
      </div>

      <ul className="space-y-1">
        {/* TODO : .map() sur visibleMovies, affiche 🟢 ou ⚪ + le titre */}

        {/* BONUS : un bouton par film qui bascule watched (setMovies + .map) */}
        {visiblesMovies.map((movie) => (
          <li key={movie.id} className="flex items-center gap-2">
            <strong>{movie.title}</strong>
            <span>{movie.watched ? "🟢" : "⚪"}</span>
            <button
              className="rounded-md border border-slate-300 px-2 py-1 text-xs text-slate-600 transition hover:border-slate-500 hover:bg-slate-50 focus:ring-2 focus:ring-slate-300 focus:outline-none"
              onClick={() => {
                setMovies((prevMovies) =>
                  prevMovies.map((m) =>
                    m.id === movie.id ? { ...m, watched: !m.watched } : m,
                  ),
                );
              }}
            >
              {movie.watched ? "Marquer comme non vu" : "Marquer comme vu"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
