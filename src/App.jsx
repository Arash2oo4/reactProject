import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Cards from './components/cards';
import Banner from './components/banner';
import Footer from './components/footer';

const App = () => {
  return ( 
    <>
    <Navbar/>
    <Hero/>
    <Cards/>
    <Banner />
    <Footer/>
    </>
   );
}
 
export default App;