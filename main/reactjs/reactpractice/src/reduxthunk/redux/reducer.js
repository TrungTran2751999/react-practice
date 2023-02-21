import { LOGIN_SUCCESS,  FETCH_DATA} from "./action"
const initState = {
    data:[],
    userlogin:{},
}
const rootReducer = (state=initState, action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return {...state, userlogin: action.payload}
        case FETCH_DATA:
            return {...state, data: action.payload}
        default:
            return state;
    }
}
export default rootReducer;
