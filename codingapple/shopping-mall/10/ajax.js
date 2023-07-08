import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/main_bg.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './pages/detail.js'
import axios from 'axios'

function App() {

  let [shop,setshop  ] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">혜핑 <span className="sub_name">hyeping</span></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>홈</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail/1') }}>상세페이지</Nav.Link>
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
        <Route path="/detail/:id" element={<Detail shop={shop}/>}/>

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버</div>}/>
          <Route path="location" element={<div>위치정보</div>}/>
        </Route>

      </Routes>
      <button onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((결과)=>{
          console.log(결과.data)
          let copy = [...shop, ...결과.data];   //괄호 벗기고 알맹이만 남기기
          setshop(copy);
        })
        
      }}>더보기</button>
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
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
