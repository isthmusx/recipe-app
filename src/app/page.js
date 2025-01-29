'use client';
import Navbar from "./components/Navbar";
import React from 'react';
import ExploreCuisinePage from "./components/pages/ExploreCuisinePage";
import MainHeroPage from "./components/pages/MainHeroPage";
import PopularRecipePage from "./components/pages/PopularRecipePage";
import Footer from "./components/Footer";

export default function Home() {


  return (
    <div className="m-auto">
      <Navbar />

      <div id="home" >
        <MainHeroPage />
      </div>

      <div id="recipes" >
        <PopularRecipePage />
      </div>
      
      <div id="cuisines" >
        <ExploreCuisinePage />
      </div>

      <Footer />

    </div>
  );
}
