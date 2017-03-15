import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NewComponent extends React.Component {
  render() {
    return (
      <div {...this.props}>
        {console.log("1 works")}
      </div>
    );
  }
}

class Input extends React.Component {
  render() {
    return (
      <input {...this.props}>
        Submit
      </input>
    );
  }
}

class Files extends React.Component {
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
        <input onClick={this.handleClick} />
          <div className="new-component">
            {this.state.clicked ? <NewComponent id="new-component-1"/> : null}
          </div>
      </div>
    );
  }
};


ReactDOM.render(
  <input />,
  document.getElementById("form-submit")
)
