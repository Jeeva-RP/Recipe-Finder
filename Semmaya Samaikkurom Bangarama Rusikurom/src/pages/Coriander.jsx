import React from 'react';

const CorianderChickenCurry = () => {
    return (
        <div className="p-10 flex-1 bg-[#faf9fb]">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">Coriander Chicken Curry Recipe</h1>
                <img src="public\images\Coriander Chicken Curry.jpg" alt="Coriander Chicken Curry" className="w-full h-64 object-cover mb-4" />
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Nutritional Information:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>Calories: 350 per serving</li>
                    <li>Servings: 4</li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Ingredients:</h2>
                <h2 className="mt-2 text-2xl font-bold text-gray-700">For the Chicken Marinade:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>500 grams chicken, cut into pieces</li>
                    <li>2 tablespoons oil</li>
                    <li>1 teaspoon garlic paste</li>
                    <li>1 teaspoon ginger paste</li>
                    <li>1 teaspoon chili powder</li>
                    <li>1 teaspoon turmeric powder</li>
                    <li>1 teaspoon coriander powder</li>
                    <li>1 tablespoon lemon juice</li>
                    <li>Salt to taste</li>
                </ul>
                <h2 className="mt-2 text-2xl font-bold text-gray-700">For the Curry Sauce:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>1 large onion, finely chopped</li>
                    <li>2 tomatoes, finely chopped</li>
                    <li>1 tablespoon fresh coriander leaves, chopped</li>
                    <li>1/2 cup yogurt</li>
                    <li>1/2 cup water</li>
                    <li>1 teaspoon garam masala</li>
                    <li>Salt to taste</li>
                    <li>Fresh coriander for garnishing</li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Cooking Instructions:</h2>
                <ul className="list-decimal ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li><strong>Marinate the Chicken:</strong> In a bowl, combine chicken pieces with garlic paste, ginger paste, chili powder, turmeric powder, coriander powder, lemon juice, and salt. Let it marinate for at least 30 minutes.</li>
                    <li><strong>Cook the Chicken:</strong> Heat oil in a large pan over medium heat. Add the marinated chicken and cook for 10-12 minutes until browned and cooked through. Remove from the pan and set aside.</li>
                    <li><strong>Prepare the Curry Sauce:</strong> In the same pan, add chopped onions and sauté until golden brown, about 5 minutes. Add chopped tomatoes and cook until soft and mushy, about 5 minutes. Stir in garam masala and cook for another minute.</li>
                    <li><strong>Add Yogurt and Water:</strong> Lower the heat, add yogurt, and mix well. Add water to adjust the consistency of the curry sauce.</li>
                    <li><strong>Combine Chicken with Sauce:</strong> Add the cooked chicken back into the pan, stir to combine, and let it simmer for 5-7 minutes.</li>
                    <li><strong>Garnish and Serve:</strong> Garnish with fresh coriander leaves. Serve hot with rice or naan.</li>
                </ul>
            </div>
        </div>
    );
};

export default CorianderChickenCurry;
