import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import hyosub_theme from './theme.js';
import Sentence from './Sentence'
import Panel from './Panel';
import Home from './Home';
import Grid from '@material-ui/core/Grid';


var home = document.getElementById("home");

// class Home extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>Hello, World!</p>
//         <p>I'm hyosub!</p>
//         {/* <Sentence/> */}
//         <Panel/>
//       </div>
//     )
//   }
// }

if (home) {
  ReactDOM.render(
    <Grid container alignItems='center' justify='center' style={{width: '100%'}}>
      <MuiThemeProvider theme={hyosub_theme}>
        <Home />
      </MuiThemeProvider>
    </Grid>
  , home);
}

// if(home) {
//   ReactDOM.render(
//     <Home />
//   , home);
// }