function App() {

  let post = 'REACT BLOG';
  let [a, b] = useState(['연남동 카페 추천','한남동 카페 추천','성수동 카페 추천']);
  let [good, good변경] = useState(0);


  return (
    <div className="App">
      <div className="sky-nav">
        <h4>{post}</h4>
      </div>
      <div className="list">
        <h4>{a[0]} <span onClick={()=>{good변경(good+1)}}>👍🏻</span> {good} </h4>
        <p>5월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{a[1]}</h4>
        <p>5월 8일 발행</p>
      </div>
      <div className="list">
        <h4>{a[2]}</h4>
        <p>5월 8일 발행</p>
      </div>
    </div>
  );
}
