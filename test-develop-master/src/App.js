import React from 'react';
import './App.css';
import './index.css';
import './style/reset.css';
import './style/animation.css';
import './style/header+footer.css';

import { infoList } from './data';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Start from './Components/Start';
import Qna from './Components/Qna';
import Wait from './Components/Wait';
import Result from './Components/Result';


const App = () => {
  const [score,setScore] = React.useState(0);
  const handleScore = score => setScore(score);

  React.useEffect(() => calcResult(score), [score]);

  const [stage, setStage] = React.useState(0);
  const handleStage = () => {
    setStage(stage + 1);

    if (stage === 2) {
      showHeaderFooter();
    }
  }

  const [name, setName] = React.useState('');
  const handleName = name => setName(name);

  const [result, setResult] = React.useState('');
  const [desc, setDesc] = React.useState('');

  const header = document.getElementById('header');
  const footer = document.getElementById('footer');

  const disappearHeaderFooter = () => {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
  
    header.style.animation =
      'going-up 0.4s forwards, ' +
      'fade-out 0.4s forwards';
    footer.style.animation =
      'going-down 0.4s forwards, ' +
      'fade-out 0.4s forwards';
    setTimeout(() => {
      header.style.display = 'none';
      footer.style.display = 'none';
    }, 1000);
  }

  const [darkModeFlag, setDarkModeFlag] = React.useState(false);

  const head = document.getElementsByTagName('head')[0];
  const dark_css = document.createElement('link');
  dark_css["rel"] = 'stylesheet';
  dark_css["type"] = 'text/css';
  dark_css["href"] = 'style/darkmode.css';

  const goDark = () => {
    setDarkModeFlag(true);
    head.appendChild(dark_css);
  }
  const goLight = () => {
    setDarkModeFlag(false);
    if (head.lastChild.rel === 'stylesheet')
      head.removeChild(head.lastChild);
  }


  const handleDarkMode = () =>
    (window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? goDark() : goLight();
  const switchMode = () => darkModeFlag ? goLight() : goDark();
  
  React.useEffect(() => handleDarkMode(), []);


  const showHeaderFooter = () => {
    console.log('show');

    setTimeout(() => {  
      header.style = '';
      header.style.display = 'block';
      footer.style.display = 'block';
      header.style.animation =
        'fade-in 0.3s forwards';
      footer.style.animation =
        'fade-in 0.3s forwards';
    }, 600);
  }

  const calcResult = score => {
    console.log('calc');

    if (score < 15) {
      setResult(infoList[5].name);
      setDesc(infoList[5].desc);
    } else if (score < 20) {
      setResult(infoList[4].name);
      setDesc(infoList[4].desc);
    } else if (score < 25) {
      setResult(infoList[3].name);
      setDesc(infoList[3].desc);
    } else if (score < 30) {
      setResult(infoList[2].name);
      setDesc(infoList[2].desc);
    } else if (score < 35) {
      setResult(infoList[1].name);
      setDesc(infoList[1].desc);
    } else {
      setResult(infoList[0].name);
      setDesc(infoList[0].desc);
    }
  }


  const switchComponent = num => {
    switch(num) {
      // 필요한 props 내려보내기
      case 0: return <Start 
        title='정신연령 테스트' 
        sub='나의 정신연령을 ARABOZA'
        handleStage={handleStage}
        handleName={handleName}
        disappearFunc={disappearHeaderFooter}
      />;
      case 1: return <Qna
        score={score}
        handleScore={handleScore}
        handleStage={handleStage}
      />;
      case 2: return <Wait 
        handleStage={handleStage}  
      />;
      case 3: return <Result 
        name={name} 
        score={score}
        result={result}
        desc={desc}
      />;
      default: return (
        <>
          Something wrong...
        </>
      )
    }
  };


  return (
    <>
      <Header 
        handleMode={switchMode} 
        flag={darkModeFlag} 
      />
      {switchComponent(stage)}
      <Footer />
    </>
  );
}

export default App;
