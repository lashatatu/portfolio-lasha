import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';
import {Editor} from 'slate-simple-editor';

const BlogEditor = ( { user, loading } ) => {

  const saveBlog=(data)=>{
    console.log(data);
  }
  return (
     <BaseLayout
        user={user}
        loading={false}
     >
       <BasePage header={'Blog Editor'}>
         <Editor onSave={(data)=>{
           debugger
         }}/>
       </BasePage >
     </BaseLayout >
  );
};

export default withAuth(BlogEditor)('admin');