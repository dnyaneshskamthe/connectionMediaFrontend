import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import '../css/register.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [nameReg,setnameReg]=useState('')
    const [emailReg,setemailReg]=useState('')
    const [phoneReg,setphoneReg]=useState('')
    const [passwordReg,setpasswordReg]=useState('')
    const nav = useNavigate();
    const registerUser=()=>{
        axios.post("http://localhost:5000/api/v1/user/register",{
            name:nameReg,
            email:emailReg,
            phone:phoneReg,
            password:passwordReg
        },
        {       
                mode:'cors',
                headers:{
                  'Access-Control-Allow-Origin':'*',
                  "Access-Control-Allow-Credentials" : true }
                
        }).then((response)=>{
            console.log(response);
            alert('User regsitered Successfull!');
            nav('/login');

        })
    }
  return (
    <>
    <h3>User regsitration</h3>
    <div className='usereg' method='post'>

        <span>Name  </span><input type='text' name='name' 
                            placeholder='Enter your Name' 
                                onChange={(e)=>{setnameReg(e.target.value)}}/><br/><br/>
        <span>Email  </span><input type='email' name='email' placeholder='Enter your email'
                                onChange={(e)=>{setemailReg(e.target.value)}}/><br/><br/>
        <span>Phone  </span><input type='email' name='email' placeholder='Enter your Phone Number'
                                onChange={(e)=>{setphoneReg(e.target.value)}}/><br/><br/>
        <span>Password  </span><input type='password' name='password' placeholder='Enter your password'
                                onChange={(e)=>{setpasswordReg(e.target.value)}}/><br/><br/>
        <input type="submit" className="button" onClick={registerUser} />
    </div>
    
    <h3><Link to="/login">Go to LogIn</Link></h3>
    
    </>
  )
}

export default Register