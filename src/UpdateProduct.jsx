import Header from './Header'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
function UpdateProduct(){
  const {id} = useParams()
  console.log(id)
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetchData()
  },[])
  console.log("Data", data)
  const fetchData = async () => {
     try{
       let result = await fetch("https://ecomm-efb8.restdb.io/rest/product/"+id,{
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
  return(
    <>
      <Header />
      <main>
      <h1>Update Product page</h1>
      <div className="container my-2">
      <input type="text" placeholder="Product Name" className="form-control my-1" defaultValue={data.Product_Name}/>
        <input type="text" placeholder="Product Price" className="form-control my-1" defaultValue={data.Price}/>
        <input type="text" placeholder="Description" className="form-control my-1" defaultValue={data.Description}/>
        <input type="text" id="show" placeholder="Add Photo url" className="form-control my-1" defaultValue={data.Photo} />  
        {
       data.Photo?
       <img style={{width:200}} className="my-2" alt="please enter proper url" src={data.Photo}/> 
        :null 
        }
       <br />
      <button className="btn btn-dark">Update Product</button>
      </div>
      </main>
    </>
  )
}

export default UpdateProduct;