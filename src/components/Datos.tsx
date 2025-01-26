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
            Envido (max: 37):{" "}
            <span className={flor ? "flor" : ""}>{flor ? "Flor anula envido" : envido}</span>
          </p>
          <p>
            Flor (max: 47): <span className={flor ? "" : "flor"}>{flor ? flor : "No"}</span>
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
    </article>
  );
};

export default Datos;
