## ajax

1. 개념설명

- 서버 : 부탁하면 진짜로 들어주는 프로그램
  
- 서버에 데이터를 요청할 때는 정확한 규격에 맞춰 요청해야 함
   
    1. 어떤 데이터인지 (URL 형식으로)
    2. 어떤 방법으로 요청할지 (GET or POST)
 
- 보통 데이터 가져올 때 GET, 데이터를 보낼 때 POST 선택
- url은 서버 개발자에게 물어보면 됨
- 브라우저 자체가 GET 요청하는 곳임. (url창에 넣으면 보내줌)
그냥 ~~.json 형식처럼 작성해도 가능하지만 ajax 사용해도 GET 요청 가능
  * ajax 사용하면 새로고침 없이도 GET/POST 요청 가능
 
-----------------------------

2. 방법(버튼 누르면 ajax 요청하기)

- Ajax 쓰려면 옵션 3개 중 택1

  1. XMLHttpRequest - 예전 js문법
  2. fetch() - 요즘 js문법
  3. axios - 외부 라이브러리(많이 사용)

 <h4>axios 사용하기</h4>
1. 터미널에 npm install axios 입력 후 다시 npm start

2. 상단에 import axios from ‘axios’ 추가
   
3.    
```javaScript
  <button onClick={()=>{
        axios.get(‘url’)
      }}>버튼</button>
```
* 요청 결과는 axios.get(‘url’).then()

* 만약 ajax 요청 실패할 경우?
```javaScript
  .catch(()=>{
  	실패했을 때 실행할 코드
  })
```

<h4>정리</h4>

```javaScript
import axios from 'axios'

    <button onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((결과)=>{
          console.log(결과.data)
        })
        .catch(()=>{
          console.log('실패함ㅅㄱ')
        })
      }}>버튼</button>
```
