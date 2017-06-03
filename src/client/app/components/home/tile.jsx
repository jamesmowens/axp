import React from 'react';
import PropTypes from 'prop-types';
import getShadowForLevel from '../../utilities/shadowHelper.js';

class Tile extends React.Component {
  render() {
    var styles = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: '10px',
      backgroundColor: 'white',
      boxShadow: getShadowForLevel(1),
    }
    const imgStyle = {
      borderRadius: '50%',
      marginRight: '15px',
    }
    const textBoxStyle = {
      minWidth: '150px',
      maxWidth: '75%',
      flexGrow: 1,
      marginTop: '5px',
      paddingRight: '5px',
      fontSize: '16pt',
    }
    return (
      <div style={styles}>
        <img style={imgStyle} src="http://lorempixel.com/256/256" />
        <div style={textBoxStyle}>
          <h2>hi</h2>
          <div>This is the body</div>
          <div style={{marginTop: '5px'}}>See More</div>
        </div>
      </div>
    );
  }
}

export default Tile;
