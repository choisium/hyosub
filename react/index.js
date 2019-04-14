import React from 'react';
import ReactDOM from 'react-dom';

var home = document.getElementById("home");

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, World!</p>
        <p>I'm hyosub!</p>
      </div>
    )
  }
}

if(home) {
  ReactDOM.render(
    <Home />
  , home);
}