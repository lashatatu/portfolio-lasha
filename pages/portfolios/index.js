import BaseLayout from '@/components/layouts/BaseLayout';
import Link from 'next/link';
import BasePage from '@/components/BasePage';
import axios from 'axios';

const Portfolios = ( { posts } ) => {

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
     <BaseLayout >
       <BasePage >
         <h1 >I am Portfolios Page</h1 >
         <ul >
           {
             renderPosts(posts)
           }
         </ul >
       </BasePage >
     </BaseLayout >
  );

};

Portfolios.getInitialProps = async () => {
  let posts = [];
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts = res.data;
  } catch ( e ) {
    console.log(e);
  }

  return { posts: posts.slice(0, 10) };
};

export default Portfolios;