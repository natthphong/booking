import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import './login.css'
 const Login = ()=> {

    const [credentials, setCredentials] = useState({
        username:undefined,
            password: undefined
    })

    const {loading , error , dispatch} = useContext(AuthContext);

    const handle = (e)=>{
        setCredentials({...credentials , [e.target.id]: e.target.value})
    }
    const navigate = useNavigate();
    const click  = async (e)=>{
        e.preventDefault()
        dispatch({type:"LOGIN_START"});
        try {
            const res = await  axios.post("/auth/login" , credentials);
            dispatch({type:"LOGIN_SUCCESS" , payload:res.data.otherDetails})
            navigate("/")
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE" , payload:error.response.data});
        }
    }

  return (
    <div className='body'>
        
  
    <div className="screen-1">
            <div className="lcontainer">
        
                <input type="text" name="" id="username"   placeholder='Username'  onChange={handle}/>
    
               <input type="password" name="" id="password"  placeholder='Password'  onChange={handle}/>
                
            </div>
            <button disabled={loading} className='Lbtn' onClick={click}>Login</button>
            {error && <span>{error.message}</span>}
    </div>
    </div>
  )
}
export default Login;
