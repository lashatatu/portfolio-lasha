import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { Col, Row } from 'reactstrap';
import {useRouter} from 'next/router';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';
import PortfolioCard from '@/components/PortfolioCard';

const Portfolios = ( { portfolios } ) => {
  const router=useRouter();
  const { data: dataU, loading: loadingU } = useGetUser();

  return (
     <BaseLayout
        user={dataU}
        loading={loadingU}
     >
       <BasePage
          header={'portfolios'}
          className={'portfolio-page'}
       >
         <Row >
           {portfolios.map(portfolio =>
              <Col
                 key={portfolio._id}
                 onClick={()=>{
router.push('/portfolios/[id]',`/portfolios/${portfolio._id}`)
                 }}

                 md="4"
              >
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