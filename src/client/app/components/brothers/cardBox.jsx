import React from 'react';
import TextField from 'material-ui/TextField';
import getShadowForLevel from '../../utilities/shadowHelper';
import Card from './card';

export default class CardBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  render() {
    const styles = {
      searchCont: {
        width: '100%',
        // height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingBottom: '10px',
        boxShadow: getShadowForLevel(1),
      },
      boxCont: {
        display: 'flex',
        margin: '10px',
        flexWrap: 'wrap',
      }
    };
    return (
      <div>
        <div style={styles.searchCont}>
          <TextField floatingLabelText="Search" />
        </div>
        <div style={styles.boxCont}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}
