import { useEffect } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    // Imposta un timer per confermare automaticamente l'eliminazione dopo 3 secondi
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);
    // Stoppa il timer per annullare l'eliminazione dopo 3 secondi
    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Sei sicuro?</h2>
      <p>Vuoi davvero rimuovere questo luogo?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Si
        </button>
      </div>
    </div>
  );
}
