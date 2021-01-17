import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import Redirect from '@/components/Redirect';
import withAuth from '@/hoc/withAuth';

const Secret = ( { title } ) => {
  const { data, loading } = useGetUser();

  if ( loading ) {
    return <p >loading</p >;
  }

  if ( !data ) {
    return <Redirect to={'/api/v1/login'}/>;
  } else {
    return (
       <BaseLayout
          user={data}
          loading={loading}
       >
         <BasePage >
           <h1 >I am Secret page - {title}</h1 >
         </BasePage >
       </BaseLayout >
    );
  }
};

// function withAuth ( Component ) {
//   return function ( props ) {
//     return <Component title={'hello world'} {...props}/>;
//   };
// }
// const withAuth = ( Component ) => ( props ) =>
//    <Component title={'hello world'} {...props}/>;

export default withAuth(Secret);