import axios from "axios";
export let LOGIN = "LOGIN";
export let LOGIN_SUCCESS = "LOGIN_SUCCESS";
export let FETCH_DATA = "FETCH_DATA";
export const checkLogin = (payload)=>{
    return async dispatch=>{
        const {user, password} = payload;
        if(user==="admin" && password==="admin"){
            dispatch({type: LOGIN_SUCCESS, payload});
            dispatch(getUsers());
        }else{
            console.log("login fail");
        }
    }
}
const getUsers = ()=>{
    return async dispatch=>{
        const api = "https://jsonplaceholder.typicode.com/users";
        const res = await axios.get(api);
        dispatch({type: FETCH_DATA, payload: res.data})
    }
}