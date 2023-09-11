import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const NavBar = () => {
  const cartCount = useSelector(state => state.cart)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <h1 style=
            {{color: 'blue', marginLeft: '0.2rem', fontSize: '1.2rem', marginTop: '0.4rem'}}>CoachEmmy <span style={{color: 'red'}}>Groceries</span>
          </h1>
        </Navbar.Brand>

        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end' style={{marginRight: '0.2rem'}}>
          <Nav>        
            <Nav.Link  to = '/' as = {Link}>Products</Nav.Link>
          </Nav>
          <Navbar.Text>
            <Nav.Link to = '/cart' as = {Link}>Cart - <span style={{color:'green', fontSize: '1.2rem'}}>{cartCount.length}</span></Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default NavBar
