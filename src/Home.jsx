import Header from './Header'
import {Table, Button} from 'react-bootstrap'
import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
function Home(){ 
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetchData()
  },[])
  console.log("Data", data)
  const fetchData = async () => {
     try{
       let result = await fetch("https://ecomm-efb8.restdb.io/rest/product",{
      method: "GET",
      headers:{
        "content-type":"application/json",
        "x-apikey": "63887ac2c890f30a8fd1f677",
        "cache-control": "no-cache"
       }
    });
       //console.log(result)
       let res = await result.json();
       //console.log(result)
       setData(res)
     }catch(err){
        console.log("Error",arr)
     }
    }
  async function Delete(id){
     let query = await fetch("https://ecomm-efb8.restdb.io/rest/product/"+id,{
      method: "DELETE",
      headers:{
        "content-type":"application/json",
        "x-apikey": "63887ac2c890f30a8fd1f677",
        "cache-control": "no-cache"
       }
    });
    let result = await query.json()
    console.log(result)
    fetchData()
  }

  function update(id){
    const navigate = navigate()
    navigate("/update/"+id)
  }
  return(
   <>
      <Header />
      <main>
      <h1>Product List</h1>
      <Table className="container" striped bordered hover responsive variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th colSpan={2}>Operation</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item,i)=>
         <tr key={i}>
          <td>{i+1}</td>
          <td><img style={{width:50}} src={item.Photo}/></td>
          <td>{item.Product_Name}</td>
          <td>{item.Description}</td>
          <td>{item.Price}</td>
          <td><Button className="btn btn-danger" onClick= {()=>{Delete(item._id)}}>Delete</Button></td>
          <td><Link to={"/update/"+item._id}><Button className="btn btn-success">Update</Button></Link></td>
        </tr>)
        }
      </tbody>
    </Table>
    </main>
   </>
  )
}
export default Home;