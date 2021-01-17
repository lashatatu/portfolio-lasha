import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetPostById } from '@/actions';
import { useRouter } from 'next/router';
import {useGetUser} from '@/actions/user';

const Portfolio = () => {
  const router = useRouter();
  const { data: portfolio, error, loading } = useGetPostById(router.query.id);
  const {data:dataU,loading:loadingU}=useGetUser();
  return (
     <BaseLayout user={dataU} loading={loadingU}>
       <BasePage >
         {loading && <p >loading data..</p >}
         {error && <div className={'alert alert-danger'}>{error.message}</div >}
         {portfolio &&
         <>
           <h1 >I am Portfolio page </h1 >
           <h2 >{portfolio.title}</h2 >
           <p >BODY: {portfolio.body}</p >
           <p >ID: {portfolio.id}</p >
         </>
         }
       </BasePage >
     </BaseLayout >
  );

}


export default Portfolio;