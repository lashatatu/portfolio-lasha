import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import auth0, { withAuth } from 'utils/auth0';
import { Col, Row } from 'reactstrap';
import Masthead from 'components/shared/Masthead';
import BlogApi from 'lib/api/blogs';

const Dashboard = ({user, blogs}) => {
  return (
     <BaseLayout navClass="transparent" user={user} loading={false}>
       <Masthead imagePath="/images/home-bg.jpg" />
       <BasePage className="blog-user-page">
         <Row>
           <Col md="6" className="mx-auto text-center">
             <h2 className="blog-status-title"> Published Blogs </h2>
           </Col>
           <Col md="6" className="mx-auto text-center">
             <h2 className="blog-status-title"> Draft Blogs </h2>
           </Col>
         </Row>
       </BasePage>
     </BaseLayout>
  )
}

export const getServerSideProps=withAuth(async ({req, res})=>{
  const {accessToken}=await auth0.getSession(req);
  const json=await new BlogApi(accessToken).getByUser();
  return {blogs: json.data }
})('admin')

export default Dashboard;
