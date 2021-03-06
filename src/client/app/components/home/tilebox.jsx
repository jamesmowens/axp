import React from 'react';
import Tile from './tile';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\
   commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\
     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\
      est laborum.';

class TileBox extends React.Component {

  createTiles() { //eslint-disable-line
    const tileData = [
      { title: 'History', body: text, imgUrl: 'http://lorempixel.com/256/256' },
      { title: 'Brothers', body: text, imgUrl: 'http://lorempixel.com/256/256' },
      { title: 'Rush', body: text, imgUrl: 'http://lorempixel.com/256/256' },
      { title: 'News', body: text, imgUrl: 'http://lorempixel.com/256/256' },
    ];

    return tileData.map(tile =>
       (<Tile title={tile.title} body={tile.body} />),
    );
  }

  render() {
    const boxStyle = {
      paddingRight: '5px',
      paddingLeft: '5px',
    };

    return (
      <div style={boxStyle}>
        {this.createTiles()}
      </div>
    );
  }
}

export default TileBox;
