## 좋아요 버튼 & 갯수 UI 만들기

*<h4>터미널 내 warning 메세지 없애기</h4>*

: /* eslint-disable */ 작성 기준의 하단 코드에서 노출되는 warning 메세지 제거가능

-----------------------

<h4>state 변경하기</h4>

- state는 등호로 변경 금지

```javaScript
    let [good, good변경] = useState(0); //'good변경' 자리가 state 변경용 함수
```

```javaScript
  onClick={()=>{good변경()}}  //state 변경함수(새로운 state 값)
```

* state 변경 써야 html 재렌더링 잘됨

------------------

<h4>onClick</h4>

- onClick={} 안에 함수 만들 때, 줄여서 ()=>{} 로 작성해도 됨

------------------

<h4>버튼&갯수</h4>

- 좋아요 갯수는 state로 만드는걸 추천

1. state 선언

```javaScript
  let [good, good변경] = useState(0);
```

2. 버튼 누를때마다 숫자 +1 되도록 onClick 사용

```javaScript
  <span onClick={()=>{good변경(good+1)}}>👍🏻</span>
```

-------------------

*<h4>숙제</h4>*
아무 버튼 만들어서 버튼 누르면 추천글이 바뀌도록 기능 만들기
```javaScript
function App() {

  let post = 'REACT BLOG';
  let [a, b] = useState(['연남동 카페 추천','한남동 카페 추천','성수동 카페 추천']);
  let [good, good변경] = useState(0);
  let [숙제, 문구변경] = useState('추가');

  return (
    <div className="App">
      <div className="sky-nav">
        <h4>{post}</h4>
      </div>
      <div className="list">
        <h4>{a[0]} <span onClick={()=>{good변경(good+1)}}>👍🏻</span> {good} 
        </h4>
        <p>5월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{a[1]} <span onClick={()=>{문구변경('완료')}}>⭐️ 즐겨찾기</span>{숙제}
        </h4>
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
