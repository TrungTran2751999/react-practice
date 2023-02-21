import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import rootThunk from "../thunk/userThunk";
import rootReducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootThunk);
export default store;