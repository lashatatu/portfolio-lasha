import BaseLayout from '@/components/layouts/BaseLayout';
import { Col, Container, Row } from 'reactstrap';
import Typed from 'react-typed';
import { useGetUser } from 'actions/user';
import { useEffect, useRef, useState } from 'react';
import BasePage from '@/components/BasePage';

const ROLES = ['Developer', 'Tech Lover', 'Team Player', 'Coursor Creator', 'React.js'];

const Index = () => {

  const [isFlipping, setIsFlipping] = useState(false);
  const { data, loading } = useGetUser();
  const flipInterval = useRef();

  useEffect(() => {
    startAnimation()
    return ()=>flipInterval.current && clearInterval(flipInterval.current)
  },[])

  const startAnimation=()=>{
    flipInterval.current=setInterval(()=>{
      setIsFlipping(prevFlipping=>!prevFlipping)
    },20000)
  }

  return (
     <BaseLayout
        user={data}
        loading={loading}
        navClass={'transparent'}
        className={`cover ${isFlipping ? 'cover-orange' : 'cover-blue'}`}
     >
       <BasePage indexPage title={"portfolio - Lasha Tatulashvili"}>
         <div className="main-section">
           <div className="background-image">
             <img src="/images/background-index.png"/>
           </div >
           <Container >
             <Row >
               <Col md="6">
                 <div className="hero-section">
                   <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                     <div className="front">
                       <div className="hero-section-content">
                       <h2 > Full Stack Web Developer </h2 >
                       <div className="hero-section-content-intro">
                         Have a look at my portfolio and job history.
                       </div >
                     </div >
                     <img
                        className="image"
                        src="/images/section-1.png"
                     />
                     <div className="shadow-custom">
                       <div className="shadow-inner"> </div >
                     </div >
                   </div >
                   <div className="back">
                     <div className="hero-section-content">
                       <h2 > Full Stack Web Developer </h2 >
                       <div className="hero-section-content-intro">
                         Have a look at my portfolio and job history.
                       </div >
                     </div >
                     <img
                        className="image"
                        src="/images/section-2.png"
                     />
                     <div className="shadow-custom-orange">
                       <div className="shadow-inner"></div >
                     </div >
                   </div >
                 </div >
               </div >
             </Col >
             <Col
                md="6"
                className="hero-welcome-wrapper"
             >
               <div className="hero-welcome-text">
                 <h1 >
                   This is the Portfolio website of Lasha Tatulashvili.
                   Get informed, collaborate and discover projects I was working on through the years!
                 </h1 >
               </div >

               <Typed
                  loop
                  strings={ROLES}
                  typeSpeed={70}
                  backSpeed={70}
                  backDelay={1000}
                  loopCount={0}
                  className={'self-typed'}
                  cursorCar={'|'}
               >
               </Typed >
               <div className="hero-welcome-bio">
                 <h1 >
                   Let's take a look on my work.
                 </h1 >
               </div >
             </Col >
             </Row >
           </Container >
         </div >
       </BasePage >
     </BaseLayout >
  );
}

export default Index;