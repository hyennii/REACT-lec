## redux 설치 및 셋팅(장바구니 만들기)

장바구니 표 작업은 Cart 컴포넌트 만들어서 진행(디자인-부트스트랩)

- 장바구니 데이터 바인딩
  
  -  장바구니 state가 여러 컴포넌트에서 필요하면 어디에 만들어야 할까?
    
      -> 가장 최상위 부모 컴포넌트에 만들면 됨(자식으로 전송되기 때문). props 쓰기 귀찮을 때 쓰는 라이브러리가 redux

  - redux 사용하면 컴포넌트들이 props 없이 state 공유 가능
  - redux 설치하면 js파일을 하나 만들어서 거기에 state들 모두 보관 가능하며, 모든 컴포넌트들이 거기에 있던 state들을 빼서 쓸 수 있음
 
---------------------------------

<h4>설치</h4>

터미널에 npm install @reduxjs/toolkit react-redux 입력

----------------------------------

<h4>셋팅</h4>

1. store.js 파일 생성, 하단 코드 복붙

```javaScript
import {configureStore} from '@reduxJs/toolit'

export default configureStore({
    reducer: {
        
    }
})
```

2. index.js가서 <Provider store={store}> 쓰기 (=store를 쓰겠다는 선언 해주기)
