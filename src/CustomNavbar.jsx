import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './CustomNavbar.css'

function CustomNavbar() {

    const colorPalette = {
        ruddyBlue: '#79ADDC',
        peach: '#FFC09F',
        flax: '#FFEE93',
        lemonChiffon: '#FCF5C7',
        celadon: '#ADF7B6'

    }



    return (
        <Navbar expand="lg" >
            <Container>
                <Navbar.Brand href="#home" className='stylishText'>
                    <img
                        alt=""
                        src="https://cdn-icons-png.flaticon.com/512/4549/4549811.png"
                        width="55"
                        height="55"
                        className="d-inline-block align-top"
                    />{' '}
                    Sim Cakes
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;


