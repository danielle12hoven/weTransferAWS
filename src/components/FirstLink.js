import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class NewComponent extends React.Component {
  render() {
    return (
      <div {...this.props}>
        Lorum ispum
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button id="button-1" {...this.props}>
        Link1
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
  document.getElementById('root')
);

