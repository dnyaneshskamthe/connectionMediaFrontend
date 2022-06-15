import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";




const HomePage = () => {
  const nav = useNavigate();
  const userLogout=()=>{
    axios.post("http://localhost:5000/api/v1/user/logout",
    {       
            mode:'cors',
            headers:{
              'Access-Control-Allow-Origin':'*',
              "Access-Control-Allow-Credentials" : true }
            
    }).then((response)=>{
        console.log(response);
        alert('User Logged Out Successfully!');
        nav('/landing');

    })
  return (
    <>
    <h1>
        this is home page
    </h1>
    <h3 onClick={userLogout}>Logout</h3>
    </>
  )
} }

export default HomePage;