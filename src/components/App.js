import React, { Component } from 'react';
// import $ from '../../jquery';
import ReactDOM from 'react-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
          <h1 className="header">Append Here</h1>
      </div>




    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
