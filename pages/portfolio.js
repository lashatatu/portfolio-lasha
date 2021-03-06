import BaseLayout from '@/components/layouts/BaseLayout';
import axios from 'axios';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';

const Portfolio =({portfolio})=> {
  const {data, loading}=useGetUser();
    return (
       <BaseLayout user={data} loading={loading}>
         <BasePage>
         <h1 >I am Portfolio page </h1 >
         <h2 >{portfolio.title}</h2 >
         <p >BODY: {portfolio.body}</p >
         <p >ID: {portfolio.id}</p >
         </BasePage>
       </BaseLayout >
    );
}

Portfolio.getInitialProps = async( { query } )=> {
  let post = [];
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    post = res.data;
  } catch ( e ) {
    console.log(e);
  }

  return { portfolio: post };
}

export default Portfolio;