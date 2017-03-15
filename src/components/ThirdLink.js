import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class NewComponent extends React.Component {
  render() {
    return (
      <div {...this.props}>
        {console.log("3 works")}
         <div className="move">
          Our third file!
          </div>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button{...this.props}>
        Link 3
      </button>
    );
  }
}

class LinkThree extends React.Component {
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
            {this.state.clicked ? <NewComponent id="new-component-3"/> : null}
          </div>
      </div>
    );
  }
};


ReactDOM.render(
  <LinkThree />,
  document.getElementById('thirdDiv')
);

