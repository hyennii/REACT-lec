## input 글 발행

1. <input>에 뭔가 입력시 코드 실행하고 싶으면 onChange/onInput 사용

```javaScript
  <input onChange={()=>{}}</input>
```

2. 유저가 입력한 값 그대로 출력 : e.target.value 사용

```javaScript
  <input onChange={(e)->{console.log(e.target.value)}}></input>
```

* 유저가 입력한 값 저장할 땐 state 만들어서 저장

```javaScript
    let [입력값, 입력값변경] = useState('');

    <input onChange={(e)=>{입력값변경(e.target.value);}}></input>
```

------------------------

*<h4>숙제</h4>*

1) input에 뭐 입력하고 발행버튼 누르면 블로그에 글이 하나 추가되는 기능

```javaScript
    let [입력값, 입력값변경] = useState('');

    <input onChange={(e)=>{입력값변경(e.target.value);}}></input>
    <button onClick={()=>{
      let copy = [...a];
      copy.unshift(입력값); //배열 형태의 객체 시작점에 주어진 값을 삽입
      글제목변경(copy)
    }}>글발행</button>
```

2) 글마다 옆에 삭제버튼 하나씩 만들어놓고 누르면 글이 없어지는 기능

```javaScript
  {
    a.map(function(c, i){
      return (
      <div className="list" key={i}>
        <h4 onClick={()=>{setModal(true); setTitle(i)}}>
          {a[i]} 
        <span onClick={()=>{good변경(good+1)}}>👍🏻</span> {good}
        </h4>
        <p>5월 8일 발행</p>
        <button onClick={()=>{
          let copy = [...a];
          copy.splice(i, 1);  //기존 요소를 삭제하거나 교체하여 배열의 내용을 변경
          글제목변경(copy);
        }}>삭제</button>
      </div>)
    })
  }
```
