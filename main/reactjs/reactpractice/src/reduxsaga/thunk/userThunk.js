import { LOGINED, LOGINED_SUCCESS, FETCH_DATA_SUCCESS, FETCH_DATA } from "../redux/action";
import {put, takeLatest} from "redux-saga/effects";
import axios from "axios";
function* getUser(){
    const api = "https://jsonplaceholder.typicode.com/users";
    const res = yield axios.get(api);
    console.log(res.data)
    yield put({type: FETCH_DATA_SUCCESS, payload: res.data});
}
function* authUser(action){
    const user = action.payload;
    if(user.user==="admin" && user.password === "admin"){
        yield put({type: LOGINED_SUCCESS, payload: user});
        yield put({type: FETCH_DATA, payload: []});
    }
}
export default function* rootThunk(){
    yield takeLatest(LOGINED, authUser);
    yield takeLatest(FETCH_DATA, getUser)
}