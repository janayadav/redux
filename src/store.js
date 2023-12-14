import { combineReducers, legacy_createStore as createStore } from "redux";

const initialState = {
  balence: 0,
  fullName: "",
  mobile: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "deposite":
      return { ...state, balence: state.balence + +action.payload };
    case "withdraw":
      return { ...state, balence: state.balence - +action.payload };
    case "nameUpadate":
      return { ...state, fullName: action.payload };
    case "mobileUpdate":
      return { ...state, mobile: action.payload };
    case "reset":
      return initialState;
    default: {
      return state;
    }
  }
}

function transactionReducer(state = [], action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.payload.id,
          amount: action.payload.amount,
          type: action.payload.type,
          date: action.payload.date,
        },
      ];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: reducer,
  trasaction: transactionReducer,
});
const store = createStore(rootReducer);
export default store;
