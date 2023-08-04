const redux = require("redux");
const initalState = { name: "Ajinkya", age: 34 };

const mystoreReducer = (state = initalState, action) => {
  if (action.type == "add") {
    return {
      name: state.name + " Khopade",
      age: state.age - 1,
    };
  }

  if (action.type == "upper") {
    return {
      name: state.name.toUpperCase(),
      age: state.age - 1,
    };
  }
};

const store = redux.createStore(mystoreReducer);

/* below getstore code wont run now as we have defned action 
based state returning logic in reducee function */
//console.log(store.getState());

const myStoreSubscriber = () => {
  console.log(store.getState());
};

store.subscribe(myStoreSubscriber);

store.dispatch({ type: "upper" });
