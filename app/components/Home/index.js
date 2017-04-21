/**
*
* Home
*
*/

import React from 'react';
// import styled from 'styled-components';
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'

class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      	<div>
      		<Header />
      		<Main />
      		<Footer />
      	</div>
    );
  }
}

Home.propTypes = {

};

export default Home;
