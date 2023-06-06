#### * shop 폴더 만들기

프로젝트 폴더 shift + 우클릭 -> 터미널 -> npx create-react-app shop 입력

## Bootstrap 사용하기

Bootstrap : ui 레이아웃을 복사 붙여넣게 식으로 편하게 개발 가능한 라이브러리

<h4><설치방법></h4>

1. 구글에 react bootstrap 입력 및 접속 
2. Get started
3. 터미널에 npm install react-bootstrap bootstrap 입력(설치 명령어 바뀔 수도 있으니 사이트에서 보고 입력)
4. App.js 에 css 파일 붙여넣기 (import 'bootstrap/dist/css/bootstrap.min.css';) 또는 public > index.html 에 해당하는 파일 입력
5. 원하는 ui 사이트 내 검색 후 원하는거 복붙 
   
   단, 각 컴포넌트(대문자로 시작은 다 컴포넌트) import 해와야함. 사이트에 있음
   
6. 상단바 등 추가로 만들 때에도 import까지 추가해야함(대문자로 보이는거 다 추가)
  
  ```javaScript
    import { Button, Navbar, Container, Nav } from 'react-bootstrap';
  ```
  
7. css로 커스터마이징 가능(className 지정해서)
