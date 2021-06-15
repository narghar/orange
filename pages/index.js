import React from 'react';
import Clients from '../src/components/Clients';
import Footer from "../src/components/Footer";
import Blog from '../src/components/Home/Blog';
import Faq from '../src/components/Home/Faq';
import OurWork from '../src/components/OurWork';

const Home = () => {
  return (
    <>
    <Clients/>
    <OurWork/>
    <Faq/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default Home
