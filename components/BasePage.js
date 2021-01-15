import { Container } from 'reactstrap';
import React from 'react';

const BasePage = props => {
  const { className = '',children } = props;
  return (
     <div className={`base-page ${className}`}>
       <Container>
         {children}
       </Container>

     </div >
  );
};

export default BasePage