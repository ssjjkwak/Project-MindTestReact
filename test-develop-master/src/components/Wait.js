import React from 'react';
import '../index.css';
import '../style/animation.css';
import '../style/wait.css';

const Wait = ({ handleStage }) => {
  const calcRef = React.useRef();
  // const calc = document.getElementById('calc');

  const end = () => {
    setTimeout(() => {
      calcRef.current.style.display = 'block';
      calcRef.current.style.animation =
        'going-up 0.5s forwards, ' +
        'fade-in 0.5s forwards';
    }, 700);
    setTimeout(() => {
      calcRef.current.style.animation = '';
      calcRef.current.style.animation =
        'going-left 0.4s forwards, ' +
        'fade-out 0.4s forwards';
      setTimeout(() => {
        calcRef.current.style.display = 'none';
        handleStage();
      }, 400);
    }, 9000);
  }

  React.useEffect(end, []);

  return (
    <section id="calc" ref={calcRef}>
      <div className="calc-bar">
        <div className="calc"></div>
        CALCULATING
      </div>
      <p className="wait">잠시 기다려주세요...</p>
    </section>
  );
}

export default Wait;