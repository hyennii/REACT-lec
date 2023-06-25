## navigate, nested routes, outlet

<h4>폴더구조</h4>
: 비슷한 파일끼리 폴더로 묶기

ex) src 안에 pages 폴더 만들고 페이지.js 다 모아놓기

------------------------------

<h4>Navigate, nested routes, outlet</h4>

- 상단 import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom' 추가

1. useNavigate : 페이지 이동 도와줌(link 대신)
    * use ~~~로 시작하는 것들은 hook 이라 함. (훅은 유용한 것들이 들어있는 함수라고 보면 됨)
      let navigate = useNavigate(); 선언하고
    기존 link 태그에 페이지 이동시키고 싶은 경로 적어주면 됨
    ```javaScript
    <Nav.Link onClick={()=>{navigate('/detail')}}>상세페이지</Link>
    ```
    
    * onClick={()=>{navigate(1)}} 이라고 적으면 앞으로 1페이지 이동해달라는 뜻(-1 넣으면 뒤로 1번 가기)
  
2. 404 페이지 만들기

    * path=“*” 넣으면 이 외의 모든것을 뜻함.
    ```javaScript
      <Route path="*" element={<div>없는페이지임</div>}/>
    ```

3. Nested routes
    * About 페이지에 회사 위치나, 회사 정보 페이지를 추가로 넣고 싶을 때,
    ```javaScript
      <Route path="/about/member" element={<About/>}/>
      <Route path="/about/location” element={<About/>}/>
    ```
   처럼 여러개 적어도 되지만, 

    ```javaScript
      <Route path="/about" element={<About/>}>
          <Route path="member" element={<About/>}/>
          <Route path="location" element={<About/>}/>
     </Route>
    ```
    처럼 적어도 가능하며, 이를 nested routes라 함(태그 안에 태그 들어간 걸 nested라고 함)
   
       - nested route 접속시엔 element 2개 보임
       - about 안의 어디에 member 페이지를 보여줄 지 정하려면 <Outlet> 사용

   ```javaScript
      <Outlet></Outlet>
   ```

   - 여러 유사한 페이지 필요할 때 nested routes  쓰면 됨(일부 ui만 바꿔서 보여줄 수 있기 때문에 용이함)
