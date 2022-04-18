import { DECREASE, INCREMENT, RESET } from "./ActionType";

export function incrementAction() {
  return {
    type: INCREMENT
  };
}
export function decreaseAction() {
  return {
    type: DECREASE
  };
}

export function reset() {
  return {
    type: RESET
  };
}
