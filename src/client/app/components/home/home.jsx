import React from 'react';
import AppBar from 'material-ui/AppBar';
// import Banner from './banner';
// import TileBox from './tilebox';
// import CardBox from '../brothers/cardBox';
// import NewsList from '../news/newsList';
import NewsItem from '../news/newsItem';

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\
 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\
   commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\
    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\
     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\
      est laborum.';

class Home extends React.Component { //eslint-disable-line
  render() {
    return (
      <div style={{ backgroundColor: '#F2F2F2' }}>
        <AppBar
          title="Alpha Chi Rho"
          iconClassNameRight="material-icons-face"
        />
        <NewsItem title="Example" body={text} />
        <div style={{ height: '10px', backgroundColor: '#F2F2F2' }} />
        <NewsItem title="Example" body={text} />
      </div>
    );
  }
}

export default Home;
