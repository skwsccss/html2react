import { combineReducers } from "redux";
import postReducer from "./postReducer";
import roomReducer from "./roomReducer";
import userReducer from "./userReducer";
import friendReuder from './friendReducer';
import roomTabsReducer from './roomTabsReducer'

export default combineReducers({
    posts: postReducer,
    rooms: roomReducer,
    users: userReducer,
    friends: friendReuder,
    roomTabs: roomTabsReducer
});