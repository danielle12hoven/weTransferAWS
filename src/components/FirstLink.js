import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Files from './Files'

class NewComponent extends React.Component {
  render() {
    return (
      <div {...this.props}>
        {console.log("1 works")}
        <div className="move">
        Lorum ispum
        </div>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button {...this.props}>
        Link 1
      </button>
    );
  }
}

class LinkOne extends React.Component {
  constructor() {
    super();

    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} />
          <div className="new-component">
            {this.state.clicked ? <NewComponent id="new-component-1"/> : null}
          </div>
      </div>
    );
  }
};


ReactDOM.render(
  <LinkOne />,
  document.getElementById('firstDiv')
);
