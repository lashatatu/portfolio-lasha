import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

import Link from 'next/link';

const BsNavLink = ( props ) => {
  const { title, href } = props;
  return (
     <Link href={href}>
       <a className={'nav-link port-navbar-link'}>
         {title}
       </a >
     </Link >
  );
};
const BsNavBrand = () => {
  return (
     <Link href={'/'}>
       <a className="navbar-brand port-navbar-brand">Lashatatu.dev</a >
     </Link >
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen( !isOpen);

  return (
     <div >
       <Navbar
          className="port-navbar port-default absolute"
          collor="transparent"
          dark
          expand="md"
       >
         <BsNavBrand />
         <NavbarToggler onClick={toggle}/>
         <Collapse
            isOpen={isOpen}
            navbar
         >
           <Nav
              className="mr-auto"
              navbar
           >
             <NavItem className="port-navbar-item">
               <BsNavLink
                  href="/"
                  title="Home"
               />
             </NavItem >
             <NavItem className="port-navbar-item">
               <BsNavLink
                  href="/about"
                  title="About"
               />
             </NavItem >
             <NavItem className="port-navbar-item">
               <BsNavLink
                  href="/portfolios"
                  title="Portfolios"
               />
             </NavItem >
             <NavItem className="port-navbar-item">
               <BsNavLink
                  href="/blogs"
                  title="Blogs"
               />
             </NavItem >
             <NavItem className="port-navbar-item">
               <BsNavLink
                  href="/cv"
                  title="Cv"
               />
             </NavItem >
           </Nav >
         </Collapse >
       </Navbar >
     </div >
  );

};

export default Header;