import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './Header'
function Login(){
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("user_data")){
      navigate("/")
    }
  },[])
  return(
    <div>
      <Header />
      <h1>Login Page</h1>
    </div>
  )
}

export default Login;