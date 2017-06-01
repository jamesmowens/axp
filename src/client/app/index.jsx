import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Home from './components/home/home.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render () {
    injectTapEventPlugin();
    return(
      <MuiThemeProvider>
        <Home />
      </MuiThemeProvider>
    );
  }
}

render(<App/>, document.getElementById('app'));
