import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import Link from 'next/link';
import {useGetUser} from '@/actions/user';
import PortfoliosApi from '../../lib/api/portfolios';

const Portfolios = () => {
  const { data:dataU, loading:loadingU } = useGetUser();
  const renderPosts = ( posts ) => {
    return posts.map(post =>
       <li
          key={post.id}
          style={{ 'fontSize': '20px' }}
       >
         <Link
            as={`/portfolios/${post.id}`}
            href="/portfolios/[id]"
         >
           <a >
             {post.title}
           </a >
         </Link >
       </li >);
  };

  return (
     <BaseLayout user={dataU} loading={loadingU}>
       <BasePage >
         <h1 >I am Portfolios Page</h1 >
         <ul >
           {
             renderPosts([])
           }
         </ul >
       </BasePage >
     </BaseLayout >
  );
};

export function getStaticProps () {
  return {
    props:{portfolios:[]}
  }
}

export default Portfolios;