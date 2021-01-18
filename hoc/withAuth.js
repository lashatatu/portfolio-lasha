import React from 'react';
import { useGetUser } from '@/actions/user';
import Redirect from '@/components/Redirect';

const withAuth = ( Component ) => {
  return props => {
    const { data, loading } = useGetUser();
    if ( loading ) {
      return <p >loading</p >;
    }

    if ( !data ) {
      return <Redirect ssr to={'/api/v1/login'}/>;
    } else {
      return <Component
         user={data}
         lodaing={loading} {...props}/>;
    }
  };
};

export default withAuth;