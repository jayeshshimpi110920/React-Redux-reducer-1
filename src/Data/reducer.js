const initialState = {
  value: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREASE":
      return { ...state, value: state.value - 1 };
    case "RESET":
      return { ...state, value: 0 };
    default:
      return state;
  }
}

export default reducer;
