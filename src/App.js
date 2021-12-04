import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Container,
  Row,
  Button
} from 'react-bootstrap';
import Frontpage from './component/Frontpage';
import Add from './component/Add';
import Display from './component/Display';

function App() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
        <Container>
        <Navbar.Brand as={Link} to={'/'}>Todo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/pending'}>Pending</Nav.Link>
            <Nav.Link as={Link} to={'/done'}>Done</Nav.Link>            
          </Nav>
          <Nav>
            <Button as={Link} to={'/add'} variant="outline-light">Add New</Button>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <Row className="mt-3">

          <Switch>
            <Route exact path={'/'}> <Frontpage /> </Route>
            <Route exact path={'/add'} > <Add /> </Route>
            <Route path={'/:status'}> <Display /> </Route>
          </Switch>
          
        </Row>
      </Container>
    </>
  );
}

export default App;
