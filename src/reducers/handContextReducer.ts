import { cardRanking } from "../data/data";
import { ACTIONS_HAND_CONTEXT_TYPE, Card, HandContextReducer } from "../types";
import { whatCardIs } from "../utils/cardUtils";

export const handContextReducer: HandContextReducer = (state, action) => {
  const { mayor, media, menor } = state.mano;
  const { muestra } = state;

  switch (action.type) {
    case ACTIONS_HAND_CONTEXT.UPDATE_MUESTRA:
      return {
        ...state,
        muestra: action.payload,
        cardsInTable: [mayor, media, menor, action.payload],
      };
    case ACTIONS_HAND_CONTEXT.UPDATE_MANO:
      const newHandArray = [mayor, media, menor, action.payload];
      const newHand = sortHand(newHandArray, muestra);
      return {
        ...state,
        mano: newHand,
        cardsInTable: [muestra, newHand.mayor, newHand.media, newHand.menor],
      };
    case ACTIONS_HAND_CONTEXT.RESET_HAND:
      return {
        ...state,
        mano: {
          mayor: { numero: "", palo: "" },
          media: { numero: "", palo: "" },
          menor: { numero: "", palo: "" },
        },
        muestra: { numero: "", palo: "" },
        cardsInTable: [],
      };
    default:
      return state;
  }
};

export const ACTIONS_HAND_CONTEXT: Record<string, ACTIONS_HAND_CONTEXT_TYPE> = {
  UPDATE_MUESTRA: "UPDATE_MUESTRA",
  UPDATE_MANO: "UPDATE_MANO",
  RESET_HAND: "RESET_HAND",
};

const sortHand = (hand: Card[], muestra: Card) => {
  const validCards = hand.filter((card) => card.numero && card.palo);
  const sorted = validCards.sort(
    (a, b) => cardRanking[whatCardIs(a, muestra)] - cardRanking[whatCardIs(b, muestra)]
  );

  return {
    mayor: sorted[0] || { numero: "", palo: "" },
    media: sorted[1] || { numero: "", palo: "" },
    menor: sorted[2] || { numero: "", palo: "" },
  };
};
