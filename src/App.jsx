import Luoghi from "./components/Luoghi.jsx";
import { LUOGHI_DISPONIBILI } from "./data";

import "./App.css";

function App() {
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
          titolo="Luoghi da visitare"
          luoghi={LUOGHI_DISPONIBILI}
          onSelectPlace={""}
        />
      </main>
    </>
  );
}

export default App;
