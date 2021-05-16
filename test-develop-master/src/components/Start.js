import { render } from '@testing-library/react';
import React, { Component } from 'react';

class Start extends Component {
  
  state = {
    name: '',
    
  }
  
  appChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  
  appClick = () => {
    if (!this.state.name) {
      alert('이름을 입력해주세요!');
      return false;
    }

    console.log(`이름:${this.state.name}`);
    this.props.handleName(this.state.name);

    this.props.disappearFunc();

    const start = document.getElementById('start');
    start.style.animation =
    'going-up 0.4s ease-in-out forwards, ' +
    'fade-out 0.4s ease-in-out forwards';

    setTimeout(this.props.handleStage, 500);

  }
  render() {
    const { name } = this.state;
    const { appChange, appClick } = this;
    return (
      <div id="start" className="container">
        <header>
          <div id="title-box">
            <h1 className="title">
              {this.props.title}
            </h1>
          </div>
          <hr className="w-line" />
          <p className="w-line">
            {this.props.sub}
          </p>
          <hr className="w-line" />
          <div id="name-input">
            <input type="text" placeholder="아이디" value={name} onChange={appChange} />
          </div>
          <h3>이름을 입력하고 시작을 해주세요.</h3>
          <div className="start-wrap">
            <button className="start" onClick={appClick}>
              시작하기
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default Start;