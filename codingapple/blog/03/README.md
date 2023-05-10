## 좋아요 버튼 & 갯수 UI 만들기

<h4>state 변경하기</h4>

- state는 등호로 변경 금지

```javaScript
    let [good, good변경] = useState(0); //'good변경' 자리가 state 변경용 함수
```

```javaScript
  onClick={()=>{good변경()}}  //state 변경함수(새로운 state)
```

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
