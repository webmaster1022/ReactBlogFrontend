import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import blogReducer from "./blog.reducer";

const rootReducer = combineReducers({
  loginReducer,
  blogReducer,
});

export default rootReducer;
