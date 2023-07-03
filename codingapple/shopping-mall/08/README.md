## Lifecycle hook

컴포넌트가 페이지에 보이는 순간 ‘mount 된다’, ‘장착된다’ 라고 하며, 가끔 업데이트도 되고, 컴포넌트가 쓸모없어지면 제거된다는 생명 주기가 있는데 이를 lifecycle이라 함 (사람에 비유)

1. 페이지에 장착(mount)
2. 업데이트(update) (재랜더링을 뜻함)
3. 제거(unmount)
   
 이 모든 것에 중간중간 코드 실행 가능(간섭). 그러기 위해 lifecycle 배움

-------------------------------

 <h4>Lifecycle hook 다는 법</h4>
 - 옛날 방식

```javaScript
  class Detail2 extends React.Component { 
    componentDidMount(){
	//컴포넌트 mount 시 여기 코드 실행
    }
    componentDidUpdate(){
	//컴포넌트 update 시 여기 코드 실행
    }
    componentWillUnmount(){
	//컴포넌트 unmount 시 여기 코드 실행
    }
}		
```

- 요즘 방식

  : Function 안에 useEffect 훅 사용(import 해와야함)

```javaScript
  import {useEffect} from "react";

  useEffect(()=>{
        // mount, update시 여기 코드 실행
    })
```

------------------------------

<h4>useEffect 쓰는 이유</h4>
: useEffect 안에 있는 코드는 html 랜더링 된 후 동작함(유저에게 좀 더 빨리 ui 노출)

- useEffect 안에 적는 코드들은

  - 어려운 연산
  - 서버에서 데이터 가져오는 작업
  - 타이머 장착하는거
 
<h4>이름이 Effect인 이유</h4>
:프로그래밍할 때 쓰는 용어 중 하나가 Side Effect. 이는 함수의 핵심기능과 상관없는 부가기능인데, 여기서 따온 함수명임

-------------------------------

*<h4>숙제</h4>*
Detail 페이지 방문 후 2초 지나면 div 숨기기
```javaScript
  function Detail(){

  let [alert, setAlert] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{ setAlert(false) }, 2000)
  })

  return (
  {
    alert == true
    ? <div className="alert alert-warning">
        2초이내 구매시 할인
      </div>
    : null
  }
  )
}
```
