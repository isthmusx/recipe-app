'use client';
import Navbar from "./components/Navbar";
import React from 'react';
import ExploreCuisinePage from "./components/pages/ExploreCuisinePage";
import MainHeroPage from "./components/pages/MainHeroPage";
import PopularRecipePage from "./components/pages/PopularRecipePage";

export default function Home() {


  return (
    <div className="m-auto">
      <Navbar />

      {/* Main container */}
      <MainHeroPage />

      {/* Try Popular Recipes Section */}
      <PopularRecipePage />

      <ExploreCuisinePage />

    </div>
  );
}
