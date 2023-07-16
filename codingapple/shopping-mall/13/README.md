## 컴포넌트 전환 애니메이션

1. 애니메이션 동작 전 className 만들기
2. 애니메이션 동작 후 className 만들기
3. className에 transition 속성 추가
4. 필요할 때 2번 className 부착

-----------------------

1. css 설정
  
  ```javaScript
  .start{
    opacity:0;
  }
  .end{
    opacity:1;
    transition:opacity 1.5s;
  }
```

2. TabContent 에 div로 한번 묶어주고 className 줌

```javaScript
function TabContent({tab}){
    return <div className="start end">
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
}
```

3. 버튼 누르면 end className 부착되도록 코드 짜기(=tabstate가 변할때 end 부착)

```javaScript
useEffect(()=>{
    setFade('end')  //fade라는 state가 end로 변경
}, [tab])	//tab 변경될 때마다 안의 코드 실행
```

- 변수를 html 중간에 넣고싶을 땐 중괄호 사용

```html
  <div className={"start " + fade}>
```

또는 벡틱 사용

```html
  <div className={`start ${fade}`}>
```

4. end가 없는 상태에서 있다없다 해야되니까 cleanup function 사용

```javaScript
  return ()=>{
          setFade('') //fade state에 공백 넣기    
      }
```

5. end 부착하는 시점을 뒤로 미루기 -> setTimeout 사용

```javaScript
  setTimeout(()=>{.setFade('end') }, 100)
```

* 리액트 18버전 이상에서는 automatic batching 기능이 있어서 state 변경하는 함수들이 서로 근처에 있으면 합쳐서 state 변경 한번만 해줌 -> 해결하기 위해 setTimeout 추가
