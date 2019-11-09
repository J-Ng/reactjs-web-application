const React = require('react');
const ReactDOM = require('react-dom');
import { Navbar, Nav, NavDropdown,Form,FormControl,Button } from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
		<Navbar bg="dark" expand="lg" variant="dark" style={{marginBottom:"2px"}}>
		  <Navbar.Brand href="#home">
		  	<img src="/images/avantera-logo.png"
		        width="45" height="45" style={{marginRight:"5px"}}>
		  	</img>
	  		Avantera Technologies
	  	  </Navbar.Brand>
		  <Navbar.Toggle aria-controls="basic-navbar-nav" />
		  <Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="mr-auto">
		      <Nav.Link href="/home">Home</Nav.Link>
		      <Nav.Link href="/about">About</Nav.Link>
		      <NavDropdown title="Demo" id="basic-nav-dropdown">
		        <NavDropdown.Item href="/demo/homeDemoEcom">E-Commerce</NavDropdown.Item>
		      </NavDropdown>
		    </Nav>
		    <Form inline>
		      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
		      <Button variant="dark">Search</Button>
		    </Form>
		  </Navbar.Collapse>
		</Navbar>
    );
  }
}