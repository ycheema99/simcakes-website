import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

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
        <Navbar expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand className='stylishText'>
                        <img
                            alt=""
                            src="https://cdn-icons-png.flaticon.com/512/4549/4549811.png"
                            width="55"
                            height="55"
                            className="d-inline-block align-top"
                        />{' '}
                        Sim Cakes
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto ">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/gallery">
                            <Nav.Link>Gallery</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/pricing">
                            <Nav.Link>Pricing</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
