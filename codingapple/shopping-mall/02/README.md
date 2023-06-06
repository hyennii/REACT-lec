## 이미지 넣기 & public 폴더 이용하기

<h4>이미지 넣기</h4>

1. src 폴더에 사진 넣고 css 적용

- 만약 css가 아닌 html상에서 바로 이미지 넣을땐 import 작명 from ‘’; 입력해야 불러와짐

```javaScript
  import bg from './img/main_bg.jpg';

  <div className="main-bg" style={{backgroundImage : 'url('+ bg +')'}}></div> //변수 중간에 문자 넣을 때 + 기호 사용
```

2. public 폴더 이용하기

- 이미지 100개 넘어서 import 일일이 못 쓸때는 Public 폴더에 이미지 보관 가능
- 리액트는 사이트 발행 전에 html, js, css 파일을 압축하는데(bundling), public 폴더 안 내용들은 압축되지 않음
- 그러므로 public 폴더 이미지 사용할 땐 그냥 “/이미지경로” 작성하면 됨

<strong>Public 폴더 내 이미지로 작성했는데, 서브 경로에 발행하고 싶을 때 문제 생김</strong>

Ex) codingapple.com/어쩌구/ 에 발행시 문제

-> Create react app 공식 사이트에 가면 {process.env.PUBLIC_URL + ‘img/logo.png’} 로 코드 짜라고 나와있음
