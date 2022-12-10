import Header from './Header'
import {Table} from 'react-bootstrap'
import {useState} from 'react'
function SearchProduct(){
 const [data, setData] = useState([])
 async function Search(key){
    //console.log(key)
    let url = `https://ecomm-efb8.restdb.io/rest/product?filter=${key}`
    let result = await fetch(url,{
      method: "GET",
      headers:{
        "content-type":"application/json",
        "x-apikey": "63887ac2c890f30a8fd1f677",
        "cache-control": "no-cache"
       }
    });
       console.log(result)
       let res = await result.json();
       console.log(res)
       setData(res)
  }
  return(
    <>
      <Header />
      <main className="container my-2">
        <h1>Search Product</h1>   
        <input type="text" placeholder="Search Product" className="form-control my-2" onChange={(e)=>Search(e.target.value)}/>
        <Table className="container" striped bordered hover responsive variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
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
         </tr>)
        }
      </tbody>
    </Table>
      </main>
    </>
  )
}

export default SearchProduct;