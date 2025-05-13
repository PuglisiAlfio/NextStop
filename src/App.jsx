import { useState, useRef, useEffect } from "react";
import Luoghi from "./components/Luoghi.jsx";
import { LUOGHI_DISPONIBILI } from "./data";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import { ordinaLuoghiperDistanza } from "./loc.js";

import "./App.css";

function App() {
  const modal = useRef();
  const luoghiSelezionati = useRef();
  const [luoghiDisponibili, setLuoghiDisponibili] = useState([]);
  const [luoghiScelti, setLuoghiScelti] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((posizione) => {
      const luoghiOrdinati = ordinaLuoghiperDistanza(
        LUOGHI_DISPONIBILI,
        posizione.coords.latitude,
        posizione.coords.longitude
      );
      setLuoghiDisponibili(luoghiOrdinati);
    });
  }, []);

  function handleStartRemovePlace(id) {
    modal.current.open();
    luoghiSelezionati.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleSelezionaLuogo(id) {
    setLuoghiScelti((prevLuogoSelezionato) => {
      if (prevLuogoSelezionato.some((luogo) => luogo.id === id)) {
        return prevLuogoSelezionato;
      }
      const luogo = LUOGHI_DISPONIBILI.find((luogo) => luogo.id === id);
      return [luogo, ...prevLuogoSelezionato];
    });
  }

  function handleRemovePlace() {
    setLuoghiScelti((prevPickedPlaces) =>
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
          luoghi={luoghiScelti}
          onSelectLuogo={handleStartRemovePlace}
        />
        <Luoghi
          titolo="Luoghi da visitare"
          testoAlternativo={"Sto ordinando i luoghi per distanza..."}
          luoghi={luoghiDisponibili}
          onSelectLuogo={handleSelezionaLuogo}
        />
      </main>
    </>
  );
}

export default App;
