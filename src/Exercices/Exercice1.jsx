import { useState } from "react";
import LikeButton from "../components/LikeButton";

export default function App() {
  // TODO : déclare le state likes (initialisé à 0)
  const [count, setCount] = useState(0);
  // TODO : déclare la fonction handleLike
  const handleLike = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="p-8">
      <h1 className="mb-4 text-xl">Exercice 1</h1>
      {/* TODO : affiche <LikeButton /> avec ses props */}
      <LikeButton count={count} onLike={handleLike} />
    </div>
  );
}
