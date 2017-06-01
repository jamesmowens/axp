import React from 'react';
import {render} from 'react-dom';

class Home extends React.Component{
  render() {
    var styles = {
      width: '100%',
      height: '60%',
      // background: 'fixed #222222 center no-repeat',
      'background-size': 'cover',
      backgroundImage: 'url("https://s3.amazonaws.com/jams-test-bucket/Brothers.jpg")',
      marginBottom: '5px',
    }

    return (
      <div style={styles} />
    );
  }
}

export default Home;
