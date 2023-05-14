function App() {

  let post = 'REACT BLOG';
  let [a, 글제목변경] = useState(['연남동 카페 추천','한남동 카페 추천','성수동 카페 추천']);
  let [good, good변경] = useState(0);
  let [숙제, 문구변경] = useState('추가');


  return (
    <div className="App">
      <div className="sky-nav">
        <h4>{post}</h4>
      </div>

      <button onClick={()=>{
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
        <h4>{a[0]} <span onClick={()=>{good변경(good+1)}}>👍🏻</span> {good} 
        </h4>
        <p>5월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{a[1]} <span onClick={()=>{문구변경('완료')}}>⭐️ 즐겨찾기</span>{숙제}
        </h4>
        <p>5월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{a[2]}</h4>
        <p>5월 8일 발행</p>
      </div>

      <Modal></Modal>

    </div>
  );
}

function Modal(){
  return(
    <div class="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}
