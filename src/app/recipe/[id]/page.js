import { fetchRecipeById } from "../../utils/fetchRecipes"; // Import from the utils folder
import Image from "next/image";

export default async function RecipeDetail({ params }) {
  const { id } = params;
  let recipe = null;
  let error = null;

  try {
    recipe = await fetchRecipeById(id); // Fetch recipe data by ID
  } catch (err) {
    error = err.message; // Handle any errors during the fetch
  }

  if (error) {
    return <p>Error: {error}</p>; // Show error message if fetch fails
  }

  if (!recipe) {
    return <p>Recipe not found.</p>; // Show message if recipe data is not found
  }

  return (
    <div className="m-auto p-5 min-h-screen">
      <h1>{recipe.title}</h1>
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={500}
        height={500}
      />
      <p>{recipe.instructions}</p>
    </div>
  );
}
