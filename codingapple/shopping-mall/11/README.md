## ajax

<h4>POST</h4>

- 서버로 데이터 전송

- 사용법
  
```javaScript
  axios.post(‘’, {name : ‘kim’})  //서버 url, 보낼 오브젝트
```

-------------------------------------

<h4>동시에 ajax 요청 여러개 하려면?</h4>

```javaScript
  Promise.all([ axios.get(‘url1’), axios.get(‘url2’) ])
  .then(()=>{
  
  })
```

--------------------------------------

- 원래는 서버와 문자만 주고받을 수 있으나, array나 object 데이터 주고받을 때 따옴표 사용하면 문자로 인식되어 주고받기 가능

```javaScript
  “{“name” : “Kim”}” //일명 JSON
```

--------------------------------------

<h4>fetch</h4>

- 라이브러리 없이 그냥 js기본 문법으로도 GET 요청 가능하지만

```javaScript
.then(결과 => 결과.json())
.then(data => {})
```

코드 붙여야 함. 

fetch는 json데이터 가져왔을 때 그대로 불러오기 때문에 해당 코드를 사용해 변환 필수
