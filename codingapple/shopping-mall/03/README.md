## 코드가 길어지면 import, export

(서버에서 데이터 가져왔다고 가정하고)

1) import

```javaScript
  import { useState } from "react";
  let [ shop ] = useState(data) 
```

2) export

    1. src안에 data.js 파일 생성 (data.js 에 복잡한 데이터들 작성)
    2. data.js 파일에서 export하기

- export 하려면 export default 변수명
- import 하려면 import 작명 from ‘파일경로’
- 만약 여러개를 export 할 때는 export{변수1,변수2}
- 여러개 import 할 때는 import{변수1,변수2} from ‘경로’
- export 변수명과 import 변수명은 같아야함

<br>

## object 자료형

(data.js 안의 대괄호 안 중괄호들이 object 자료임)

array처럼 변수 하나에 여러 데이터를 가져다 쓸 때 사용 
* 단, 각 자료에 이름 작명해 넣어야함

```javaScript
  let a = {name : ‘kim’, age : 20}
```

- 원하는 자료 사용시 a.name 입력 (. 찍고 자료이름)

-------------------------------------------

*<h4>숙제</h4>*

1. 상품목록 컴포넌트화
2. 상품명 데이터바인딩 해보기
3. 반복적인 부분은 map 반복문 써보기

```javaScript
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
        {/* <Card shop={shop[0]} i={1}></Card>
        <Card shop={shop[1]} i={2}></Card>
        <Card shop={shop[2]} i={3}></Card> */}
        {
          shop.map((a, i)=>{
            return(
              <Card shop={shop[i]} i={i+1}></Card>
            )
          })
        }
      </Row>
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

```
