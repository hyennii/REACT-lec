## props

부모가 가지고 있는 state를 자식이 가져다 쓸 수 있으며, 이때 props 문법 사용
* 자식에서 부모한테 전송 불가. 무조건 부모에서 자식으로만 가능함

<br>

<h4>모달창 안에 첫째 글 제목 넣어보기</h4>

1. <자식컴포넌트 작명={state이름}>
2. 부모 컴포넌트에 props 파라미터 등록 후 props.작명 사용

```javaScript
    {
        modal == true ? <Modal cafe={a}></Modal> : null
      }
      
  function Modal(props){
  return(
    <div class="modal">
        <h4>{props.cafe}</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}
```

----------------------

<h4>다양한 색의 모달창이 필요할 때, style에 props 사용 가능</h4>

```javaScript
    {
        modal == true ? <Modal color={'lightpink'} cafe={a}></Modal> : null
      }
      
  function Modal(props){
  return(
    <div class="modal" style={{background:props.color}}>
        <h4>{props.cafe[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}
```

---------------------

*<h4>숙제</h4>*
글수정 버튼 누르면 첫 글제목이 '라떼맛집'으로 바뀌도록 (props 사용)
