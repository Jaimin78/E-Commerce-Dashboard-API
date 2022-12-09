import Header from './Header'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
function UpdateProduct(){
  const {id} = useParams()
  //console.log(id)
  const [data,setData] = useState([]);  
  const [Product_Name, setProductName] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [Photo, setPhoto] = useState("");
  
  useEffect(()=>{
    fetchData()
  },[])
  //console.log("Data", data)
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
       setProductName(res.Product_Name)
       setPrice(res.Price)
       setDescription(res.Description)
       setPhoto(res.Photo)
     }catch(err){
        console.log("Error",arr)
     }
    }

async function update(id){
    //alert(id)
    let product = {Product_Name, Price, Description, Photo}
    //console.log(product)
    //console.log(product.Photo)
    let url = "https://ecomm-efb8.restdb.io/rest/product/"+id;
    let options = {
      method: "PUT",
      headers:{
        "content-type":"application/json",
        "x-apikey": "63887ac2c890f30a8fd1f677",
        "cache-control": "no-cache"
      },
      body: JSON.stringify(product)
    }
    let request = await fetch(url,options);
    request = await request.json()
    alert("Record Updated Successfully");
    console.log("Status",request)  
}
  return(
    <>
      <Header />
      <main>
      <h1>Update Product page</h1>
      <div className="container my-2">
      <input type="text" placeholder="Product Name" className="form-control my-1" defaultValue={data.Product_Name} onChange={(e)=>setProductName(e.target.value)} />
        <input type="text" placeholder="Product Price" className="form-control my-1" defaultValue={data.Price} onChange={(e)=>setPrice(e.target.value)} />
        <input type="text" placeholder="Description" className="form-control my-1" defaultValue={data.Description} onChange={(e)=>setDescription(e.target.value)} />
        <input type="text" id="show" placeholder="Add Photo url" className="form-control my-1" defaultValue={data.Photo} onChange={(e)=>setPhoto(e.target.value)} />  
        {
       data.Photo?
       <img style={{width:200}} className="my-2" alt="please enter proper url" src={data.Photo}/> 
        :null 
        }
       <br />
      <button className="btn btn-dark" onClick={()=>{update(data._id)}}>Update Product</button>
      </div>
      </main>
    </>
  )
}

export default UpdateProduct;