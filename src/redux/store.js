import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
// import { compose } from "redux";
import rootReducer from "./reducers";
// import thunk from "redux-thunk";
import rootSaga from './saga'

const initialState = {};

const middleware = createSagaMiddleware();
// const middleware = [thunk]

// const store = createStore(rootReducer, initialState,
//     compose(applyMiddleware(...middleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
const store = createStore(rootReducer, initialState, applyMiddleware(middleware));

middleware.run(rootSaga);

export default store;