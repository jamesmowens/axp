import React from 'react';
import PropTypes from 'prop-types';
import getShadowForLevel from '../../utilities/shadowHelper';

class Tile extends React.Component { //eslint-disable-line
  render() {
    const styles = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'white',
      boxShadow: getShadowForLevel(1),
      marginBottom: '5px',
    };
    const imgStyle = {
      borderRadius: '50%',
      marginRight: '15px',
      marginTop: '10px',
      marginBottom: '10px',
    };
    const textBoxStyle = {
      minWidth: '150px',
      maxWidth: '75%',
      flexGrow: 1,
      marginTop: '5px',
      paddingRight: '5px',
      fontSize: '16pt',
    };
    return (
      <div style={styles}>
        <img style={imgStyle} alt="" src="http://lorempixel.com/256/256" />
        <div style={textBoxStyle}>
          <h2>{this.props.title}</h2>
          <div>{this.props.body}y</div>
          <div style={{ marginTop: '5px' }}>See More</div>
        </div>
      </div>
    );
  }
}

Tile.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Tile;
