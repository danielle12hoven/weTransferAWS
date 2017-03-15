import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class NewComponent extends React.Component {
  render() {
    return (
      <div {...this.props}>
      {console.log("5 works")}
        <div className="move">
        Number five
        </div>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button{...this.props}>
        Link 5
      </button>
    );
  }
}

class LinkFive extends React.Component {
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
            {this.state.clicked ? <NewComponent id="new-component-5"/> : null}
          </div>
      </div>
    );
  }
};


ReactDOM.render(
  <LinkFive />,
  document.getElementById('fifthDiv')
);
