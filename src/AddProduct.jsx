import Header from './Header'
import React,{useState} from 'react'
function AddProduct(){
  const [Product_Name, setProductName] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [Photo, setPhoto] = useState("");
  async function submit(){
    let product = {Product_Name, Price, Description, Photo}
    //console.log(product)
    //console.log(product.Photo)
    let url = "https://ecomm-efb8.restdb.io/rest/product";
    let options = {
      method: "POST",
      headers:{
        "content-type":"application/json",
        "x-apikey": "63887ac2c890f30a8fd1f677",
        "cache-control": "no-cache"
      },
      body: JSON.stringify(product)
    }
    let request = await fetch(url,options);
    request = await request.json()
    //console.log("Status",request)
  }
  return(
    <>
     <Header />
    <main>
      <h1>Add Product</h1>
      <div className="container my-2">
      <input type="text" placeholder="Product Name" className="form-control my-1" value={Product_Name} onChange={(e)=>setProductName(e.target.value)} />
        <input type="text" placeholder="Product Price" className="form-control my-1" value={Price} onChange={(e)=>setPrice(e.target.value)}/>
        <input type="text" placeholder="Description" className="form-control my-1" value={Description} onChange={(e)=>setDescription(e.target.value)} />
        <input type="text" placeholder="Add Photo url" className="form-control my-1" value={Photo} onChange={(e)=>setPhoto(e.target.value)} />
        <button className="btn btn-dark" onClick={submit}>Add Product</button>
      </div>
    </main>
   </>
  )
}

export default AddProduct;