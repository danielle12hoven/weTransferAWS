import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';

// var links = [
//          "https://s3.eu-central-1.amazonaws.com/wt-story/1.txt",
//          "https://s3.eu-central-1.amazonaws.com/wt-story/2.txt",
//          "https://s3.eu-central-1.amazonaws.com/wt-story/3.txt",
//          "https://s3.eu-central-1.amazonaws.com/wt-story/4.txt",
//          "https://s3.eu-central-1.amazonaws.com/wt-story/5.txt",
//          "https://s3.eu-central-1.amazonaws.com/wt-story/6.txt",
//          "https://s3.eu-central-1.amazonaws.com/wt-story/7.txt"
//          ]


var text = [
  "Lorum ipsum",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non bibendum magna. Nam tempus est viverra magna malesuada, non scelerisque ligula maximus. Sed interdum at enim at vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet dui ut orci laoreet, quis pellentesque ipsum congue. Mauris auctor velit sit amet porta congue. Suspendisse vitae rhoncus metus, quis faucibus leo.",
  "Our third file!",
  "four four four four",
  "Number five",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum aliquet est, et faucibus nunc gravida eget.\
    Vivamus id libero et est mattis blandit. Duis sit amet maximus quam. Vestibulum ante risus, pretium et metus id,\
    tincidunt tempus metus. Etiam vulputate aliquet vulputate. Duis quis enim ligula. Quisque et dapibus elit. Donec non\
    fringilla sem. Aliquam condimentum, lorem mattis porttitor tristique, diam magna suscipit libero, id vulputate nunc\
    nibh ac sem. Aliquam quis hendrerit est. Ut tristique eros et mi egestas, at efficitur justo accumsan. Ut sed facilisis\
    mauris, sed malesuada diam. Nunc consequat, neque at ornare interdum, elit metus mollis massa, vel convallis tortor nulla\
    ut diam. Donec non sem ante. Vivamus sagittis dui aliquet, tristique quam a, congue turpis. Proin posuere, elit eget\
    malesuada imperdiet, purus ante vehicula neque, eu pharetra mauris magna vel mi.Etiam accumsan, augue ut volutpat\
    sodales, neque augue varius erat, ut consequat lacus nibh vitae libero. Nunc a rutrum lectus. Donec imperdiet congue\
    nisi, ut porttitor mi sodales in. Sed vulputate ipsum ac porttitor egestas. Pellentesque eu accumsan libero, id vehicula\
    leo. Donec hendrerit dui est, vitae vulputate sem porttitor eu. Sed sed elit sed ex condimentum pharetra ac lacinia\
    neque. Ut at ornare nibh. Pellentesque eget urna est. Curabitur tincidunt a libero vel mollis.",
  "Lucky number 7"
]

class Files extends Component {

    render() {
      return (
          <ul>
            {this.props.number.map(function(number){
              return <li className="items">{number}</li>;

            })}
            <br/>
          </ul>
      )
  }
}

ReactDOM.render(<Files number= {
      [
        <button className="btn1" onClick={function() {
          console.log(text[0])
        }}>First</button>,
        <button className="btn2" onClick={function() {
          console.log(text[1])
        }}>Second</button>,
        <button className="btn3" onClick={function() {
          console.log(text[2])
        }}>Third</button>,
        <button className="btn4" onClick={function() {
          console.log(text[3])
        }}>Fourth</button>,
        <button className="btn5" onClick={function() {
          console.log(text[4])
        }}>Fifth</button>,
        <button className="btn6" onClick={function() {
          console.log(text[5])
        }}>Sixth</button>,
        <button className="btn7" onClick={function() {
          console.log(text[6])
        }}>Seventh</button>
      ]}
/>,
document.getElementById('main'))



