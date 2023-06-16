## 글 목록 대충 만들기

  *return()안에 코드 짜야하는데, 병렬로 태그 2개 이상 기입 금지
  
<h4>state 만드는 법</h4>
- 자료 잠깐 저장할 때 let, var 등 변수 쓸 수 있지만 state 써도 됨<br>
- useState 엔터치면 import { useState } from 'react'; 자동 작성됨<br>
- useState 문법 사용하고 싶을 때, let [a,b] 왼쪽에 붙여서 자료 뽑으면 됨

```javaScript
  let [a, b] = useState('여자 상의 추천');   //a,b 작명 가능
```
  - a : state에 보관했던 자료 출력
  ```javaScript
  <h4>{a}</h4>
  ```
  - b : state 변경 도와주는 함수

-------------------------------

<h4>destructuring 문법</h4>
 : array 문법에서 let num = [1,2]; 라고 가정했을 때, <br>
   let [a,c] = [1,2]; 처럼 왼쪽과 오른쪽을 같게 작성하는 문법
   
-------------------------------
   
<h4>변수가 있는데 왜 state를 써야하는지?</h4>
 : 일반 변수가 갑자기 변경되면 html에 자동으로 반영 안되지만, state 쓰던 html은 자동 재렌더링되기 때문
 
--------------------------------

*<h4>숙제</h4>*
state를 이용해 블로그 목록 3개 만들기

```javaScript
function App() {

  let post = 'REACT BLOG';
  let [a, b] = useState(['연남동 카페 추천','한남동 카페 추천','성수동 카페 추천']);


  return (
    <div className="App">
      <div className="sky-nav">
        <h4>{post}</h4>
      </div>
      <div className="list">
        <h4>{a[0]}</h4>
        <p>5월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{a[1]}</h4>
        <p>5월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{a[2]}</h4>
        <p>5월 8일 발행</p>
      </div>
    </div>
  );
}
```
