import React from 'react';
import ReactDOM from 'react-dom';
import Sentence from './Sentence'
import Panel from './Panel';

var home = document.getElementById("home");

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, World!</p>
        <p>I'm hyosub!</p>
        {/* <Sentence/> */}
        <Panel/>
      </div>
    )
  }
}

if(home) {
  ReactDOM.render(
    <Home />
  , home);
}