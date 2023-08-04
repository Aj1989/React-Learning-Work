import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import counterSlice from "./counterSlice";

//instead of createstore we have to use configureStore
const indexStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default indexStore;

//we have exported store and actions
// const indexSubscriber = () => {
//   console.log(indexStore.getState());
// };

// indexStore.subscribe(indexSubscriber);

// indexStore.dispatch({ type: "increment" });
