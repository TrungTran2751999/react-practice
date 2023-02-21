import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({ username: "", password: "" });
    const userLogined = useSelector(state=>state.userLogined);
    const setValueForUser = (key, value)=>{
        const newVal = {...user, [key]: value};
        setUser(newVal);
    }
    console.log(user);
    const login = ()=>{
        console.log(user);
        dispatch({type: "LOGIN", payload: user});
    }
    useEffect(()=>{
        if(userLogined.username){
            navigate("/users");
        }
    }, [userLogined, navigate]);
    return(
        <form>
            <input
                type="text"
                onChange={e=>setValueForUser("username", e.target.value)}
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