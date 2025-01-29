import React from 'react'
import { useRouter } from 'next/navigation';


const ExploreCuisinePage = () => {
    const router = useRouter();

    const handleCuisineClick = (cuisine) => {
        router.push(`/recipe/search?query=${cuisine}&cuisine=${cuisine}`);
      };

  return (
    <div>
        <section className="min-h-screen p-6 md:p-20 flex flex-col justify-center">
        <h5 className="text-4xl p-6 sm:text-6xl font-libre-baskerville text-center mb-6 md:mb-10">
          Explore<span className="text-accent"> Cuisines</span>
        </h5>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 text-center text-xl">
          {[
            "Asian", "African", "American", "British", "Cajun", "Caribbean", "Chinese",
            "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish",
            "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean",
            "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"
          ].map((cuisine) => (
            <a key={cuisine} onClick={() => handleCuisineClick(cuisine)}  >
              <span className="hover-effect p-2 cursor-pointer">{cuisine}</span>
            </a>
          ))}
        </div>

        
      </section>
    </div>
  )
}

export default ExploreCuisinePage