import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/main_bg.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
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
        <Col xs={{ order: 'last' }}>
          <img></img>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col xs>
        <img></img>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col xs={{ order: 'first' }}>
        <img></img>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
      </Row>
    </div>
  );
}

export default App;
