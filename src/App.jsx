import Luoghi from "./components/Luoghi.jsx";
import { LUOGHI_DISPONIBILI } from "./data";

import "./App.css";

function App() {
  return (
    <>
      <h1>Next Stop</h1>
      <Luoghi
        titolo="Luoghi da visitare"
        luoghi={LUOGHI_DISPONIBILI}
        onSelectPlace={""}
      />
    </>
  );
}

export default App;
