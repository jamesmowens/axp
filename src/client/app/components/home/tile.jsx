import React from 'react';
import PropTypes from 'prop-types';

class Tile extends React.Component {
  render() {
    var styles = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '200px',
      backgroundColor: 'white',
    }
    return (
      <div style={styles} />
    );
  }
}

export default Tile;
