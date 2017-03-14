import React from 'react';
import ReactDom from 'react-dom'

  var RenderTest = React.createClass({
    render: function() {
      return (
        <ul>
          {this.props.list.map(function(listValue){
            return <li>{listValue}</li>;
          })}
        </ul>
      )
    }
  });
  // ReactDom.render(<RenderTest list={[1,2,3,4,5]} />, document.getElementById('testing2'));


