import { combineReducers } from "redux";
import postReducer from "./postReducer";
import roomReducer from "./roomReducer";
import userReducer from "./userReducer";

export default combineReducers({
    posts: postReducer,
    rooms: roomReducer,
    users: userReducer
});