import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom';
function Header(){
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user_data"))
  function logout(){
    localStorage.clear();
    navigate("/login");
  }
  return(
      <div>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">E-Commarce Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto a-wrap">
            {
             localStorage.getItem("user_data") ?
              <>
               <Link to="/add">Add Product</Link>
               <Link to="/update">Update Product</Link>
              </>
              :
              <>
               <Link to="/register">Register</Link>
               <Link to="/login">Login</Link>
              </>
            }
          </Nav>
          </Navbar.Collapse>
         </Container>
       </Navbar>
        { 
          localStorage.getItem("user_data") ?
          <>
          <div className="logout">
            <span>{user.Name}</span>
            <button onClick={logout}>Logout</button>
          </div>
          </>
          :null
        }
      </div>
  )
}

export default Header;