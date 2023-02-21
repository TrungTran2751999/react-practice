import { FETCH_USER_SUCCESS } from "../../redux/action";
import { LOGINED_SUCCESS, FETCH_DATA_SUCCESS } from "./action";
const initState = {
    userlogin:{},
    data:[],
}
const rootReducer = (state=initState, action)=>{
    switch(action.type){
        case LOGINED_SUCCESS:
            return {...state, userlogin: action.payload}
        case FETCH_DATA_SUCCESS:
            console.log("rrrrrr")
            return {...state, data: action.payload}
        default:
            return state;
    }
}
export default rootReducer;