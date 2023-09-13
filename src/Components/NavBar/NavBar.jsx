import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from './NavBar.module.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import LoginIcon from '@mui/icons-material/Login';
import Fab from '@mui/material/Fab';
// import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" sticky="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className={classes.cname}>SHOPCONNECT</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={classes.link}>Sale</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className={classes.link} style={{ marginTop: "10px" }}>Contact</Nav.Link>
              <Nav.Link className={classes.logo} title='Cart' ><Fab variant="extended" color='primary'>
                <ShoppingCartOutlinedIcon sx={{ mr: 1}} />
                Cart
              </Fab></Nav.Link>
              <Nav.Link className={classes.logo}><Fab variant="extended" color='success'>
                <LoginIcon sx={{ mr: 1 }} />
                Login
              </Fab></Nav.Link>
              <Nav.Link className={classes.logo} title='Account' >
                <Fab variant="extended" color='warning'>
                  <Person2RoundedIcon sx={{ mr: 1 }} />
                  Login
                </Fab>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
