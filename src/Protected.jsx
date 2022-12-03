import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Protected(props){
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem("user_data")){
      navigate("/login")
    }
  },[])
  let Cmp = props.Cmp;
  return(
    <div>
      <Cmp />
    </div>
  )
}

export default Protected;