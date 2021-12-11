import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
        <header>

            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect className='py-1 fixed-top'>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand href="/">AMANAH KARYA INDONESIA</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/soal1">
                                <Nav.Link>
                                    Soal 1
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/soal2">
                                <Nav.Link>
                                    Soal 2
                                </Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Soal3" id="adminmenu">
                                <LinkContainer to="/soal3/createId">
                                    <NavDropdown.Item>Create ID</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/soal3/allId">
                                    <NavDropdown.Item>All ID</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <LinkContainer to="/soal4/tebaknomor">
                                <Nav.Link>
                                    Soal 4
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
