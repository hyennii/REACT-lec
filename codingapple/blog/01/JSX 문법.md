## 레이아웃 만들 때 쓰는 JSX 문법 3개

<h4>상단메뉴 만들어보기</h4>

< app.js 내에 div 하나만 남기고 시작 >
    <br>* 기존 html 방식과 같음. js파일인데도 잘 동작하는 이유는 JSX 언어이기 때문(js 안에서 쓰는 html 대용품)
    
1. className

    App.css 파일에서 스타일 작성 가능<br>
    <br>*일반 html과 다른 점 : JSX 안에서는 class가 아닌, className으로 사용함.(class는 따로 문법용어 존재)
    <br>*css파일 쓰려면 상단에서 import 'css파일 경로' 작성

-----------------------
2. 변수 넣을 땐 {중괄호} = "데이터바인딩은 {중괄호}"

    블로그 글 제목 만들 때, 실제 서비스라면 서버 같은 곳에서 블로그 글 가져와서 보여주기 때문에, 서버 연결했다고 가정하고 변수 가져오기
    ```javaScript
      let post = '강남 맛집';
      <h4>{ post }</h4>
    ```
      *id, src 등에도 중괄호 사용 가능
      
  ------------------------
  3. style 넣을 땐 style={{스타일명:'값'}}

```javaScript
    <h4 style={{color:'red'; fontSize:'16px'}}>블로그임</h4>
```
  *font-size같은 경우, js에서는 -를 뺄셈 기호로 인식하기 때문에 CamelCase로 표기해야 함
  <br>*에러 메세지는 터미널/브라우저에서 확인
