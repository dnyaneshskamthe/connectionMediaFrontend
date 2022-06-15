import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import '../css/userlogin.css'
import axios from 'axios'


const Login = () => {
    const [emailLogin,setEmail]=useState('');
    const [passwordLogin,setPassword]=useState('')
    const nav = useNavigate();
    const login=()=>{
        axios.post("http://localhost:5000/api/v1/user/login",{
            
            email:emailLogin,
            password:passwordLogin
        },
        {       
                mode:'cors',
                headers:{
                  'Access-Control-Allow-Origin':'*',
                  "Access-Control-Allow-Credentials" : true }
                
        }).then((response)=>{
            console.log(response);
            alert('User Login Successfull!');
            nav('/homepage');
            

        })
    }
  return (
    <> 
    <h3>User LogIn</h3>
    <div className='userlogin'>

        
        <span>Email  </span><input type='email' name='name' placeholder='Enter your email' 
        onChange={(e)=>{setEmail(e.target.value)}}/><br/><br/>
        <span>Password  </span><input type='text' name='name' placeholder='Enter your password'
        onChange={(e)=>{setPassword(e.target.value)}}/><br/><br/>
        <button onClick={login}>Login</button>
        
    </div></>
  )
}

export default Login