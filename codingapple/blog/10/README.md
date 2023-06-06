## class를 이용한 옛날 react

- function이 아닌 class 문법으로 컴포넌트 만들었음

```javaScript
  class Modal2 extends React.Component {
    constructor(){
      super();
      this.state = {
        name : ‘Kim’,
        age : 20
      }
    }
    render(){
      return (
        <div>안녕 {this.state.name}</div>
      )
    }
  }
```

- 여기서 class는 변수, 함수 보관함임
- constructor, super, render 무조건 채워넣어야 함(일종의 템플릿)
- return 안의 긴 함수를 Modal2로 축약
- class 컴포넌트에서 state 만들려면 constructor 안에 state 저장
