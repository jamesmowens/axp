import React from 'react';
import PropTypes from 'prop-types';
import getShadowForLevel from '../../utilities/shadowHelper';
import lorem from '../../utilities/strings';

function getStyles() {
  return {
    container: {
      backgroundColor: 'white',
      width: '300px',
      height: '350px',
      boxShadow: getShadowForLevel(1),
      borderRadius: '5%',
      textAlign: 'center',
      padding: '10px',
      marginLeft: '10px',
      marginBottom: '10px',
    },
    img: {
      width: '128px',
      height: '128px',
      borderRadius: '50%',
    },
    name: {
      fontSize: '14pt',
    },
    body: {
      fontSize: '9pt',
      textAlign: 'left',
    },
  };
}

export default class Card extends React.Component { // eslint-disable-line

  render() {
    const styles = getStyles();

    return (
      <div style={styles.container}>
        <img style={styles.img} alt="" src="http://lorempixel.com/256/256" />
        <p style={styles.name}>{this.props.name} | {this.props.position}</p>
        <p style={styles.body}>{this.props.bio}</p>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

Card.defaultProps = {
  bio: lorem,
};
