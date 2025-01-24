import Navbar from "@/app/components/Navbar";
import { fetchRecipeById } from "../../utils/fetchRecipes"; // Import from the utils folder
import Image from "next/image";
import Error from "@/app/components/Error";

export default async function RecipeDetail({ params }) {
  const { id } = await params;
  let recipe = null;
  let error = null;

  try {
    recipe = await fetchRecipeById(id); // Fetch recipe data by ID
    console.log(recipe);
  } catch (err) {
    error = err.message; // Handle any errors during the fetch
  }

  if (error) {
    return <Error />; // Show error message if fetch fails
  }

  if (!recipe) {
    return <Error />;
  }

  return (
    <div className="m-auto min-h-screen font-source-sans">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-4xl sm:text-6xl font-libre-baskerville text-center text-text m-6 md:m-10">{recipe.title}</h1>
        
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={500}
          height={500}
          className="rounded-lg mx-auto"
        />

        <div className="flex justify-between mx-auto w-full text-center p-5 max-w-2xl">
          <div>
            <p className="text-xl">Cusine</p>
            <h3 className="text-lg font-bold text-primary">
              {recipe?.cuisines?.join(", ") || "None"}
            </h3>


          </div>

          <div>
            <p className="text-xl">Cook time</p>
            <h3 className="text-lg font-bold text-primary">{recipe.readyInMinutes} Minutes</h3>
          </div>

          <div>
            <p className="text-xl">Servings</p>
            <h3 className="text-lg font-bold text-primary">{recipe.servings}</h3>
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-text py-5">Ingredients</h2>
          <ul className="list-none text-white">
            {recipe.extendedIngredients.map((ingredient) => (
              <li
                key={ingredient.id}
                className="text-lg text-white relative pl-5 mb-4 before:content-['\2022'] before:text-primary before:absolute before:left-0"
              >
                {ingredient.original}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-text py-5">Instructions:</h2>
          <ul className="list-decimal text-white pl-5">
            {recipe.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number} className="text-lg text-white mb-4">
                {step.step}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-2 border-primary my-10 mx-auto p-5 w-full sm:w-2/3">
          <h2 className="text-xl sm:text-2xl font-bold text-text pb-5">Nutrition <span className="text-sm font-medium">(per serving)</span></h2>
          <div className="flex justify-between w-full text-center">
            <div>
              <p className="text-xl">Calories</p>
              <h3 className="text-lg font-bold text-primary">{recipe.nutrition.nutrients.find(nutrient => nutrient.name === 'Calories')?.amount}</h3>
            </div>

            <div>
              <p className="text-xl">Protein</p>
              <h3 className="text-lg font-bold text-primary">{recipe.nutrition.nutrients.find(nutrient => nutrient.name === 'Protein')?.amount}</h3>
            </div>

            <div>
              <p className="text-xl">Carbs</p>
              <h3 className="text-lg font-bold text-primary">{recipe.nutrition.nutrients.find(nutrient => nutrient.name === 'Carbohydrates')?.amount}</h3>
            </div>

            <div>
              <p className="text-xl">Fat</p>
              <h3 className="text-lg font-bold text-primary">{recipe.nutrition.nutrients.find(nutrient => nutrient.name === 'Fat')?.amount}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
