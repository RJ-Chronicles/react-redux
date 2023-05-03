import { createStore } from "redux";
const initialState = {
  data: { filterText: "hello", filterType: "Hello" }
};
const setTextReducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === "SET_TEXT") {
    return {
      ...state,
      data: {
        filterText: action.filterText,
        filterType: action.filterType
      }
    };
  }
  return state;
};

const store = createStore(setTextReducer);

export default store;
