## styled-components

: 리액트나 리액트 네이티브로 코드 짤 때 사람들이 많이 쓰는 라이브러리 중 하나

<h4>설치방법</h4>
: 터미널에 npm install styled-components 입력 후 npm start

* 에러 발생 시 바탕화면 등 다른폴더에서 프로젝트 만들어서 시도 또는 nodejs 18버전으로 설치하면 해결

* 또는 구글링 - nom Install styles-components@5.3.10 입력
     (Styled-components version6 이후로 명령어 입력시 문제 발생)

<h4>사용방법</h4>
1. import 하기

```javaScript
   import styled from 'styled-components'
```

2. css 입혀주기

```javaScript
  let YellowBtn = styled.button`    //벡틱 사용
	background : yellow;
	color : black;
	padding : 10px;
`

<YellowBtn></YellowBtn>    //원하는 곳에 작성
```
- 대문자로 작명 및 변수로 저장해서 원하는 곳에 가져다 쓸 수 있음

3. 만약 비슷한 컴포넌트 필요하면? props 문법 쓰기

```javaScript
  let YellowBtn = styled.button`
  background : ${ props => props.bg };  //yellowBtn 컴포넌트 갖다쓸 때 bg(작명)라는 props 사용 가능
	color : black;
	padding : 10px;
`
<YellowBtn bg=“blue”></YellowBtn>
```

    + 기존 스타일 복사 가능

```javaScript
  let NewBtn = styled.button(YellowBtn)`
  ~~~~~
`
```

-----------------------------

<h4>장점</h4>
1. css 파일 따로 가서 스타일 적용하지않고 js 파일에서 전부 해결가능

2. 스타일이 다른 js파일로 오염되지 않음
    - css 파일 사용하면서 오염 방지하려면 컴포넌트.module.css 로 css파일명 작명하면 됨
    - Ex) App.module.css 파일명으로 만들었다면 해당 css 는 App.js 파일에만 적용
  
3. 페이지 로딩시간 단축
    - 자동으로 <style></style>로 넣어줘서 페이지 로딩시간 향상

<h4>단점</h4>
1. js파일 매우 복잡해짐

2. 다른 파일에서 동일하게 사용하고 싶을 때 import 하면 되는데 그러면 css와 다를바가 없음

3. 협업시 css 담당의 숙련도 이슈 발생 가능성이 있음
