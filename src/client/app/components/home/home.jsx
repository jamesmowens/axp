import React from 'react';
import AppBar from 'material-ui/AppBar';
import Banner from './banner';
import TileBox from './tilebox';

class Home extends React.Component{ //eslint-disable-line
  render() {
    return (

      <div style={{ backgroundColor: '#A9A9A9' }}>
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
