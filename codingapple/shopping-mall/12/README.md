## 탭 ui 만들기

1. Html css로 미리 디자인(부트스트랩 사용)

```javaScript
  <Nav variant="tabs"  defaultActiveKey="link0">
      <Nav.Item>
      <Nav.Link eventKey="link0">버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link1">버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link2">버튼2</Nav.Link>
      </Nav.Item>
  </Nav>
```
  - 버튼마다 있는 eventKey 는 자유롭게 작명(각 다른 이름)
     
  - defaultActiveKey 는 기본으로 눌려있을 버튼(디폴트)

<br>

2. 탭 상태 저장해둘 state 필요

```javaScript
  let [tab, tabstate] = useState(0)	//0번 내용 보여주기
```

<br>

3. state에 따라서 ui가 어떻게 보일지 작성(대부분 조건문 사용)

```javaScript
  {
	tab == 0 ? <div>내용0</div> : null
  }
  {
  	tab == 1 ? <div>내용1</div> : null
  }
```
처럼 삼항연산자는 괄호에 하나씩 사용 가능하므로 if 조건문 쓰는게 좋음

-----------------------------
  
```javaScript
  If (tab == 0) {
  	<div>내용0</div>
  } else if(tab == 1) {
  	<div>내용1</div>
  } else if(tab == 2) {
  	<div>내용2</div>
  }
```
- If 조건문 : html 안에선 사용 불가이므로 밖에 빼서 작성

```javaScript
<TabContent tab={tab}/>

function TabContent(props){
	If (props.tab == 0) {
		return <div>내용0</div>	//component는 return 필수
	} else if(props.tab == 1) {	//부모 component에 있던 tab을 자식에게 쓰기위해 props
		return <div>내용1</div>
	} else if(props.tab == 2) {
		return <div>내용2</div>
	}
}
```
- 밖으로 빼낸 if문을 html 안에 넣고 싶을 때 component로 만들어서 html안에 넣기

----------------------------
  
```javaScript
  let [tab, tabstate] = useState(0)  //탭 ui 조작 스위치 완성
```
```javaScript
  onClick={()=>{tabstate(1)}} 
```
- 탭버튼 누르면 그에 맞는 내용 보이게 하기 위해 onClick 작성

----------------------------

* 팁1. Props. ~~가 귀찮으면 props이름을 {열고 넣어주기}

```javaScript
function TabContent({tab}){
  If (tab== 0) {
    return <div>내용0</div>
  }
}
```

* 팁2. if말고 array로도 가능할 듯

```javaScript
Return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]  //왼쪽에 있는 자료에서 자료 꺼내기(tab state 넣으면 tab state가 0이면 0 나오고, 1이면 1 나옴)
```
