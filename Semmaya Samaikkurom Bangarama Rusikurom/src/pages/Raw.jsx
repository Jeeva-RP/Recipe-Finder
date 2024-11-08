import React from 'react';

const RawMangoChutney = () => {
    return (
        <div className="p-10 flex-1 bg-[#faf9fb]">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">Raw Mango Chutney Recipe</h1>
                <img src="public\images\Raw Mango Chutney.jpg" alt="Raw Mango Chutney" className="w-full h-64 object-cover mb-4" />
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Nutritional Information:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>Calories: 50 per serving</li>
                    <li>Servings: 6</li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Ingredients:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>1 large raw mango, peeled and grated</li>
                    <li>1 tablespoon oil</li>
                    <li>1 teaspoon mustard seeds</li>
                    <li>1 teaspoon cumin seeds</li>
                    <li>1/4 teaspoon asafoetida (hing)</li>
                    <li>2 tablespoons jaggery (or sugar, to taste)</li>
                    <li>1 tablespoon tamarind paste</li>
                    <li>1/2 teaspoon red chili powder</li>
                    <li>1/2 teaspoon turmeric powder</li>
                    <li>Salt to taste</li>
                    <li>1/2 cup water</li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Cooking Instructions:</h2>
                <ul className="list-decimal ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li><strong>Prepare the Tempering:</strong> Heat oil in a pan. Add mustard seeds and cumin seeds. Once they splutter, add asafoetida (hing) and sauté for a few seconds.</li>
                    <li><strong>Cook the Mango:</strong> Add the grated raw mango to the pan and sauté for 2-3 minutes, allowing it to soften slightly.</li>
                    <li><strong>Make the Chutney:</strong> Add water, red chili powder, turmeric powder, and salt. Stir well and let it cook for 5-7 minutes until the mango softens further.</li>
                    <li><strong>Add Sweetness and Tang:</strong> Add jaggery (or sugar) and tamarind paste. Stir the mixture, allowing the jaggery to melt and incorporate into the chutney.</li>
                    <li><strong>Simmer:</strong> Let the chutney simmer for another 5 minutes until it thickens to a chutney-like consistency.</li>
                    <li><strong>Cool and Serve:</strong> Allow the chutney to cool down. Serve with your favorite Indian dish, such as paratha, rice, or as a side to curries.</li>
                </ul>
            </div>
        </div>
    );
};

export default RawMangoChutney;
