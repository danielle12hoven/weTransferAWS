import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class NewComponent extends React.Component {
  render() {
    return (
      <div {...this.props}>
      {console.log("6 works")}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum aliquet est, et faucibus nunc gravida eget. Vivamus id libero et est mattis blandit. Duis sit amet maximus quam. Vestibulum ante risus, pretium et metus id, tincidunt tempus metus. Etiam vulputate aliquet vulputate. Duis quis enim ligula. Quisque et dapibus elit. Donec non fringilla sem. Aliquam condimentum, lorem mattis porttitor tristique, diam magna suscipit libero, id vulputate nunc nibh ac sem. Aliquam quis hendrerit est. Ut tristique eros et mi egestas, at efficitur justo accumsan. Ut sed facilisis mauris, sed malesuada diam. Nunc consequat, neque at ornare interdum, elit metus mollis massa, vel convallis tortor nulla ut diam. Donec non sem ante. Vivamus sagittis dui aliquet, tristique quam a, congue turpis. Proin posuere, elit eget malesuada imperdiet, purus ante vehicula neque, eu pharetra mauris magna vel mi.Etiam accumsan, augue ut volutpat sodales, neque augue varius erat, ut consequat lacus nibh vitae libero. Nunc a rutrum lectus. Donec imperdiet congue nisi, ut porttitor mi sodales in. Sed vulputate ipsum ac porttitor egestas. Pellentesque eu accumsan libero, id vehicula leo. Donec hendrerit dui est, vitae vulputate sem porttitor eu. Sed sed elit sed ex condimentum pharetra ac lacinia neque. Ut at ornare nibh. Pellentesque eget urna est. Curabitur tincidunt a libero vel mollis.
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button{...this.props}>
        Link 6
      </button>
    );
  }
}

class LinkSix extends React.Component {
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
  <LinkSix />,
  document.getElementById('sixthDiv')
);
