## map()

반복문으로 같은 html 반복생성하기

<h4>map() 사용법</h4>

 - 모든 array 자료 뒤에 붙일 수 있음

```javaScript
  [1,2,3].map(function(a){
	return ‘1233211’
  })
```

1. array 자료 갯수만큼 함수 안의 코드 실행해줌
2. 함수의 파라미터는 array 안에 있던 자료임
3. return에 뭐 적으면 array로 담아줌

* {}안에선 for반복문 사용 불가로 map 함수 사용

실제 블로그 글 갯수만큼 html 생성하고 싶을 땐 해당 state 가져올 수 있음

-> [1,2,3] 이런식으로는 한계가 있으므로, 다음 방법 사용 가능

```javaScript
  {
        a.map(function(a){		//파라미터 작명
          return (<div className="list">
        <h4>{a}</h4>	//데이터바인딩
        <p>5월 8일 발행</p>
      </div>)
        })
      }

```

참고로, 다음 방법 사용 가능

```javaScript
  {
        a.map(function(a, i){		//파라미터 추가작명 : 반복문 돌 때마다 1씩 증가하는 정수
          return (<div className="list">
        <h4>{a[i]}</h4>	//데이터바인딩
        <p>5월 8일 발행</p>
      </div>)
        })
      }

```

- 또한 반복문 쓰면 콘솔에러 나는데, 해당 map return 안에 key=“작명” 넣어주면 됨
(반복 생성한 ui마다 각각 다른 key값 가지도록)

```javaScript
  {
        a.map(function(a, i){
          return (<div className="list" key={i}>
        <h4>{a} <span onClick={()=>{good변경(good+1)}}>👍🏻</span> {good}
        </h4>
        <p>5월 8일 발행</p>
      </div>)
        })
      }
```

-------------------------

*<h4>숙제</h4>*
좋아요 갯수 개별로 기록하기

```javaScript
  let [good, good변경] = useState([0,0,0]);

{
        a.map(function(a, i){
          return (<div className="list" key={i}>
        <h4>{a} <span onClick={()=>{
          let copy = [...good];
          copy[i] = copy[i] + 1;
          good변경(copy)
          }}>👍🏻</span> {good[i]}
        </h4>
        <p>5월 8일 발행</p>
      </div>)
        })
      }
```
