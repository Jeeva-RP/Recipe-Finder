import React from 'react';

const Grill = () => {
    return (
        <div className="p-10 flex-1 bg-[#faf9fb]">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">Grilled Chicken With Mushroom Sauce Recipe</h1>
                <img src="\images\Grilled Chicken with Mushroom Sauce.jpg" alt="Grilled Chicken with Mushroom Sauce" className="w-full h-64 object-cover mb-4" />
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Nutritional Information:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>Calories: 3586  </li>
                    <li>Servings: 2 </li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Ingredients:</h2>
                <h2 className="mt-2 text-1xl font-bold text-gray-700">For the Grilled Chicken:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>2 boneless, skinless chicken breasts</li>
                    <li>2 tablespoons olive oil</li>
                    <li>1 teaspoon garlic powder</li>
                    <li>1 teaspoon onion powder</li>
                    <li>Salt and pepper to taste</li>
                    <li>1 teaspoon dried thyme (optional)</li>
                </ul>
                <h2 className="mt-2 text-2xl font-bold text-gray-700">For the Mushroom Sauce:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                
                    <li>1 cup fresh mushrooms, sliced</li>
                    <li>1 tablespoon butter</li>
                    <li>1/2 cup heavy cream</li>
                    <li>1/2 cup chicken broths</li>
                    <li>1 tablespoon Dijon mustard (optional)</li>
                    <li>Salt and pepper to taste</li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Cooking Instructions:</h2>
                <ul className="list-decimal ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li><strong>Prepare the Chicken:</strong> Preheat the grill or grill pan to medium-high heat.</li>
                    <li><strong>Grill the Chicken:</strong> Rub the chicken breasts with olive oil, garlic powder, onion powder, salt, pepper, and thyme.</li>
                    <li>Grill the chicken for 6-7 minutes per side until the internal temperature reaches 165°F (74°C) and the juices run clear.</li>
                    <li>Once grilled, remove the chicken from the grill and let it rest for a few minutes.</li>
                    <li><strong>Make the Mushroom Sauce:</strong> In a medium-sized pan, melt butter over medium heat.</li>
                    <li>Add the sliced mushrooms and sauté until soft and golden brown, about 5 minutes.</li>
                    <li>Add chicken broth and bring to a simmer. Let it cook for 2 minutes to reduce slightly.</li>
                    <li>Stir in the heavy cream and Dijon mustard, then simmer for 3-4 minutes until the sauce thickens.</li>
                    <li>Season with salt and pepper to taste.</li>
                    <li><strong>Serve:</strong> Place the grilled chicken on a plate and spoon the mushroom sauce over the top.</li>
                    <li>Garnish with fresh herbs (optional) and serve with your choice of side dish.</li>
                </ul>
            </div>
        </div>
    );
};

export default Grill;
