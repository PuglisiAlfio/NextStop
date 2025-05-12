import { useState } from "react";
import Luoghi from "./components/Luoghi.jsx";
import { LUOGHI_DISPONIBILI } from "./data";

import "./App.css";

function App() {
  const [luoghiSelezionati, setLuoghiSelezionati] = useState([]);

  function handleSelezionaLuogo(id) {
    setLuoghiSelezionati((prevLuogoSelezionato) => {
      if (prevLuogoSelezionato.some((luogo) => luogo.id === id)) {
        return prevLuogoSelezionato;
      }
      const luogo = LUOGHI_DISPONIBILI.find((luogo) => luogo.id === id);
      return [luogo, ...prevLuogoSelezionato];
    });
  }

  return (
    <>
      <header>
        <h1>Next Stop</h1>
        <p>
          Crea la tua collezione personale di luoghi che vorresti visitare o che
          hai già visitato.
        </p>
      </header>
      <main>
        <Luoghi
          titolo="Mi piacerebbe visitare ..."
          testoAlternativo={
            "Seleziona i luoghi che ti piacerebbe visitare o che hai già visitato."
          }
          luoghi={luoghiSelezionati}
          // onSelectLuogo={() => {}}
        />
        <Luoghi
          titolo="Luoghi da visitare"
          luoghi={LUOGHI_DISPONIBILI}
          onSelectLuogo={handleSelezionaLuogo}
        />
      </main>
    </>
  );
}

export default App;
