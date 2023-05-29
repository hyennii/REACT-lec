function App() {

  let post = 'REACT BLOG';
  let [a, 글제목변경] = useState(['연남동 카페 추천','한남동 카페 추천','성수동 카페 추천']);
  let [good, good변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(1);
  let [입력값, 입력값변경] = useState('');


  return (
    <div className="App">
      <div className="sky-nav">
        <h4>{post}</h4>
      </div>

      {/* <button onClick={()=>{
        let copy = [...a];
        copy.sort();
        글제목변경(copy);
      }}>
        가나다순 정렬
      </button>

      <button onClick={()=>{
        let copy = [...a];
        copy[0] = '강남 카페 추천';
        글제목변경(copy);
      }}>글수정</button>

      <div className="list">
        <h4 >{a[0]} <span onClick={()=>{good변경(good+1)}}>👍🏻</span> {good} 
        </h4>
        <p>5월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{a[1]} <span onClick={()=>{문구변경('완료')}}>⭐️ 즐겨찾기</span>{숙제}
        </h4>
        <p>5월 8일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{a[2]}</h4>
        <p>5월 8일 발행</p>
      </div> */}

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

      <input onChange={(e)=>{입력값변경(e.target.value);}}></input>
      <button onClick={()=>{
        let copy=[...a];
        copy.unshift(입력값);
        글제목변경(copy)
      }}>글발행</button>

      {
        modal == true ? <Modal title={title} cafe={a}></Modal> : null
      }

    </div>
  );
}

function Modal(props){
  return(
    <div class="modal">
        <h4>{ props.cafe[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}
