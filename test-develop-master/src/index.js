import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import './style/animation.css';
import './style/darkmode.css';
import './style/header+footer.css';
import './style/qna.css';
import './style/reset.css';
import './style/result.css';
import './style/start.css';
import './style/wait.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('wrap')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
