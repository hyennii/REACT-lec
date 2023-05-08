import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 맛집';
  let [a, b] = useState('여자 상의 추천');

  return (
    <div className="App">
      <div className="sky-nav">
        <h4>{post}</h4>
      </div>
      <div className="list">
        <h4>{a}</h4>
        <p>5월 8일 발행</p>
      </div>
      
    </div>
  );
}

export default App;
