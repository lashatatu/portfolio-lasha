import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { Col, Row } from 'reactstrap';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';
import PortfolioCard from '@/components/PortfolioCard';

const Portfolios = ( { portfolios } ) => {
  const { data: dataU, loading: loadingU } = useGetUser();

  return (
     <BaseLayout
        user={dataU}
        loading={loadingU}
     >
       <BasePage className={'portfolio-page'}>
         <Row >
           {portfolios.map(portfolio =>
              <Col key={portfolio._id} md="4">
                <PortfolioCard portfolio={portfolio}/>
              </Col >
           )
           }
         </Row >
       </BasePage >
     </BaseLayout >
  );
};

export async function getStaticProps () {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  return {
    props: { portfolios }
  };
}

export default Portfolios;