import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class NewComponent extends React.Component {
  render() {
    return (
      <div {...this.props}>
        {console.log("2 works")}
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non bibendum magna. Nam tempus est viverra magna malesuada, non scelerisque ligula maximus. Sed interdum at enim at vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet dui ut orci laoreet, quis pellentesque ipsum congue. Mauris auctor velit sit amet porta congue. Suspendisse vitae rhoncus metus, quis faucibus leo.

      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button {...this.props}>
        Link 2
      </button>
    );
  }
}

class LinkTwo extends React.Component {
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
            {this.state.clicked ? <NewComponent  id="new-component-2"/> : null}
          </div>
     </div>
    );
  }
};


ReactDOM.render(
  <LinkTwo />,
  document.getElementById('secondDiv')
);
