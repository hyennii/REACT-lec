## Context API

single page application의 단점 : 컴포넌트간 state 공유 어려움(부모자식 관계면 props 전송으로 공유 가능하나, 부모 안에 자식 안에 자식 있는 등의 중첩된 경우 한번에 뛰어넘어서 props 전송이 불가)
  -> 그럴 때, context api(리액트 기본문법) 사용하거나 redux 등 외부 라이브러리 설치하여 사용할 수 있음

------------------------

<h4>셋팅</h4>

1. createContext() import 하기 (=context를 만들어준다는 것. context는 보관함)

 ```javaScript
import { useState, createContext } from "react";

let Context1 = createContext()
 ```

2. <Context>로 원하는 컴포넌트 감싸기

 ```javaScript
<Route path="/detail/:id" element={
    <Context1.Provider>
      <Detail shop={shop}/>
    </Context1.Provider>
  }/>
```

3. value 열어서 공유 원하는 state 넣기

```javaScript
<Route path="/detail/:id" element={
    <Context1.Provider value={{재고, shop}}>
      <Detail shop={shop}/>
    </Context1.Provider>
  }/>
```

---------------------

<h4>context 안의 state 사용</h4>

1. Context를 import 및 export

```javaScript
import {Context1} from './../App.js'
```

2. useContext(Context)

```javaScript
import React, { useEffect, useState, useContext } from "react";

let {재고} = useContext(Context1)    //보관함 해체해주는 함수
```

3. 원하는 곳에서 사용

------------------------

<h4>Context api 특징</h4>

1. state 변경시 쓸데없는 것까지 재렌더링 -> 사이즈가 큰 사이트면 성능 이슈 생길 수 있음
2. 다른 페이지에서 import해서 컴포넌트 재사용하려면 오류 날 수 있음(관리가 힘들어짐) -> 실제로는 외부 라이브러리를 더 많이 사용함
