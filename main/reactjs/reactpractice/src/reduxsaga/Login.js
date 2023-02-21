import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom" 
function Login(){
    const [user, setUser] = useState({user:"", password:""});
    const dispatch = useDispatch();
    const userLogin = useSelector(state=> state.userlogin);
    const navigate = useNavigate();
    const setValueForUser = (key, value)=>{
        let newVal = {...user, [key]: value}
        setUser(newVal);
    }
    const login = ()=>{
        dispatch({type:"LOGINED", payload: user});
        console.log(userLogin)
    }
    useEffect(()=>{
        if(userLogin.user){
            navigate("/users");
        }
    },[userLogin, navigate])
    return(
        <form>
            <input
                type="text"
                onChange={e=>setValueForUser("user", e.target.value)}
            />
            <input
                type="text"
                onChange={e=>setValueForUser("password", e.target.value)}
            />
            <button
                type="button"
                onClick={()=>login()}
            >Submit</button>
        </form>
    )
}
export default Login;