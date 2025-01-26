/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useReducer } from "react";
import { handContextReducer } from "../reducers/handContextReducer";
import { ACTIONS_HAND_CONTEXT_TYPE, Card, InitialState } from "../types";

const initialState: InitialState = {
  cardsInTable: [],
  muestra: {
    numero: "",
    palo: ""
  },
  mano: {
    mayor: {
      numero: "",
      palo: ""
    },
    menor: {
      numero: "",
      palo: ""
    },
    media: {
      numero: "",
      palo: ""
    }
  },
  dispatch: (_: { type: ACTIONS_HAND_CONTEXT_TYPE; payload: Card }) => null
};

export const HandContext = createContext(initialState);

export default function HandContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(handContextReducer, initialState);

  return <HandContext.Provider value={{ ...state, dispatch }}>{children}</HandContext.Provider>;
}
