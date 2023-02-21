import {useEffect, useState} from "react";
import { checkLogin } from "./redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const [user, setUser] = useState({user:"",password:""});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let userlogin = useSelector(state=>state.userlogin);
    const setUserPass = (key, value)=>{
        let newVal = {...user, [key]:value};
        setUser(newVal);
    }
    const login = ()=>{
        dispatch(checkLogin(user));
    }
    useEffect(()=>{
        console.log("cccc")
        if(userlogin.user==="admin"){
            console.log("successs")
            navigate("/users")
        }
    }, [userlogin])
    return(
        <form>
            <input
                onChange={(e)=>setUserPass("user", e.target.value)}
            />
            <input
                onChange={(e)=>setUserPass("password", e.target.value)}
            />
            <button type="button" onClick={()=>login()}>LOGIN</button>
        </form>
    )
}