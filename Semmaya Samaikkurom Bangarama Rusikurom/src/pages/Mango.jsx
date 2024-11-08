import React from 'react';

const MangoAdai = () => {
    return (
        <div className="p-10 flex-1 bg-[#faf9fb]">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">Mango Adai Recipe</h1>
                <img src="public\images\Mango Adai.jpg" alt="Mango Adai" className="w-full h-64 object-cover mb-4" />
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Nutritional Information:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>Calories: 150 per serving</li>
                    <li>Servings: 4</li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Ingredients:</h2>
                <h2 className="mt-2 text-1xl font-bold text-gray-700">For the Mango Adai Batter:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>1 cup rice</li>
                    <li>1/2 cup split urad dal (black gram dal)</li>
                    <li>1/4 cup chana dal (bengal gram dal)</li>
                    <li>1/4 cup moong dal (yellow lentils)</li>
                    <li>1 raw mango, grated</li>
                    <li>2 green chilies, chopped</li>
                    <li>1 tablespoon ginger, grated</li>
                    <li>1/2 teaspoon cumin seeds</li>
                    <li>1/4 teaspoon turmeric powder</li>
                    <li>1/2 teaspoon asafoetida (hing)</li>
                    <li>Salt to taste</li>
                    <li>Water as needed to make the batter</li>
                </ul>
                <h2 className="mt-2 text-2xl font-bold text-gray-700">For the Cooking:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>1 tablespoon oil for cooking</li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Cooking Instructions:</h2>
                <ul className="list-decimal ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li><strong>Prepare the Batter:</strong> Wash and soak rice and dals (urad dal, chana dal, moong dal) together in water for 3-4 hours or overnight.</li>
                    <li>Drain the soaked rice and dals, then grind them together in a blender or wet grinder with water until it forms a smooth batter (not too runny).</li>
                    <li>Once the batter is ready, mix in the grated mango, chopped green chilies, ginger, cumin seeds, turmeric powder, asafoetida, and salt.</li>
                    <li><strong>Cook the Adai:</strong> Heat a non-stick skillet or tawa over medium heat and lightly grease it with oil.</li>
                    <li>Pour a ladle of batter onto the pan and spread it out into a thick, round shape like a pancake.</li>
                    <li>Cook on medium heat for 3-4 minutes on one side, then flip it over and cook the other side for 2-3 minutes until golden and crispy.</li>
                    <li><strong>Serve:</strong> Serve the Mango Adai hot with coconut chutney or sambar on the side.</li>
                </ul>
            </div>
        </div>
    );
};

export default MangoAdai;
