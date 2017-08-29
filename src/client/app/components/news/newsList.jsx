import React from 'react';
import NewsItem from './newsItem';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\
   commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\
     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\
      est laborum.';

function getStyles() {
  return {
    container: {
      display: 'flex',
      // padding: '10px',
    },
  };
}
export default class NewsList extends React.Component { // eslint-disable-line

  static makeSampleItems() {
    const items = [
      { title: 'Story 1', preview: text },
      { title: 'Story 2', preview: text },
      { title: 'Story 3', preview: text },
    ];

    return items.map(item => <NewsItem title={item.title} body={item.preview} />);
  }

  render() {
    const { container } = getStyles();
    return (
      <div style={container}>
        {NewsList.makeSampleItems()}
      </div>
    );
  }
}
