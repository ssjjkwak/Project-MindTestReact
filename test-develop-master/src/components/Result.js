import React from 'react';
import '../style/result.css'
import '../index.css';

const Result = props => {
  const resultRef = React.useRef();

  const goResult = () => {
    setTimeout(() => {
      resultRef.current.style.display = 'block';
      resultRef.current.style.animation =
        'going-up 0.5s, ' +
        'fade-in 0.5s forwards';
    }, 600);
  }

  React.useEffect(goResult, []);
  
  return (
    <section id='result' className='container' ref={resultRef}>
      <ScoreBox props={props} />
      <DescBox props={props} />
      <hr />
      <ShareBox props={props} />
    </section>
  );
}


const ScoreBox = ({ props }) => {
  return (
    <div id='score-box'>
      <div className='title'>
        {props.name} 님은...
      </div>
      <div className='point'>
        {props.score}점
      </div>
    </div>
  )
}


const DescBox = ({ props }) => {
  return (
    <div id='desc-box'>
      <div className='result title'>
        {props.result}
      </div>
      <div className='res desc'>
        {props.desc}
      </div>
    </div>
  )
}


const ShareBox = ({ props }) => {
  const url = 'https://mind-test-react.github.io/test/';

  const shareTw = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=나의 정신연령은... ${props.result}세 ${url}`,
      'twittersharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    return false;
  }

  const shareFb = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}&t=나의 정신연령테스트`,
      'facebooksharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    return false;
  }

  const shareNv = () => {
    window.open(
      `http://share.naver.com/web/shareView.nhn?url=${url}&title=나의 정신연령테스트`,
      'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    return false;
  }

  const shareBand = () => {
    window.open(
      `https://band.us/plugin/share?url=${url}&title=나의 정신연령테스트`,
      'naversharedialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    return false;
  }


  const copyLink = () => {
    const tmp = document.createElement('textarea');
    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
  }


  return (
    <>
      <p>친구들과 공유하기</p>
      <div className='hash'></div>
      <div id="share-box">
        <a onClick={shareTw} target='_blank'>
          <span className='tw'></span>
        </a>
        <a onClick={shareFb} target='_blank'>
          <span className='fb'></span>
        </a>
        <a onClick={shareNv} target='_blank'>
          <span className='nv'></span>
        </a>
        <a onClick={shareBand} target='_blank'>
          <span className='band'></span>
        </a>
      </div>
      <button onClick={copyLink} className='btn'>
        링크 복사하기
      </button>
    </>
  )
}

export default Result;