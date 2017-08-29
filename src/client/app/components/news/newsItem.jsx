import React from 'react';
import PropTypes from 'prop-types';
import getShadowForLevel from '../../utilities/shadowHelper';

function getStyles() {
  return {
    item: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'white',
      boxShadow: getShadowForLevel(1),
      marginBottom: '5px',
    },
    imgStyle: {
      borderRadius: '50%',
      marginRight: '15px',
      marginTop: '10px',
      marginBottom: '10px',
    },
    text: {
      minWidth: '150px',
      maxWidth: '75%',
      flexGrow: 1,
      marginTop: '5px',
      // paddingRight: '5px',
      fontSize: '16pt',
    },
  };
}

export default class NewsItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hovered: false };

    this.mouseEntered = this.mouseEntered.bind(this);
    this.mouseLeft = this.mouseLeft.bind(this);
  }

  mouseEntered() { this.setState({ hovered: true }); }

  mouseLeft() { this.setState({ hovered: false }); }

  render() {
    const { item, img, text } = getStyles();
    return (
      <div style={item} onMouseLeave={this.mouseLeft} onMouseEnter={this.mouseEntered}>
        <img style={img} alt="" src="http://lorempixel.com/256/256" />
        <div style={text}>
          <h2>{this.props.title}</h2>
          <div>{this.props.body}</div>
        </div>
      </div>
    );
  }
}

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
