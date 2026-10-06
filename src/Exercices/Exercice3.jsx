import { useState } from "react";

export default function Exercice3() {
  // TODO : state isDarkMode (false au départ)
  const [isDarkMode, setIsDarkMode] = useState(false);
  // TODO : fonction toggleDarkMode (utilise la forme prev => !prev)
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // TODO : donnée dérivée themeClass (pas de useState pour ça !)
  console.log(isDarkMode);
  const themeClass = isDarkMode ? "dark" : "light";

  return (
    // TODO : ajoute themeClass à la className
    <div
      className={`text-fg bg-bg themeClass min-h-screen ${themeClass} p-8 transition-colors`}
    >
      <h1 className="mb-4 text-xl">Exercice 3</h1>
      <button className="rounded border px-4 py-2" onClick={toggleDarkMode}>
        {/* TODO : texte conditionnel selon isDarkMode */}
        {isDarkMode ? "Mode clair" : "Mode sombre"}
      </button>

      {/* TODO : rendu conditionnel avec && */}
      {isDarkMode && (
        <p className="bg-bg-alt mt-4 rounded border p-4">
          Le mode sombre est activé
        </p>
      )}
    </div>
  );
}
