import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';

const Portfolio = ( { portfolio } ) => {
  const { data: dataU, loading: loadingU } = useGetUser();
  return (
     <BaseLayout
        navClass={'transparent'}
        user={dataU}
        loading={loadingU}
     >
       <BasePage
          noWrapper
          index
          title={`${portfolio.title} - Lasha tatulashvili`}
          metaDesctiption={portfolio.description}
       >
         <div className="portfolio-detail">
           <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
             <main
                role="main"
                className="inner page-cover"
             >
               <h1 className="cover-heading">Title</h1 >
               <p className="lead dates">dates</p >
               <p className="lead info mb-0">jobTitle | company | location</p >
               <p className="lead">description</p >
               <p className="lead">
                 <a
                    href="#"
                    className="btn btn-lg btn-secondary"
                 >Visit Company</a >
               </p >
             </main >
           </div >
         </div >

       </BasePage >
     </BaseLayout >
  );
};

export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;

  const paths = portfolios.map(portfolio => {
    return {
      params: {id: portfolio._id}
    }
  })

  return { paths, fallback: false };
}

export async function getStaticProps({params}) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return { props: {portfolio}};
}

export default Portfolio;