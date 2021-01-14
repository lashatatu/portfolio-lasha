import React from 'react';
import Header from '../components/shared/header';
import BaseLayout from '../components/layouts/BaseLayout';

class Index extends React.Component {
  render () {
    return (
       <BaseLayout >
         <h1>I am index Page</h1>
       </BaseLayout >
    );
  }
}

export default Index;