'use client';
import FoodCard from '@/app/components/FoodCard';
import Navbar from '@/app/components/Navbar';
import Error from '@/app/components/Error';
import React, { useState, useEffect, Suspense } from 'react';
import { fetchSearchRecipe } from '@/app/utils/fetchRecipes';
import { useSearchParams } from 'next/navigation';
import CardSkeleton from '@/app/components/skeletons/CardSkeleton';

const SearchResults = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const results = await fetchSearchRecipe(query); // Use the utility function
                setRecipes(results);
            } catch (err) {
                setError(`Failed to fetch recipes: ${err.message}`); // More detailed error
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            getRecipes();
        }
    }, [query]);

    return (
        <div className="m-auto min-h-screen font-source-sans">
            <Navbar />
            <div className='max-w-4xl mx-auto p-4'>
                <h1 className='text-4xl sm:text-6xl font-libre-baskerville text-center text-text m-6 md:m-10'>Search <span className='text-accent'>Results</span></h1>
                <p className='text-xl sm:text-2xl font-bold text-text py-5'>Results found for &apos;{query}&apos;</p>

                {loading ? (
                    <div>
                        <div className="flex flex-wrap justify-between gap-10 p-10">
                            {[...Array(6)].map((_, index) => (
                                <CardSkeleton key={index} />
                            ))}
                        </div>
                    </div>
                ) : error ? (
                    <div>
                        <p className="text-center text-red-500 text-lg">
                            {error}
                        </p>
                    </div>
                ) : recipes.length > 0 ? (
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 p-6 md:p-10">
                        {recipes.map((recipe) => (
                            <div className="w-full sm:w-1/2" key={recipe.id}>
                                <FoodCard recipe={recipe} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-lg text-center">No recipes found for &apos;{query}&apos;.</p>
                )}
            </div>
        </div>
    );
};

// Wrap the component in Suspense to handle useSearchParams()
export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchResults />
        </Suspense>
    );
}
