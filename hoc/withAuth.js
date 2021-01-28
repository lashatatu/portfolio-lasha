import React from 'react';
import { useGetUser } from '@/actions/user';
import Redirect from '@/components/Redirect';
import { isAuthorized } from '../utils/auth0';

const withAuth = Component => role => {
  return props => {
    const { data, loading } = useGetUser();
    if ( loading ) {
      return <p >loading</p >;
    }

    if ( !data ) {
      return <Redirect
         ssr
         to={'/api/v1/login'}
      />;
    } else {
      if (role && !isAuthorized(data, role) ) {
        return <Redirect
           ssr
           to={'/api/v1/login'}
        />;
      }

      return <Component
         user={data}
         lodaing={loading} {...props}
      />;
    }
  };
};

export default withAuth;