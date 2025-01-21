export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const ingredients = searchParams.get('ingredients');
    const API_KEY = process.env.SPOONACULAR_API_KEY;
  
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=${API_KEY}`
    );
    const data = await response.json();
  
    return new Response(JSON.stringify(data), { status: 200 });
  }
  