import "./CardSlot.css";
import { useRef } from "react";
import { Card } from "../types";
import { useHandContext } from "../context/useContexts";
import { ACTIONS_HAND_CONTEXT } from "../reducers/handContextReducer";
import { cardAlreadySelected, getCardSrc, getCardValues, whatCardIs } from "../utils/cardUtils";

function CardsHand() {
  const { dispatch, mano, muestra } = useHandContext();
  const selectMuestra = (card: Card) => {
    dispatch({
      type: ACTIONS_HAND_CONTEXT.UPDATE_MUESTRA,
      payload: card
    });
  };

  const selectMano = (card: Card) => {
    dispatch({
      type: ACTIONS_HAND_CONTEXT.UPDATE_MANO,
      payload: card
    });
  };
  return (
    <article className="cardsHand">
      <CardSlot label="Mayor" card={mano.mayor} selectCard={selectMano} />
      <CardSlot label="Media" card={mano.media} selectCard={selectMano} />
      <CardSlot label="Menor" card={mano.menor} selectCard={selectMano} />
      <CardSlot label="Muestra" card={muestra} selectCard={selectMuestra} />
    </article>
  );
}

function CardSlot({
  label,
  card,
  selectCard
}: {
  label: string;
  card: Card;
  selectCard: (card: Card) => void;
}) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const { muestra, cardsInTable } = useHandContext();
  const isFullTable = cardsInTable.filter((card) => card.numero && card.palo).length === 4;
  const openModal = () => {
    if (isFullTable) return;
    document.body.classList.add("bodyFixed");
    modalRef.current?.classList.replace("hiddenModal", "openModal");
  };
  const closeModal = () => {
    modalRef.current?.classList.replace("openModal", "closeModal");
    document.body.classList.remove("bodyFixed");
    setTimeout(() => {
      modalRef.current?.classList.replace("closeModal", "hiddenModal");
    }, 500);
  };

  const setSelectedCard = (card: Card) => {
    selectCard(card);
    closeModal();
  };

  const cardLabel = () => {
    if (!card.numero) {
      return "";
    }
    const laberCard = whatCardIs(card, muestra);
    if (laberCard.includes("pieza")) {
      return "Pieza";
    }
    if (laberCard.includes("mata")) {
      return "Mata";
    }
    return "Común";
  };

  return (
    <div
      className={`card-slot ${label}  ${
        label !== "Muestra" && !muestra.numero ? "noMuestra" : ""
      } ${card.numero ? "" : "noCard"}`}
    >
      <span>{label}</span>
      {card.numero ? (
        <img
          className={`card ${isFullTable ? "fullTable" : ""}`}
          src={getCardSrc(card)}
          alt={label}
          onClick={openModal}
        />
      ) : (
        <img className="card" src={"back.webp"} alt={label} onClick={openModal} />
      )}
      {label !== "Muestra" ? (
        <>
          <span>{cardLabel()}</span>
          <span>{getCardValues(card, muestra)}</span>
        </>
      ) : (
        <>
          <span>Muestra</span>
          <span>-</span>
        </>
      )}

      <dialog ref={modalRef} className={"card-modal hiddenModal"}>
        <DialogCards palo="basto" selectCard={setSelectedCard} />
        <DialogCards palo="copa" selectCard={setSelectedCard} />
        <DialogCards palo="espada" selectCard={setSelectedCard} />
        <DialogCards palo="oro" selectCard={setSelectedCard} />
        <button type="button" title="Cerrar" onClick={closeModal} className="btnModalClose">
          Cerrar
        </button>
      </dialog>
    </div>
  );
}

const DialogCards = ({ palo, selectCard }: { palo: string; selectCard: (card: Card) => void }) => {
  const { cardsInTable } = useHandContext();

  return (
    <div className="cards-grid">
      {Array(12)
        .fill(0)
        .map((_, index) => {
          const numero = index + 1;
          const card = {
            numero: numero.toString(),
            palo: palo
          };
          const cardSelected = cardAlreadySelected(card, cardsInTable);
          if (index !== 7 && index !== 8) {
            return (
              <img
                key={index}
                src={cardSelected ? "back.webp" : `${palo}/${numero}-${palo}.webp`}
                alt={`${numero} ${palo}`}
                title={`${numero} ${palo}`}
                className={`card-option ${cardSelected ? "cardSelected" : ""}`}
                onClick={() => selectCard(card)}
              />
            );
          }
        })}
    </div>
  );
};

export default CardsHand;
