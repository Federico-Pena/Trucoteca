export type ACTIONS_HAND_CONTEXT_TYPE = "UPDATE_MUESTRA" | "UPDATE_MANO" | "RESET_HAND";

export interface Card {
  numero: string;
  palo: string;
}

export type CardsInTable = Card[];

export interface HandContextReducer {
  (state: InitialState, action: { type: ACTIONS_HAND_CONTEXT_TYPE; payload: Card }): InitialState;
}

export interface InitialState {
  cardsInTable: CardsInTable;
  muestra: Card;
  mano: {
    mayor: Card;
    menor: Card;
    media: Card;
  };
  dispatch: ({ type, payload }: { type: ACTIONS_HAND_CONTEXT_TYPE; payload: Card }) => void;
}
