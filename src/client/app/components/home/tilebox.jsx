import React from 'react';
import {render} from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Banner from './banner.jsx';
import Tile from './tile.jsx';

class TileBox extends React.Component{
  render() {
    const boxStyle = {
      paddingRight: '5px',
      paddingLeft: '5px',
    }

    return (
      <div style={boxStyle}>
        <Tile />
      </div>
    );
  }
}

export default TileBox;
