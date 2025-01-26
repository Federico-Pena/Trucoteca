import { cardRanking } from "../data/data";
import { Card } from "../types";
import { getCardValues, whatCardIs } from "./cardUtils";

const isFlor = ({
  sortedPiezas,
  groupedByPalo,
  muestra
}: {
  sortedPiezas: string[];
  groupedByPalo: Record<string, number[]>;
  muestra: Card;
}) => {
  const tresDelMismoPalo = Object.keys(groupedByPalo).length === 1;
  const dosOMasPiezas = sortedPiezas.length > 1;
  const unaPiezaYDosDelMismoPalo =
    sortedPiezas.length === 1 &&
    Object.entries(groupedByPalo)
      .filter(([palo, values]) => {
        return palo !== muestra.palo ? values : false;
      })
      .filter(Boolean)[0][1].length === 2;

  if (tresDelMismoPalo || dosOMasPiezas || unaPiezaYDosDelMismoPalo) {
    return true;
  }
  return false;
};
const sortCards = (hand: Card[], muestra: Card) => {
  const groupedByPalo: Record<string, number[]> = {};
  const piezas: string[] = [];
  const piezasvalues: number[] = [];
  const otrasCartasValues: number[] = [];
  hand.forEach((card) => {
    const cardType = whatCardIs(card, muestra);
    const value = getCardValues(card, muestra);
    if (!groupedByPalo[card.palo]) groupedByPalo[card.palo] = [];
    groupedByPalo[card.palo].push(value);
    if (cardType.includes("pieza")) {
      piezas.push(cardType);
      piezasvalues.push(value);
    } else {
      otrasCartasValues.push(value);
    }
  });
  const sortedOtrasValues = otrasCartasValues.sort((a, b) => b - a);
  const sortedPiezasValues = piezasvalues.sort((a, b) => b - a);
  const sortedPiezas = piezas.sort((a, b) => cardRanking[a] - cardRanking[b]);

  return {
    sortedOtrasValues,
    sortedPiezasValues,
    sortedPiezas,
    groupedByPalo
  };
};
export const calculateEnvido = (hand: Card[], muestra: Card): number | null => {
  const { groupedByPalo, sortedOtrasValues, sortedPiezasValues, sortedPiezas } = sortCards(
    hand,
    muestra
  );

  const flor = isFlor({
    groupedByPalo,
    sortedPiezas,
    muestra
  });

  if (flor) {
    return null;
  }

  const piezaValue = sortedPiezasValues[0];
  const highestOtrasValue = sortedOtrasValues[0];

  if (sortedPiezasValues.length === 1) {
    return piezaValue + highestOtrasValue;
  }
  if (Object.keys(groupedByPalo).length === 3) {
    return sortedOtrasValues[0];
  }
  const dosMismoPalo = Object.values(groupedByPalo)
    .map((val) => (val.length === 2 ? val[0] + val[1] + 20 : 0))
    .filter(Boolean)[0];
  return dosMismoPalo;
};

export const calculateFlor = (hand: Card[], muestra: Card): number | null => {
  const { groupedByPalo, sortedOtrasValues, sortedPiezasValues } = sortCards(hand, muestra);

  if (sortedPiezasValues.length === 0 && Object.keys(groupedByPalo).length === 1) {
    return sortedOtrasValues.reduce((acc, val) => acc + val, 20);
  }

  const dosMismoPalo = Object.values(groupedByPalo)
    .map((val) => (val.length === 2 ? val[0] + val[1] : 0))
    .filter(Boolean)[0];

  if (sortedPiezasValues.length === 1 && dosMismoPalo) {
    return sortedPiezasValues[0] + dosMismoPalo;
  }
  if (sortedPiezasValues.length === 2) {
    const piezaMayor = sortedPiezasValues[0];
    const segundaMayor = Number(sortedPiezasValues[1].toString().substring(1));
    const noPieza = sortedOtrasValues[0];
    return piezaMayor + segundaMayor + noPieza;
  }
  if (sortedPiezasValues.length === 3) {
    const piezaMayor = sortedPiezasValues[0];
    const segundaMayor = Number(sortedPiezasValues[1].toString().substring(1));
    const tercerMayor = Number(sortedPiezasValues[2].toString().substring(1));
    return piezaMayor + segundaMayor + tercerMayor;
  }
  return null;
};
