import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

/**
 * Componente Modal generico, basato sull'elemento <dialog> HTML5.
 * Consente di visualizzare contenuti modali sincronizzando lo stato React con il DOM.
 *
 * open - Stato che indica se il modal deve essere aperto o chiuso.
 * children - Contenuto da visualizzare all'interno del modal.
 * onClose - Callback chiamata quando il modal viene chiuso (es. tramite ESC o clic fuori).
 */

function Modal({ open, children, onClose }) {
  const dialog = useRef(); // Riferimento al tag <dialog>

  // Gestisce l'apertura e la chiusura del modal in base alla prop "open"
  useEffect(() => {
    if (open) {
      dialog.current.showModal(); // Mostra il modal se "open" è true
    } else {
      dialog.current.close(); // Chiude il modal se "open" è false
    }
  }, [open]);

  return createPortal(
    // Mostriamo il dialog come un portal React nel nodo con id="modal"
    // Il listener onClose intercetta chiusure manuali (es. ESC) e sincronizza lo stato esterno
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
