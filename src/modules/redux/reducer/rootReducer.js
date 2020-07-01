import { combineReducers } from "redux";
import covidReducer from "modules/redux/reducer/covidReducer";

const rootReducer = combineReducers({
  data: covidReducer,
});

export default rootReducer;
