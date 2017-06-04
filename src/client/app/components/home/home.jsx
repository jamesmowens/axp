import React from 'react';
import AppBar from 'material-ui/AppBar';
// import Banner from './banner';
// import TileBox from './tilebox';
import Card from '../brothers/card';

class Home extends React.Component { //eslint-disable-line
  render() {
    return (

      <div style={{ backgroundColor: '#A9A9A9' }}>
        <AppBar
          title="Alpha Chi Rho"
          iconClassNameRight="material-icons-face"
        />
        <Card />
      </div>
    );
  }
}

export default Home;
