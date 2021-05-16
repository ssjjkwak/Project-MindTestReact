import React, { useState } from 'react';
import {qnaList} from '../data.js';
import '../style/qna.css';
//props로 객체를 넘겨주거나 함수를 넘겨주거나

const scoreArray = new Array(10).fill(0);


const Qna = props => {
    const [scoreArr, setScoreArr] = React.useState(new Array(10).fill(0));
    const handleScoreArr = (idx, score) => {
      scoreArray[idx] = score;
      console.log(scoreArray);
      setScoreArr(Object.assign([], scoreArray));
    }

    const goNext = () => {
      if (scoreArr.indexOf(0) !== -1) {
        alert(`${scoreArr.indexOf(0) + 1}번 문항을 대답하지 않으셨어요!`)
        return false;
      }
      props.handleScore(scoreArr.reduce((a, x) => a += x));
      props.handleStage();
    }

    
    const ArrayData=qnaList.map(item => (
      <div className="qnaBox" key={item.id}>
        <p className="question">{item.q}</p>
        <div className="qna"><br/>
          <input 
            name={item.id} 
            type="radio" 
            // onClick={()=>props.handleScore(props.score+item.a[0].score)}
            onClick={() => handleScoreArr(item.id - 1, item.a[0].score)}
            className="answer-radio"  
          /><span className="answer">{item.a[0].answer}</span><br/>
          <input 
            name={item.id} 
            type="radio" 
            onClick={() => handleScoreArr(item.id - 1, item.a[1].score)}
            // onClick={()=>props.handleScore(props.score+item.a[1].score)}
            className="answer-radio"  
            /><span className="answer">{item.a[1].answer}</span><br/>
          <input 
            name={item.id} 
            type="radio" 
            onClick={() => handleScoreArr(item.id - 1, item.a[2].score)}
            // onClick={()=>props.handleScore(props.score+item.a[2].score)}
            className="answer-radio"  
            /><span className="answer">{item.a[2].answer}</span><br/>
          <input 
            name={item.id} 
            type="radio" 
            onClick={() => handleScoreArr(item.id - 1, item.a[3].score)}
            // onClick={()=>props.handleScore(props.score+item.a[3].score)}
            className="answer-radio"  
          /><span className="answer">{item.a[3].answer}</span><br/>
        </div>
      </div>
   )
);



   
  return (
    <div id="QNA">
      <h1 className="title">Q &#38; A</h1>
      {ArrayData}
      <button 
        className="go-next-btn"
        type="button" 
        onClick={goNext}> 
        결과 보기
      </button>
    </div>
  );
}


export default Qna;