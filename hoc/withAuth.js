import React from 'react';

const withAuth = ( Component ) => {
  return props => {
    return <Component {...props}/>;
  };
};

export default withAuth;