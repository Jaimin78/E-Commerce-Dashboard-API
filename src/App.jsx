import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Register from './Register'
import Login from './Login'
import Home from './Home'
function App() {
  return (
    <div>     
     <BrowserRouter>         
         <Header />
        <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/add" element={<AddProduct />} />
         <Route path="/update" element={<UpdateProduct />}/>
         <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} />
        </Routes>
     </BrowserRouter>
    </div>
  )
}
export default App;