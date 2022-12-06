import React,{useEffect, useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import Header from './Header'
function Login(){ 
  const [Email,setEmail] = useState("");
  const [Password,setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("user_data")){
      navigate("/")
    }
  },[])
  async function login(){
    let item = {Email,Password}  
    //console.log(item.Email)
   let url = "https://ecomm-efb8.restdb.io/rest/userdata";
    //let url = "https://ecomm-efb8.restdb.io/rest/product";
    let options = {
      method: "GET",
      headers:{
        "content-type":"application/json",
        "x-apikey": "63887ac2c890f30a8fd1f677",
        "cache-control": "no-cache"
       }
    }
    let request = await fetch(url,options);
    request = await request.json()
   // console.log("Status",request)
    for(let i in request){
      //console.log(request[i].Name)
    if(request[i].Email == item.Email){
      if(request[i].Password == item.Password){     localStorage.setItem("user_data",JSON.stringify(request[i]))
      navigate("/");
      }else{
        alert("Wrong Password")
      }
    }
   }
 }
  return(
    <>
      <Header />
      <main>
      <h1>Login Page</h1>
      <div className="container my-2">
        <input type="text" placeholder="Email" className="form-control my-1" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder="Password" className="form-control my-1" value={Password} onChange={(e)=>setPassword(e.target.value)} />
        <button className="btn btn-dark" onClick={login}>Login</button>
      </div>
      <div>
        <span>Don't have an account?</span><Link to="/register">Register Now</Link>
      </div>
      </main>
    </>
  )
}

export default Login;