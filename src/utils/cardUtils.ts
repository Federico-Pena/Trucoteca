import { cardsValues, piezasCards } from "../data/data";
import { Card } from "../types";

export const getCardSrc = (card: Card) => {
  return `${card.palo}/${card.numero}-${card.palo}.webp`;
};
export const cardAlreadySelected = (card: Card, cardsInTable: Card[]) => {
  return cardsInTable.some(
    (manoCard) => manoCard.numero === card.numero && manoCard.palo === card.palo
  );
};
export const getCardValues = (card: Card, muestra: Card) => {
  const cardValue = cardsValues[whatCardIs(card, muestra)];
  return cardValue;
};

export const whatCardIs = (card: Card, muestra: Card) => {
  if (card.palo === muestra.palo && piezasCards.includes(card.numero)) {
    return `${card.numero}-pieza`;
  }
  if (card.palo === muestra.palo && piezasCards.includes(muestra.numero) && card.numero === "12") {
    return `${muestra.numero}-pieza`;
  }
  if (card.palo === "espada" && (card.numero === "7" || card.numero === "1")) {
    return `${card.numero}-${card.palo}-mata`;
  }
  if (card.palo === "basto" && card.numero === "1") {
    return `${card.numero}-${card.palo}-mata`;
  }
  if (card.palo === "oro" && card.numero === "7") {
    return `${card.numero}-${card.palo}-mata`;
  }
  return card.numero;
};
