import React from 'react';
import {render} from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Banner from './banner.jsx'
import TileBox from './tilebox.jsx'

class Home extends React.Component{
  render() {
    return (

      <div style={{backgroundColor: '#A9A9A9'}} >
        <AppBar
          title="Alpha Chi Rho"
          iconClassNameRight="material-icons-face"
        />
        <Banner />
        <TileBox />
    </div>
    );
  }
}

export default Home;
