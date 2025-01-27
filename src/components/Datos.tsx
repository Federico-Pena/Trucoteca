import "./Datos.css";
import { useHandContext } from "../context/useContexts";
import { calculateEnvido, calculateFlor } from "../utils/plays";

const Datos = () => {
  const { mano, muestra, cardsInTable } = useHandContext();
  const isFullTable = cardsInTable.filter((card) => card.numero && card.palo).length === 4;
  const envido = calculateEnvido([mano.mayor, mano.media, mano.menor], muestra);
  const flor = calculateFlor([mano.mayor, mano.media, mano.menor], muestra);
  return (
    <article className="datos">
      {isFullTable && (
        <div className="valores">
          <p>
            Envido (max: 37): <span>{flor ? "Flor anula envido" : envido}</span>
          </p>
          <p>
            Flor (max: 47): <span>{flor ? flor : "No"}</span>
          </p>
        </div>
      )}
      <div className="info">
        <div className="header">
          <p>Carta</p>
          <p>Puntaje de envido</p>
          <p>Seña</p>
          <p className="title">Piezas (suponiendo que la muestra es de oro)</p>
        </div>
        <div className="piezas">
          <div className="row">
            <img src="oro/2-oro.webp" alt="2 oro" />
            <p>2 de la muestra</p>
            <span>30</span>
            <span>Levantar cejas</span>
          </div>
          <div className="row">
            <img src="oro/4-oro.webp" alt="4 oro" />
            <p>4 de la muestra</p>
            <span>29</span>
            <span>Beso</span>
          </div>
          <div className="row">
            <img src="oro/5-oro.webp" alt="5 oro" />
            <p>5 de la muestra</p>
            <span>28</span>
            <span>Arrugar la nariz</span>
          </div>
          <div className="row">
            <img src="oro/11-oro.webp" alt="11 oro" />
            <p>11 de la muestra</p>
            <span>27</span>
            <span>Guiñada ojo derecho</span>
          </div>
          <div className="row">
            <img src="oro/10-oro.webp" alt="12 oro" />
            <p>10 de la muestra</p>
            <span>27</span>
            <span>Guiñada ojo izquierdo</span>
          </div>
        </div>
        <p className="title">Matas</p>
        <div className="piezas">
          <div className="row">
            <img src="espada/1-espada.webp" alt="1 espada" />
            <p>1 de espada</p>
            <span>1</span>
            <span className="dobleRowArriba">Mueca de labios hacia la derecha</span>
          </div>
          <div className="row">
            <img src="basto/1-basto.webp" alt="1 basto" />
            <p>1 de basto</p>
            <span>1</span>
          </div>
          <div className="row">
            <img src="espada/7-espada.webp" alt="7 espada" />
            <p>7 de espada</p>
            <span>7</span>
            <span className="dobleRowAbajo">Mueca de labios hacia la izquierda</span>
          </div>
          <div className="row">
            <img src="oro/7-oro.webp" alt="7 oro" />
            <p>7 de oro</p>
            <span>7</span>
          </div>
        </div>
        <p className="title">Chicas</p>
        <div className="piezas">
          <div className="row">
            <samp></samp>
            <p>cualquier 3</p>
            <span>3</span>
            <span>Morder el labio inferior</span>
          </div>
          <div className="row">
            <samp></samp>
            <p>cualquier 2 (menos la pieza)</p>
            <span>2</span>
            <span>Boca levemente abierta</span>
          </div>
          <div className="row">
            <samp></samp>
            <p>1 de copa y 1 de oro</p>
            <span>1</span>
            <span>Sacar la punta de la lengua</span>
          </div>
        </div>
        <p className="title">Negras</p>
        <div className="piezas">
          <div className="row">
            <samp></samp>
            <p className="aLink">
              cualquier 12
              <span>+</span>
            </p>
            <span>0</span>
            <span className="tripleRow">Ambos ojos cerrados</span>
          </div>
          <div className="row">
            <samp></samp>
            <p>cualquier 11 (menos la pieza)</p>
            <span>0</span>
          </div>
          <div className="row">
            <samp></samp>
            <p>cualquier 10 (menos la pieza)</p>
            <span>0</span>
          </div>
        </div>
        <p className="title">Comunes</p>
        <div className="piezas">
          <div className="row">
            <samp></samp>
            <p>7 de basto y 7 de copa</p>
            <span>7</span>
            <span className="fourRow">Ambos ojos cerrados</span>
          </div>
          <div className="row">
            <samp></samp>
            <p>cualquier 6</p>
            <span>6</span>
          </div>
          <div className="row">
            <samp></samp>
            <p>cualquier 5 (menos la pieza)</p>
            <span>5</span>
          </div>
          <div className="row">
            <samp></samp>
            <p>cualquier 4 (menos la pieza)</p>
            <span>4</span>
          </div>
        </div>
      </div>
      <div className="info">
        <h2>Envido</h2>
        <div className="header">
          <p>Combinaciones</p>
          <p>Puntaje de envido</p>
          <p>Seña</p>
        </div>
        <div className="piezas combinaciones">
          <div className="row">
            <p>1 pieza + 2 cartas de diferente palo</p>
            <span>Puntos de la pieza + puntos de la carta de mayor puntaje</span>
            <span className="tripleRow">Lamer el labio superior</span>
          </div>
          <div className="row">
            <p>2 cartas del mismo palo + 1 carta de diferente palo</p>
            <span>Puntos de las dos cartas del mismo palo + 20</span>
          </div>
          <div className="row">
            <p>3 cartas de diferente palo</p>
            <span>Puntos de la carta de mayor puntaje</span>
          </div>
        </div>
        <span className="envidoInfo">
          Jugar el envido le da 2 puntos al equipo con la mano de mayor puntaje. Sin embargo, se
          puede jugar por más puntos, si un equipo cree tener una muy buena mano.
        </span>
        <div className="header envido">
          <p>Toques</p>
          <p>Puntos otorgados</p>
        </div>
        <div className="piezas toques">
          <div className="row">
            <p>Envido</p>
            <span>2 puntos</span>
          </div>
          <div className="row">
            <p>Real envido</p>
            <span>3 puntos</span>
          </div>
          <div className="row">
            <p>Falta envido</p>
            <span>La cantidad de puntos que le falta al equipo que va primero</span>
          </div>
        </div>
      </div>
      <div className="info">
        <h2>Flor</h2>
        <div className="header">
          <p className="title">Cuando se tiene flor y cómo se cuentan los puntos</p>
          <p>Combinaciones posibles</p>
          <p>Puntaje de la flor</p>
          <p>Seña</p>
        </div>
        <div className="piezas combinaciones">
          <div className="row">
            <p>3 piezas</p>
            <span>Puntos de la pieza más alta + unidades de las otras piezas</span>
            <span className="fourRow">Inflar cachetes</span>
          </div>
          <div className="row">
            <p>2 piezas + 1 cualquier otra</p>
            <span>
              Puntos de la pieza más alta + unidad de la otra pieza + puntos de la tercera carta
            </span>
          </div>
          <div className="row">
            <p>1 pieza + 2 cartas del mismo palo</p>
            <span>Puntos de la pieza + puntos de las otras cartas</span>
          </div>
          <div className="row">
            <p>3 cartas del mismo palo</p>
            <span>Puntos de las tres cartas + 20</span>
          </div>
        </div>

        <span className="envidoInfo">
          Si más de un jugador tiene flor, todos deben anunciarlo enseguida de anunciarse la primera
          flor, sin tener que esperar a su turno. Si solamente jugadores de un único equipo tienen
          flor, se les acreditan 3 puntos por cada flor.
        </span>
        <span className="envidoInfo">
          En el caso de que jugadores de ambos equipos tengan flor, se genera un enfrentamiento para
          ver qué flor tiene mayor puntaje, y el equipo ganador se lleva los puntos. La flor más
          débil es de 20 puntos, mientras que la flor más poderosa es de 47 puntos.
        </span>
        <div className="header cantos">
          <p>Cantos</p>
          <p>Cuándo se cuentan los puntos y cuántos tantos son para el equipo</p>
        </div>
        <div className="piezas toques">
          <div className="row">
            <p>La mía flor</p>
            <span>
              Se cuentan los puntos al final de la mano y son 3 tantos para la flor con más puntos
            </span>
          </div>
          <div className="row">
            <p>Con flor envido</p>
            <span>
              Se cuentan los puntos en el momento y son 5 tantos para la flor con más puntos
            </span>
          </div>
          <div className="row">
            <p>Contra flor al resto</p>
            <span>
              Se cuentan los puntos o se muestran directamente las flores en la mesa, la flor
              ganadora se llevará los puntos que le faltan al que vaya ganando para terminar el
              partido al igual que en la falta envido
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Datos;
