import React from 'react';
import { useLocation } from 'react-router-dom';

const RecipeDetails = () => {
    const location = useLocation();
    const { recipe } = location.state || {}; // Retrieve the recipe passed from the RecipeCard

    if (!recipe) {
        return <h2>No Recipe Found</h2>;
    }

    return (
        <div className="p-10 flex-1 bg-[#faf9fb]">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">{recipe.label}</h1>
                <img src={recipe.image} alt={recipe.label} className="w-full h-64 object-cover mb-4" />

                <h2 className="text-2xl font-bold text-gray-700">Nutritional Information:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>Calories: {recipe.calories.toFixed(2)}</li>
                    <li>Servings: {recipe.yield}</li>
                </ul>

                <h2 className="mt-6 text-2xl font-bold text-gray-700">Ingredients:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.text}</li>
                    ))}
                </ul>

                <h2 className="mt-6 text-2xl font-bold text-gray-700">Cooking Instructions:</h2>
                <ul className="list-decimal ml-5 mt-2 text-lg text-gray-600 leading-7">
                    {/* Sample Cooking Instructions */}
                    <li>Preheat the oven to 180°C (350°F).</li>
                    <li>Marinate the chicken with olive oil, garlic, and spices. Let it sit for 30 minutes.</li>
                    <li>In a large pan, heat some olive oil over medium heat and sear the chicken for 5-6 minutes on each side.</li>
                    <li>Place the seared chicken in a baking dish and bake for 25-30 minutes, or until fully cooked.</li>
                    <li>Meanwhile, prepare the sauce by mixing yogurt, lemon juice, and fresh herbs in a bowl.</li>
                    <li>Once the chicken is done, let it rest for a few minutes before slicing.</li>
                    <li>Serve the chicken with the yogurt sauce and garnish with fresh herbs.</li>
                </ul>
            </div>
        </div>
    );
};

export default RecipeDetails;
