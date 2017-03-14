import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Files from './components/Files';
import RenderTest from './components/RenderTest'
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Files/>,
  document.getElementById('main')
);

ReactDOM.render(
  <RenderTest/>,
  document.getElementById('testing')
);
