## 프로젝트 생성

1. 폴더 shift + 우클릭 -> 터미널 열림(npx create-react-app 프로젝트명) -> 에디터에서 폴더 오픈
<span style="color:violet">* permission 어쩌구 에러 발생시 'sudo npx create-react-app 프로젝트명' 입력</span>
<br>
<br>
2. 에디터 내 프로젝트명 잘 떠있는지 확인 후 src 폴더 내 App.js 에서 코드작성하면 됨
<br>
<br>
3. 프로젝트 미리보기 : 에디터 내 상단 터미널 -> new terminal -> npm start 입력
<br>
<br>
<span style="color:greenyellow">html파일에 직접 리액트 라이브러리 설치해도 되지만 시간이 너무 오래 걸림. 그래서 create react app 라이브러리 설치(구글)해서 많이 쓰는데, 이걸 쓰기 위해서는 npm이 필요하며 node.js 설치하면 같이 설치되기 때문에 node.js 미리 설치 필요 </span>
<br>
<br>
## 프로젝트 내 파일 설명
1. node_modules : 프로젝트 구동에 필요한 라이브러리 소스 보관함
2. public : html, 이미지파일 등 보관 하고 싶을 때 쓰는 static 파일 모아놓는 곳
3. src : 코드 짜는 곳. 대표적으로 App.js가 메인 페이지 
<br>
<span style="color:greenyellow">여기서 짜놓은 코드가 public 폴더 안 index.html 파일에 들어가지기 때문에 js로 코드 작성함 </span>
4. package.json : 프로젝트 정보 기입(자동 생성됨)