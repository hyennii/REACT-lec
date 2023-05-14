## 제목 누르면 모달창 노출되도록

<h4>동적인 ui 만드는 step</h4>

1. html, css로 미리 디자인 완성
2. ui의 현재 상태를 state로 저장

```javaScript
  let [modal, setModal] = useState(false);   // 상태 등 아무렇게나 작명 가능
```

3. state에 따라 ui가 어떻게 보일지 조건문 등으로 작성

- html 에서는 if와 같은 조건문을 쓸 수 없기 때문에 대신 삼항연산자(ternary operator) 사용 
- 삼항연산자 : {조건식 ? 참일 때 실행할 코드 : 거짓일 때 실행할 코드}

```javaScript
  {
        modal == true ? <Modal><Modal/> : null   //null : 비어있는 html용으로 자주 사용  
      }
```

-------------------

*<h4>숙제</h4>*
제목 한번 더 누르면 모달창 사라지게 하기

```javaScript
  <h4 onClick={()=>{setModal(!modal)}}>{a[2]}</h4>
```
