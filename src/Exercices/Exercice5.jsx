import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Bill", active: false },
  ]);

  const deleteUser = (id) => {
    // TODO : garde tous les users SAUF celui qui a cet id (.filter)

    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const toggleUser = (id) => {
    console.log("toggleUser", id);
    // TODO : recrée le tableau avec .map() et inverse active uniquement
    // pour l'utilisateur dont l'id correspond (copie avec { ...user, ... })
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user,
      ),
    );
  };

  const addUser = () => {
    const newUser = {
      id: crypto.randomUUID(),
      name: "New User",
      active: false,
    };
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl">Exercice 5</h1>

      <button
        className="mb-4 rounded bg-green-500 px-3 py-1 text-sm text-white"
        onClick={addUser}
      >
        Ajouter un utilisateur
      </button>

      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between rounded border p-4"
          >
            <span>
              {/* TODO : nom + statut "🟢 Actif" / "🔴 Inactif" */}
              {user.name} {user.active ? "🟢" : "🔴"} {user.id}
            </span>

            <div className="flex gap-2">
              {/* TODO : ajoute onClick → toggleUser(user.id) au bouton ci-dessous */}
              <button
                className="rounded bg-blue-500 px-3 py-1 text-sm text-white"
                onClick={() => toggleUser(user.id)}
              >
                Basculer statut
              </button>

              {/* TODO : ajoute onClick → deleteUser(user.id) au bouton ci-dessous */}
              <button
                className="rounded bg-red-500 px-3 py-1 text-sm text-white"
                onClick={() => deleteUser(user.id)}
              >
                Supprimer
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
