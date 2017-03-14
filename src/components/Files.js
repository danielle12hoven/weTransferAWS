import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';


// const Button = (props) =>
//   <button type="button" {...props} className={"btn " + props.className } onClick={props.onClick} />;


const Files = React.createClass({

    render: function() {
      return (
          <ul>
            {this.props.number.map(function(number){
              return <a>{number}</a>;
            })}
            <br/>
          <button className="btn1" onClick={this.props.number}>start</button>
          </ul>
      )
  }
}
)

ReactDOM.render(<Files number={[
         ("https://s3.eu-central-1.amazonaws.com/wt-story/1.txt"),
         <br/>,
         ("https://s3.eu-central-1.amazonaws.com/wt-story/2.txt"),
         <br/>,
         ("https://s3.eu-central-1.amazonaws.com/wt-story/3.txt"),
         <br/>,
         ("https://s3.eu-central-1.amazonaws.com/wt-story/4.txt"),
         <br/>,
         ("https://s3.eu-central-1.amazonaws.com/wt-story/5.txt"),
         <br/>,
         ("https://s3.eu-central-1.amazonaws.com/wt-story/6.txt"),
         <br/>,
         ("https://s3.eu-central-1.amazonaws.com/wt-story/7.txt")
        ]}
/>,
document.getElementById('testing2'))




