import React from 'react';
import ReactDOM from 'react-dom';


      var number = [
        "1.txt",
        "2.txt",
        "3.txt",
        "4.txt",
        "5.txt",
        "6.txt",
        "7.txt"
      ]



const Files = React.createClass({
    render: function() {
      var stations = [
        "https://s3.eu-central-1.amazonaws.com/wt-story/" + number[0] + ".txt"
      ]
        return (
            <ul>
                {stations.map(function(name, index){
                    return (<a key={ index }>{name} </a>);
                  })}
            </ul>
        )
    }
});


export default Files;



      // var stations = [
      //   "https://s3.eu-central-1.amazonaws.com/wt-story/1.txt",
      //   "https://s3.eu-central-1.amazonaws.com/wt-story/2.txt",
      //   "https://s3.eu-central-1.amazonaws.com/wt-story/3.txt",
      //   "https://s3.eu-central-1.amazonaws.com/wt-story/4.txt",
      //   "https://s3.eu-central-1.amazonaws.com/wt-story/5.txt",
      //   "https://s3.eu-central-1.amazonaws.com/wt-story/6.txt",
      //   "https://s3.eu-central-1.amazonaws.com/wt-story/7.txt"
      // ]
