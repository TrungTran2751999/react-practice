import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  LOGIN,
  LOGIN_SUCCESS
} from "../redux/action";

const BaseURL = "https://jsonplaceholder.typicode.com/users";
function* getUser(action){
    try{
        const response = yield axios.get(BaseURL);
        console.log(response.data);
        yield put({type: FETCH_USER_SUCCESS, payload: response.data});
    }catch(err){
        console.log(err);
    }
}
function* authSagaFun(action){
    console.log("yyyyyyy")
    const user = action.payload;
    if(user.username === "admin" && user.password === "admin"){
        yield put({type: LOGIN_SUCCESS, payload: user});
        yield put({type: FETCH_USER, payload: {}});
    } 
}
export default function* rootSaga() {
    yield takeLatest(LOGIN, authSagaFun);
    yield takeLatest(FETCH_USER, getUser);
  }