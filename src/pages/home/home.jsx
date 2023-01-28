import React from 'react'
import Featuredproperty from '../../components/featured-property/Featuredproperty';
import Featured from '../../components/featured/Featured'
import Footer from '../../components/footer/Footer';
import Header from '../../components/head/Header'
import Maillist from '../../components/mainList/Maillist';
import Navbar from '../../components/Nav/Navbar'
import Property from '../../components/property/Property';
import'./home.css';
export default function Home() {
  return (
    <div>
          <Navbar />
        <Header />

        <div className="homeContainer">
              <Featured />
              <h1 className="homeTitle">Browser by property</h1>
              <Property />
              <h1 className="homeTitle">Hone guest love</h1>
                <Featuredproperty />
                <Maillist />
                <Footer />
        </div>
    </div>
  )
}
