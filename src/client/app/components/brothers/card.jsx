import React from 'react';
// import PropTypes from 'prop-types';
import getShadowForLevel from '../../utilities/shadowHelper';
import lorem from '../../utilities/strings';

export default class Card extends React.Component { // eslint-disable-line

  render() {
    const styles = {
      container: {
        backgroundColor: 'white',
        width: '300',
        height: '350',
        boxShadow: getShadowForLevel(1),
        borderRadius: '5%',
        textAlign: 'center',
        padding: '10px',
      },
      img: {
        width: '128',
        height: '128',
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
    return (
      <div style={styles.container}>
        <img style={styles.img} alt="" src="http://lorempixel.com/256/256" />
        <p style={styles.name}>James Owens | Member at Large</p>
        <p style={styles.body}>{lorem}</p>
      </div>
    );
  }
}
