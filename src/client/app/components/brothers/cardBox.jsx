import React from 'react';
import TextField from 'material-ui/TextField';
import getShadowForLevel from '../../utilities/shadowHelper';
import Card from './card';
import getBrothers from '../../data/brothers';

function getStyles() {
  return {
    fieldCont: {
      width: '75%',
    },
    searchCont: {
      width: '100%',
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
    },
  };
}


export default class CardBox extends React.Component {

  static createCards() {
    const brothers = getBrothers();
    return brothers.map(brother =>
      (<Card
        name={`${brother.first} ${brother.last}`}
        position={brother.position ? brother.position : 'Brother'}
        key={brother.scroll}
      />));
  }

  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  render() {
    const styles = getStyles();
    const { searchCont, fieldCont, boxCont } = styles;
    return (
      <div>
        <div style={searchCont}>
          <div style={fieldCont}><TextField floatingLabelText="Search" fullWidth /></div>
        </div>
        <div style={boxCont}>
          {CardBox.createCards()}
        </div>
      </div>
    );
  }
}
