import { useState, useRef } from "react";
import Luoghi from "./components/Luoghi.jsx";
import { LUOGHI_DISPONIBILI } from "./data";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";

import "./App.css";

function App() {
  const modal = useRef();
  const [luoghiSelezionati, setLuoghiSelezionati] = useState([]);

  function handleStartRemovePlace(id) {
    modal.current.open();
    luoghiSelezionati.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleSelezionaLuogo(id) {
    setLuoghiSelezionati((prevLuogoSelezionato) => {
      if (prevLuogoSelezionato.some((luogo) => luogo.id === id)) {
        return prevLuogoSelezionato;
      }
      const luogo = LUOGHI_DISPONIBILI.find((luogo) => luogo.id === id);
      return [luogo, ...prevLuogoSelezionato];
    });
  }

  function handleRemovePlace() {
    setLuoghiSelezionati((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== luoghiSelezionati.current)
    );
    modal.current.close();
  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>
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
          onSelectLuogo={handleStartRemovePlace}
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
