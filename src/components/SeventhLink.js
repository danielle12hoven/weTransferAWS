import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class NewComponent extends React.Component {
  render() {
    return (
      <div {...this.props}>
      {console.log("7 works")}
        Lucky number 7
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button{...this.props}>
        Link 7
      </button>
    );
  }
}

class LinkSeven extends React.Component {
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
            {this.state.clicked ? <NewComponent id="new-component-4"/> : null}
          </div>
      </div>
    );
  }
};


ReactDOM.render(
  <LinkSeven />,
  document.getElementById('seventhDiv')
);
