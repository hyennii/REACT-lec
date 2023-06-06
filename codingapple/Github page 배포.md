## Github Pages로 배포

웹브라우저는 HTML, CSS, JS 언어만 해석 가능하기 때문에 build하여 파일 변경 후 올려야 함

<h4>* 배포하기 전 체크</h4>

1) 미리보기 띄웠을 때 콘솔창, 터미널에 에러만 안나면 됨
2) 사이트 배포할 때, http://codingapple.com/ 여기에 배포하는 경우 따로 설정 필요없지만 http://codingapple.com/blog/ 이런 하위 경로에 배포하고 싶으면 프로젝트에 따로 설정 필요
   
   -> 프로젝트 파일 중 package.json 오픈하면 큰 object가 하나 있는데 
      ```javaScript
        "homepage": "http://codingapple.com/blog",
      ```
      homepage라는 key값 추가한 후 본인이 배포할 사이트 경로 추가하면 됨(혹은 /blog 이렇게 경로 써도 됨)
      
      리액트 라우터가 설치되어있다면 라우터가 제공하는 basename="" 속성 추가하는게 라우팅 잘됨
      자세한 내용은 https://create-react-app.dev/docs/deployment/#building-for-relative-paths
      
----------------------------------

<h4>1. 터미널에 build 명령어 입력</h4>

1) 터미널에 npm run build 입력
2) 작업 프로젝트 폴더 내에 build라는 폴더 생성됨(짰던 코드 전부 html, css, js파일로 변환해서 담아줌)
3) build 폴더 안에 있는 내용 모두 서버에 올리면 됨
4) index.html이 메인페이지

----------------------------------

<h4>2. 무료 호스팅해주는 github pages에 올리기</h4>

1) 무료로 호스팅해주는 사이트임
2) 새로 repository 생성(repository name은 꼭 왼쪽에 뜨는 본인아이디.github.io로 입력, README 파일 생성 체크)

----------------------------------

<h4>3. 생성된 repository에 파일 올리기</h4>

1) build 폴더 내의 파일 전부 드래그 앤 드롭(폴더를 하는게 아니라 폴더 안의 내용물 전체)
2) 10분 정도 후 아까 작성했던 https://본인아이디.github.io로 들어가면 사이트 보임

----------------------------------

<h4>만약 404페이지 뜰 때</h4>

1) 더 기다리기
2) 캐시제거 및 강력새로고침
3) repository 생성시 아이디 잘못 적었는지 확인(대소문자 확인)

----------------------------------

<h4>repository를 동시에 호스팅 가능</h4>

1) 다른 html 페이지도 호스팅받고싶으면 본인이름.github.io 라는 repository 삭제 금지
2) 새로운 프로젝트 올릴 repository 새로 만들기(이름은 자유)
3) 그 repository에 아까처럼 드래그앤드롭으로 원하는 html, css, js파일 업로드하고 확인 누르기
4) repository setting 메뉴 들어가서 Github Pages 부분 찾기 
5) source에 None이 아니라 main 이런걸로 바꾸고 저장
6) 본인아이디.github.io/repository이름/ 으로 들어가면 아까 업로드한 html 파일 볼 수 있음
7) 만약 안보이면 본인아이디.github.io/repository이름/html파일명.html 이렇게 직접 들어가기(첫 업로드 후 오래 기다려야 반영됨)

----------------------------------

#### 1) 첫 페이지 로딩 속도를 빠르게 하려면

원래 리액트, 뷰로 만든 웹앱들은 첫 방문시 필요한 파일 전부 로드하기 때문에, lazy 적용

lazy 함수 : https://reactjs.org/docs/code-splitting.html#route-based-code-splitting

#### 2) 업데이트 사항이 생기면 배포 또 어떻게?

build 또 하고 그 파일 그대로 다시 업로드하기(build 할 때 마다 css, js 파일명이 무작위로 다시 생성됨)

#### 3) build 할 때 압축 시키지말고 남기고 싶은 파일은?

본인이 ./ 부터 시작하는 경로로 첨부한 이미지, js 파일들은 전부 이름이 변함

이름 변하지 않게 하고싶으면 public 폴더안에 넣고 build (그럼 그대로 루트경로에 파일 남아있음)

개발시 그런 파일들 이용하고 싶으aus public 폴더에 보관하고 ./ 이게 아닌 / 경로로 import 해오기

#### 4) 서버에 올렸는데 일부 img, css 파일 로드가 안되면?

대부분 경로 문제임 (build 할 때 에러 안났는지, 하위폴더에 배포한건 아닌지)

#### 5) 메인페이지 말고 왜 특정 페이지로 접속하면 404 에러가 뜨는지

~github.io/detail/1 이렇게 세부 페이지 url을 입력하면 404 에러 날 수 있음

이건 서버에서 "누군가 ~로 접속하면 메인페이지로 안내하세요" 라고 api 개발 해놓아야함

아니면 url에 # 기호가 붇는 hashRouter를 리액트 라우터 코드짤 때 쓰던가

github는 서버를 만지고 어찌할 수 있는게 아니고 그냥 html 파일 올린것만 보여주는 곳이기 때문에 사이트 메뉴에 페이지 이동 버튼을 잘 만들면 됨
