import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };
const indexReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "showHideCounter") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  return state;
};
const indexStore = createStore(indexReducer);

export default indexStore;
// const indexSubscriber = () => {
//   console.log(indexStore.getState());
// };

// indexStore.subscribe(indexSubscriber);

// indexStore.dispatch({ type: "increment" });
