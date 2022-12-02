import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Register(){

  const [Name,setName] = useState("");
  const [Email,setEmail] = useState("");
  const [Password,setPassword] = useState("");
  const navigate = useNavigate();
async function submit(){
  let item = {Name,Email,Password}
  console.log(item)
  let url = "https://ecomm-efb8.restdb.io/rest/userdata";
  let options = {
    method: "POST",
    headers:{
      "content-type":"application/json",
      "x-apikey": "63887ac2c890f30a8fd1f677",
      "cache-control": "no-cache"
    },
    body: JSON.stringify(item)
  }
  let request = await fetch(url,options);
  request = await request.json()
  console.log("Status",request)
  localStorage.setItem("user_data",JSON.stringify(item))
  navigate("/");
}
  return(
    <main>
      <h1>Register page</h1>
      <div className="container my-2">
      <input type="text" placeholder="Name" className="form-control my-1" value={Name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder="Email" className="form-control my-1" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder="Password" className="form-control my-1" value={Password} onChange={(e)=>setPassword(e.target.value)} />
        <button className="btn btn-dark" onClick={submit}>Register</button>
      </div>
    </main>
  )
}

export default Register;