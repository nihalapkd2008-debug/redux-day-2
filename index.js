
const { legacy_createStore: createStore, combineReducers } = require("redux");

// 1. Initial States
const initialCounterState = {
  count: 0,
};

const initialUserState = {
  name: "Nihala",
};

// 2. Counter Reducer
function counterReducer(state = initialCounterState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
}

// 3. User Reducer
function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
}

// 4. Combine Reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

// 5. Create Redux Store
const store = createStore(rootReducer);

// 6. Subscribe to Store Changes
store.subscribe(() => {
  console.log("Updated State:", store.getState());
});

// 7. Display Initial State
console.log("Initial State:", store.getState());

// 8. Dispatch Actions
store.dispatch({ type: "INCREMENT" });

store.dispatch({ type: "INCREMENT" });

store.dispatch({ type: "DECREMENT" });

store.dispatch({
  type: "CHANGE_NAME",
  payload: "Nihala Nasreen",
});
