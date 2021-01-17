import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarToggler, NavItem } from 'reactstrap';

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

const LoginLink = () =>
   <a
      className="nav-link port-navbar-link"
      href="/api/v1/login"
   >Login</a >;
// <BsNavLink href={"/api/v1/login"} title={"login"}/>

const LogoutLink = () =>
   <a
      className="nav-link port-navbar-link"
      href="/api/v1/logout"
   >Logout</a >;

const Header = ( { user, loading } ) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen( !isOpen);

  return (
     <div >
       <Navbar
          className="port-navbar port-default absolute"
          collor="transparent"
          dark
          expand="lg"
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
             <NavItem className="port-navbar-item">
               <BsNavLink
                  href="/secret"
                  title="Secret"
               />
             </NavItem >
           </Nav >
           <Nav navbar>
             { !loading &&
             <>
               {user &&
               <NavItem className="port-navbar-item">
                 <LogoutLink />
               </NavItem >
               }
               { !user &&
               <NavItem className="port-navbar-item">
                 <LoginLink />
               </NavItem >
               }
             </>
             }
           </Nav >
         </Collapse >
       </Navbar >
     </div >
  );

};

export default Header;