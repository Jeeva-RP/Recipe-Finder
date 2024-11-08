import React from 'react';

const QuinoaBiryani = () => {
    return (
        <div className="p-10 flex-1 bg-[#faf9fb]">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">Quinoa Biryani Recipe</h1>
                <img src="public\images\Quino Biriyani.jpg" alt="Quinoa Biryani" className="w-full h-64 object-cover mb-4" />
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Nutritional Information:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>Calories: 350 per serving</li>
                    <li>Servings: 4</li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Ingredients:</h2>
                <h2 className="mt-2 text-1xl font-bold text-gray-700">For the Biryani:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>1 cup quinoa, rinsed</li>
                    <li>1 onion, thinly sliced</li>
                    <li>2 tomatoes, chopped</li>
                    <li>1 cup mixed vegetables (carrots, peas, beans, etc.)</li>
                    <li>1/4 cup chopped cilantro (coriander leaves)</li>
                    <li>1/4 cup chopped mint leaves</li>
                    <li>2 tablespoons biryani masala</li>
                    <li>1 teaspoon ginger-garlic paste</li>
                    <li>2 green chilies, slit (optional)</li>
                    <li>1/2 teaspoon turmeric powder</li>
                    <li>1 teaspoon garam masala</li>
                    <li>1/2 cup coconut milk or yogurt</li>
                    <li>1/4 cup water</li>
                    <li>Salt to taste</li>
                    <li>2 tablespoons oil or ghee (clarified butter)</li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Cooking Instructions:</h2>
                <ul className="list-decimal ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li><strong>Cook the Quinoa:</strong> Rinse the quinoa under cold water until it runs clear. Cook quinoa in a pot or pressure cooker with 1 1/4 cups of water and a pinch of salt. Once cooked, fluff it with a fork and set aside.</li>
                    <li><strong>Prepare the Biryani Base:</strong> Heat oil or ghee in a large pan or pot. Add sliced onions and sauté until they turn golden brown.</li>
                    <li>Add ginger-garlic paste, slit green chilies, and sauté for a minute until fragrant.</li>
                    <li>Add chopped tomatoes, turmeric powder, garam masala, and biryani masala. Cook until the tomatoes soften and the spices release their aroma (about 5 minutes).</li>
                    <li>Now, add the mixed vegetables and sauté for 2-3 minutes. Add coconut milk or yogurt and cook for another 2 minutes to combine all the ingredients well.</li>
                    <li><strong>Layer the Biryani:</strong> Add the cooked quinoa to the vegetable mixture. Gently mix to combine without breaking the quinoa. Add water, chopped mint, and cilantro leaves. Adjust the salt to taste.</li>
                    <li>Cover the pan and cook on low heat for 10-12 minutes to allow the flavors to infuse into the quinoa.</li>
                    <li><strong>Serve:</strong> Fluff the biryani with a fork and serve hot, garnished with additional cilantro and mint leaves. Serve with raita or a side of salad for a complete meal.</li>
                </ul>
            </div>
        </div>
    );
};

export default QuinoaBiryani;
