
export async function fetchRecipeById(id) {
  const API_KEY = process.env.SPOONACULAR_API_KEY; // Store your API key in .env.local
  const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch recipe');
    }
  
    const data = await response.json();
    return data;
  }
  export async function fetchRandomRecipe() {
    const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`
    );
  console.log(API_KEY)
    if (!response.ok) {
      console.error('Error fetching data:', response.status, response.statusText);
      throw new Error('Failed to fetch random recipe');
    }
  
    const data = await response.json();
    return data;
  }
  
  