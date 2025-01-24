'use client';
import Image from "next/image";
import Navbar from "./components/Navbar";
import FoodCard from "./components/FoodCard";
import CardSkeleton from "./components/skeletons/CardSkeleton";
import React, { useEffect, useState } from 'react';
import { fetchRandomRecipe } from '@/app/utils/fetchRecipes';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRandomRecipes = async () => {
      setLoading(true);
      setError(null); // Reset error state when fetching begins
      try {
        const fetchedRecipes = [];
        for (let i = 0; i < 4; i++) {
          const data = await fetchRandomRecipe();
          fetchedRecipes.push(data.recipes[0]); // Assuming each fetch gives a single recipe
        }
        setRecipes(fetchedRecipes);
      } catch (err) {
        console.error('Error fetching recipes:', err);
        setError('Failed to load recipes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getRandomRecipes();
  }, []);

  return (
    <div className="m-auto">
      <Navbar />

      {/* Main container */}
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-screen pt-0 p-5 sm:pt-16 md:pt-16">
        <div className="flex flex-col items-left justify-center gap-10 pl-0 md:pl-16 sm:pl-16 mx-10 w-4/5">
          <h1 className="text-4xl font-semibold font-libre-baskerville text-center md:text-left mb-4 sm:text-6xl">
            Discover, cook, and savor your favorite recipes <span className="text-accent">– all in one place.</span> 
          </h1>
          <h2 className="text-xl text-left md:text-left mb-6 sm:text-2xl md:text-2xl">
            Whether you&apos;re looking for quick meals, healthy options, or indulgent treats, Crave has something for every craving. 
            Get inspired with new flavors, step-by-step guides, and creative twists on classic dishes.
          </h2>
          <div className="flex justify-between w-full text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary">5000+</h3>
              <p className="text-xl">Recipes</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">1000+</h3>
              <p className="text-xl">Ingredients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary">10+</h3>
              <p className="text-lg">Cuisines</p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-full hidden md:block">
          <Image
            aria-hidden
            src="/foodHero.png"
            alt="Food hero image"
            width={700}
            height={700}
            className="absolute inset-0 w-full h-5/6 object-contain scale-150 rotate-12"
          />
        </div>
      </main>

      {/* Try Popular Recipes Section */}
      <section className="min-h-screen p-6 md:p-20 flex flex-col justify-center">
        <h5 className="text-2xl sm:text-6xl font-libre-baskerville text-center mb-6 md:mb-10">
          Try Some <span className="text-accent">Popular Recipes</span>
        </h5>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 overflow-x-auto p-4 md:p-10">
          {loading && (
            [...Array(4)].map((_, index) => <CardSkeleton key={index} />)
          )}

          {error && !loading && (
            <p className="text-center text-red-500 text-lg">
              {error}
            </p>
          )}

          {!loading && !error && recipes.map((recipe) => (
            <FoodCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </div>
  );
}
