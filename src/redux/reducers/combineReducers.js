import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";
import queryReducer from "./queryReducer";

const rootReducer = combineReducers({
  initialstate: fetchReducer,
  query: queryReducer,
});

export default rootReducer;
