## 리액트 라우터

: 리액트 사용하여 페이지 나누는법

1. 컴포넌트 만들어서 상세페이지 내용 채움
2. 유저가 /detail 접속하면 그 컴포넌트 보여줌

-> react-router-dom 라이브러리 일반적으로 사용하여 쉽게 코딩가능

----------------------------

<h4>React-router-dom 라이브러리 설치하기</h4>

1. 터미널에 rpm Install react-router-dom@6 입력 (6버전)
2. 설치 다 되면 npm start
3. React-router-dom 6 사이트 들어가서 설치과정 그대로 따라하기

-> index.js 파일 - App 컴포넌트를 <BrowserRouter>로 감싸기 - import {BrowserRouter} from "react-router-dom" 작성
  
----------------------------
  
<h4>라이브러리 사용</h4>
  
  라이브러리 사용은 외우는것이 아닌 각 페이지에서 검색하여 입력
  
- import {Routes, Route, Link} from 'react-router-dom' import 하기(App.js 로 돌아와서)
- Routes 태그 안에 Route 태그 넣어주기(Route는 만드려는 페이지)
- 누군가 /detail 로 들어오면 상세페이지를 보여주고 싶을 때
 
```javaScript
  <Route path="/detail" element={<div>상세페이지</div>}/>  //element는 보여주려는 html
```
- 메인페이지는 path=“/“ 
- 상품목록은 메인페이지에만 보여주고 싶을때
 : routes를 navbar 밑으로 옮겨주고 메인페이지 element 에만 해당 내용 넣어주기
- 사용자는 슬래시 붙여서 이동 안하니까 보통 버튼 만들어둠 -> 페이지 이동 버튼은 <Link> (import해오기)

----------------------------

*<h4>숙제</h4>*
상세페이지 컴포넌트로 만들기
