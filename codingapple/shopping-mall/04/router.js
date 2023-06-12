import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/main_bg.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import data from './data.js';
import {Routes, Route, Link} from 'react-router-dom'

function App() {

  let [ shop ] = useState(data)

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">혜핑 <span className="sub_name">hyeping</span></Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
        <>
        <div className="main-bg" style={{backgroundImage : 'url('+ bg +')'}}></div>
        <Row>
          {
            shop.map((a, i)=>{
              return(
                <Card shop={shop[i]} i={i+1}></Card>
              )
            })
          }
        </Row>
        </>
        }/>
        <Route path="/detail" element={<div>상세페이지</div>}/>
      </Routes>
    </div>
  );
}

function Card(props){
  return(
    <Col xs>
      <img src={process.env.PUBLIC_URL + '/main' + props.i + '.jpg'} width="80%"></img>
      <h4>{props.shop.title}</h4>
      <p>{props.shop.price}</p>
    </Col>
  )
}

export default App;
