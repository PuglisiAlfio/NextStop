import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [tempoRimanente, setTempoRimanente] = useState(timer);
  useEffect(() => {
    // Avvia un intervallo che aggiorna il tempo rimanente ogni 10 ms
    const interval = setInterval(() => {
      setTempoRimanente((prevTempo) => prevTempo - 10);
    }, 10);

    // Pulisce l'intervallo quando il componente viene smontato o aggiornato
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <progress value={tempoRimanente} max={timer} />
    </>
  );
}
