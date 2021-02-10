import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { Col, Row } from 'reactstrap';
import { useGetUser } from '@/actions/user';
import { SlateView } from 'slate-simple-editor';
import BlogApi from 'lib/api/blogs';
import Avatar from '@/components/shared/Avatar';

const BlogDetail = ({blog, author}) => {
  debugger
  const { data, loading } = useGetUser();
  return (
     <BaseLayout
        user={data}
        loading={loading}
     >
       <BasePage className="slate-container">
         <Row >
           <Col md={{ size: 8, offset: 2 }}>
             <Avatar
                title={author.name}
                date={blog.createdAt}
                image={author.picture}
             />
             <hr />
             <SlateView initialContent={blog.content}/>
           </Col >
         </Row >
       </BasePage >
     </BaseLayout >
  );
};

export async function getStaticPaths() {
  const { data } = await new BlogApi().getAll();
  const paths = data.map(( { blog } ) => ( { params: { slug: blog.slug } } ));
  return { paths, fallback: false };
}

export async function getStaticProps({params}) {
  const { data: { blog, author } } = await new BlogApi().getBySlug(params.slug);
  return {props: {blog, author}}
}

export default BlogDetail;