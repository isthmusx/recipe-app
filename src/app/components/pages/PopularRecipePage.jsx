import React from 'react'
import { fetchRandomRecipe } from '@/app/utils/fetchRecipes';
import { useEffect, useState } from 'react';
import FoodCard from "../FoodCard";
import CardSkeleton from "../skeletons/CardSkeleton";

const PopularRecipePage = () => {

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
    <div>
        <section className="min-h-screen p-6 md:p-20 flex flex-col justify-center">
            <h5 className="text-4xl sm:text-6xl font-libre-baskerville text-center mb-6 md:mb-10">
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
  )
}

export default PopularRecipePage