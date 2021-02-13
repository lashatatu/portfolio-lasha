import { Container } from 'reactstrap';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const PageHeader = ( { header } ) =>
   <div className={'page-header'}>
     <h1 className={'page-header-title'}>{header}</h1 >
   </div >;

const BasePage = props => {
  const {
    noWrapper,
    canonicalPath,
    indexPage,
    className = '',
    header,
    title = 'Portfolio - Lasha Tatulashvili',
    metaDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque deserunt dicta distinctio ea enim eveniet, fugit labore molestiae mollitia, nam nihil, quaerat quam quas reiciendis repellendus saepe vero voluptate.',
    children
  } = props;

  const pageType = indexPage ? 'index-page' : 'base-page';
  const router=useRouter();
  return (
     <>
       <Head >
         <title >{title}</title >
         <meta
            name={'viewport'}
            content={'initial-scale=1.0m width=device-width'}
         />
         <meta
            name={'description'}
            key={'description'}
            content={metaDescription}
         />
         <meta
            name={'title'}
            key={'title'}
            content={title}
         />
         <meta property={'og:title'} key={'og:title'} content={title}/>
         <meta property={'og:local'} key={'og:local'} content='en_US'/>
         <meta property={'og:url'} key={'og:url'} content={`${process.env.BASE_URL}${router.asPath}`}/>
         <meta
            property={'og:type'}
            key={'og:type'}
            content="website"
         />
         <meta
            property={'og:description'}
            key={'og:description'}
            content={metaDescription}
         />
         <meta
            property={'og:image'}
            key={'og:image'}
            content={`${process.env.BASE_URL}/images/section-2.png`}
         />
         <link
            rel="icon"
            type={'image/x-icon'}
            href={'/favicon.ico'}
         />
         <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap"
            rel="stylesheet"
         />
         <link
            rel={'cononical'}
            href={`${process.env.BASE_URL}${canonicalPath ? canonicalPath : router.asPath}`}
         />


       </Head >
       <div className={`${pageType} ${className}`}>
         {noWrapper &&
         <>
           {header && <PageHeader header={header}/>
           }
           {children}
         </>
         }
         { !noWrapper &&
         <Container >
           {header && <PageHeader header={header}/>

           }
           {children}
         </Container >
         }


       </div >
     </>
  );
};

export default BasePage