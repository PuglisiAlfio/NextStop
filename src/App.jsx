import { useState, useRef, useEffect } from "react";
import Luoghi from "./components/Luoghi.jsx";
import { LUOGHI_DISPONIBILI } from "./data";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import { ordinaLuoghiperDistanza } from "./loc.js";

import "./App.css";

//Lo mettiamo fuori dal componente perché non è necessario che venga rieseguito ogni volta che il componente viene smontato e rimontato, ma ci serve soltanto alla ricarica della pagina
const idMemorizzati =
  JSON.parse(localStorage.getItem("luoghiSelezionati")) || [];
const luoghiMemorizzati = idMemorizzati.map((id) =>
  LUOGHI_DISPONIBILI.find((place) => place.id === id)
);

function App() {
  const modal = useRef();
  const luoghiSelezionati = useRef();
  const [luoghiDisponibili, setLuoghiDisponibili] = useState([]);
  const [luoghiScelti, setLuoghiScelti] = useState(luoghiMemorizzati);

  // ordinare i luoghi disponibili dal più vicino al più lontano dalla tua posizione
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
    const idMemorizzati =
      JSON.parse(localStorage.getItem("luoghiSelezionati")) || [];
    //ci assicuriamo di non memorizzare un id già esistente nel localStorage
    if (!idMemorizzati.includes(id)) {
      localStorage.setItem(
        "luoghiSelezionati",
        JSON.stringify([id, ...idMemorizzati])
      );
    }
  }

  function handleRemovePlace() {
    setLuoghiScelti((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== luoghiSelezionati.current)
    );
    modal.current.close();

    const idMemorizzati =
      JSON.parse(localStorage.getItem("luoghiSelezionati")) || [];
    localStorage.setItem(
      "luoghiSelezionati",
      JSON.stringify(
        idMemorizzati.filter((id) => id !== luoghiSelezionati.current)
      )
    );
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
