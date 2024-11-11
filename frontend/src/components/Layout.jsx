import React from 'react'

/* --=======================================
    Start Import Components Here 
========================================-- */
import Header from './header/Header';
import Footer from './footer/Footer';
import { Helmet } from 'react-helmet';
/* --=======================================
    End Import Components Here 
========================================-- */


const Layout = ({children,title = "Kirs Ecommerce App",
  description = "Ecommerce Web Application",
  keywords = "Node, React, HTML, CSS, Bootstrap",
  author = "Kumrul Islam"}) => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}


export default Layout
