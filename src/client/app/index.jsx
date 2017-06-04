/* eslint-disable*/
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './components/home/home.jsx';

class App extends React.Component { //eslint-disable-line
  render() {
    injectTapEventPlugin();
    return (
      <MuiThemeProvider>
        <Home />
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('app')); //eslint-disable-line
