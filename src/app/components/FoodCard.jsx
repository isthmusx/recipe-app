'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import DOMPurify from 'dompurify';

const FoodCard = ({ recipe }) => {
  const router = useRouter();

  if (!recipe) {
    return null; // If no recipe is provided, render nothing
  }

  const sanitizedSummary = DOMPurify.sanitize(recipe.summary);

  const handleCardClick = () => {
    router.push(`/recipe/${recipe.id}`); // Navigate to the recipe page with the recipe ID
  };

  return (
    <div
      className="w-full sm:w-80 md:w-96 hover:cursor-pointer hover:scale-105 duration-300"
      onClick={handleCardClick}
    >
      <div className="card bg-secondary shadow-xl h-96">
        <figure>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-60 object-cover"
          />
        </figure>
        <div className="card-body mx-auto p-4 flex flex-col justify-between">
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
