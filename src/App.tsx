import "./App.css";
import CardsHand from "./components/CardSlot";
import Datos from "./components/Datos";
import { useHandContext } from "./context/useContexts";
import { ACTIONS_HAND_CONTEXT } from "./reducers/handContextReducer";

function App() {
  const { dispatch } = useHandContext();
  const resetHand = () => {
    dispatch({
      type: ACTIONS_HAND_CONTEXT.RESET_HAND,
      payload: { numero: "", palo: "" }
    });
  };
  return (
    <main>
      <h1>TrucoTeca</h1>

      <section className="cards">
        <CardsHand />
      </section>
      <button className="btnReset" onClick={resetHand} type="button" title="Reiniciar">
        Reiniciar
      </button>
      <section>
        <Datos />
      </section>
    </main>
  );
}

export default App;
