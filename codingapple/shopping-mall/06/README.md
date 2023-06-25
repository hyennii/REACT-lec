## url파라미터로 상세페이지 100개 만들기

<h4>상세페이지 꾸미기</h4>

1. 상품명 넣기위해 app에 있는 컴포넌트 detail로 전송

```javaScript
  <Route path="/detail" element={<Detail shop={shop}/>}/>
```

2. detail.js에서 props 등록

```javaScript
  <h4 className="pt-5">{props.shop[0].title}</h4> // 데이터바인딩 하나씩 해나가기
```

------------------------------

<h4>url 파라미터</h4>
:페이지 여러개 만들고 싶으면 사용

```javaScript
  <Route path="/detail/:id”/>. //:id 를 url 파라미터라 함
```

- 각 url마다 다른 페이지를 보여주기 위해 detail.js에서 
  ```javaScript
      <h4 className="pt-5">{props.shop[현재url에 입력한 숫자].title}</h4> 
  ```
- 유저가 url파라미터에 입력한거 가져오려면 useParams 훅 사용
  ```javaScript
      let {id} = useParams(); 	//유저가 :id자리에 적은거 가져와줌
      <h4 className="pt-5">{props.shop[id].title}</h4>
  ```
- (참고)url 파라미터 만들 때 여러개 가능
  
    ex) /detail/:id/sdfsd/:dasd
