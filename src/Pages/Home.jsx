import React from 'react';
import Header from '../Components/HomePageComponents/Header';
import Choose from '../Components/HomePageComponents/Choose';
import Subject from '../Components/HomePageComponents/Subject';
import Teachers from '../Components/HomePageComponents/Teachers';
import FeedBack from '../Components/HomePageComponents/FeedBack';
import Footer from '../Components/Navigation/Footer';

function Home() {
  return (
    <div>
      <Header/>
      <Choose/>
      <Subject/>
      <Teachers/>
      <FeedBack/>
      <Footer/>
    </div>
  );
}

export default Home;
