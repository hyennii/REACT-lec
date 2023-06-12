import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/main_bg.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import data from './data.js';

function App() {

  let [ shop ] = useState(data)

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">혜핑 <span className="sub_name">hyeping</span></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg" style={{backgroundImage : 'url('+ bg +')'}}></div>

      <Row>
        <Col xs={{ order: 'first' }}>
          <img src={process.env.PUBLIC_URL + '/main01.jpg'} width="80%"></img>
          <h4>{shop[0].title}</h4>
          <p>{shop[0].price}</p>
        </Col>
        <Col xs>
        <img src={process.env.PUBLIC_URL + '/main02.jpg'} width="80%"></img>
          <h4>{shop[1].title}</h4>
          <p>{shop[1].price}</p>
        </Col>
        <Col xs={{ order: 'last' }}>
        <img src={process.env.PUBLIC_URL + '/main03.jpg'} width="80%"></img>
          <h4>{shop[2].title}</h4>
          <p>{shop[2].price}</p>
        </Col>
      </Row>
    </div>
  );
}

export default App;
