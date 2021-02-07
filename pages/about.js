import { useEffect } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import { Col, Row } from 'reactstrap';

const About = () => {
  const { data, loading } = useGetUser();

  useEffect(() => {
    return () => {
      window.__isAboutLoaded = true;
    };
  });

  const createFadeInClass = () => {
    if ( typeof window !== 'undefined' ) {
      return window.__isAboutLoaded ? '' : 'fadein';
    }
    return 'fadein';
  };

  return (
     <BaseLayout
        user={data}
        loading={loading}
     >
       <BasePage className={'about-page'}>
         <Row className="mt-5">
           <Col md="6">
             <div className="left-side">
               <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1 >
               <h4 className={`subtitle ${createFadeInClass()}`}>To About Page</h4 >
               <p className={`subsubTitle ${createFadeInClass()}`}>Feel free to read short description about me.</p >
             </div >
           </Col >
           <Col md="6">
             <div className={`${createFadeInClass()}`}>
               <p >My name is Lasha Tatulashvili and I am an experienced WEB Developer and a freelancer. </p >
               <p >
                 I have a Master's degree in Robotics and Automated systems and Bachelors degree on Artificial
                 Intelligence. for several years i was working for Georgian Technical University (GTU)
                 on a wide range of international projects
               </p >
               <p >
                 I am also somewhat involved in Politics of Republic of Georgia, I am a member of UNM main Opposition
                 party of Georgia, i also member of several Georgian Activist NGO's mainly Free Zone (თავისუფალი ზონა)
                 and was running website for them. Those NGO's cover topics of: Russian Occupation, Government
                 Corruption,
                 Police Brutality. I was heavily involved in activism but nowadays i work from backstage
               </p >
             </div >
           </Col >
         </Row >
       </BasePage >
     </BaseLayout >
  );
};

export default About;