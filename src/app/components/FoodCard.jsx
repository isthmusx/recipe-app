'use client'
import React, { useState, useEffect } from 'react';
import { fetchRandomRecipe } from '../utils/fetchRecipes';
import DOMPurify from 'dompurify';
import { useRouter } from 'next/navigation';
import CardSkeleton from './skeletons/CardSkeleton';


const FoodCard = () => {
  const router = useRouter();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRandomRecipe = async () => {
      try {
        const data = await fetchRandomRecipe();
        console.log(data);
        setRecipe(data.recipes[0]); // Assuming the API returns an array of recipes
      } catch (error) {
        console.error('Error fetching random recipe:', error);
        setError('Failed to fetch recipe');
      } finally {
        setLoading(false);
      }
    };

    getRandomRecipe();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return (
      <div className="p-10">
        <div >
          <CardSkeleton />
        </div>
      </div>
    );
  }

  const sanitizedSummary = DOMPurify.sanitize(recipe.summary);

  const handleCardClick = () => {
    router.push(`/recipe/${recipe.id}`); // Navigate to the recipe page with the recipe ID
  };

  return (
    <div className="w-full sm:w-80 md:w-96 lg:w-1/5 hover:cursor-pointer hover:scale-105 duration-300" onClick={handleCardClick}>
        <div className="card bg-secondary shadow-xl h-96 md:h-[400px]">
            <figure>
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-60 object-cover"
            />
            </figure>
            <div className="card-body">
            <h2 className="card-title text-xl font-libre-baskerville">{recipe.title}</h2>
            <p
                dangerouslySetInnerHTML={{ __html: sanitizedSummary }}
                className="font-source-sans text-ellipsis overflow-hidden line-clamp-4"
            ></p>
            </div>
        </div>
        </div>


  );
};

export default FoodCard;
