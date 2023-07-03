## useEffect에 넣을 수 있는 실행조건

```javaScript
  useEffect(()=>{ 실행할코드 }, [count])
```

useEffect()의 둘째 파라미터로 [] 넣을 수 있고, 거기에 변수나 state 넣을 수 있음.

-> []에 있는 것들이 변할 때만 useEffect 안의 코드 실행

* []안에 여러 state 작성 가능

------------------------

```javaScript
  useEffect(()=>{ 실행할코드 }, []) 
```
아무것도 안넣으면 컴포넌트 mount시 1회 실행하고 안함

------------------------

```javaScript
return ()=>{}
```
useEffect 동작 전에 실행

```javaScript
  useEffect(()=>{
    setTimeout(()=>{ setAlert(false) }, 2000)
    
    Return ()=>{
	//여기 먼저 실행 (별명:clean up function)
	}
  }, [])
```
* Clean up function은 mount시 실행 x, unmount시 실행됨

----------------------
<h4>정리</h4>

1. 재랜더링마다 코드 실행하고 싶으면 useEffect(()=>{ })
2. mount시 1회 코드 실행하고 싶으면 useEffect(()=>{ }, [])
3. unmount시 1회 코드 실행하고 싶으면 
```javaScript
  useEffect(()=>{
  	return ()=>{
  	}
  }, [])
```
4. useEffect 실행 전에 뭔가 실행하려면 언제나 return ()=>{}
5. 특정 state 변경시에만 실행하려면 useEffect(()=>{ }, [count])
