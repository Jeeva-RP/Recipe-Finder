import React from 'react';

const MuttonSukka = () => {
    return (
        <div className="p-10 flex-1 bg-[#faf9fb]">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">Mutton Sukka Recipe</h1>
                <img src="public\images\Mutton Sukka.jpg" alt="Mutton Sukka" className="w-full h-64 object-cover mb-4" />
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Nutritional Information:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>Calories: 450 per serving</li>
                    <li>Servings: 4</li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Ingredients:</h2>
                <h2 className="mt-2 text-1xl font-bold text-gray-700">For the Mutton Sukka:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>500g mutton (bone-in pieces)</li>
                    <li>2 tablespoons oil</li>
                    <li>1 large onion, thinly sliced</li>
                    <li>2 tomatoes, chopped</li>
                    <li>1 tablespoon ginger-garlic paste</li>
                    <li>2-3 green chilies, slit</li>
                    <li>1 teaspoon turmeric powder</li>
                    <li>1 tablespoon red chili powder</li>
                    <li>1 tablespoon coriander powder</li>
                    <li>1/2 teaspoon fennel seeds</li>
                    <li>1 teaspoon cumin seeds</li>
                    <li>2 bay leaves</li>
                    <li>1 teaspoon garam masala</li>
                    <li>Salt to taste</li>
                    <li>Fresh cilantro (coriander leaves) for garnish</li>
                    <li>1/2 cup water (adjust as needed)</li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Cooking Instructions:</h2>
                <ul className="list-decimal ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li><strong>Prepare the Mutton:</strong> Clean and cut the mutton into pieces. Set aside.</li>
                    <li><strong>Heat the Oil:</strong> In a large pot or pan, heat oil over medium heat. Add fennel seeds, cumin seeds, and bay leaves. Let them splutter for a few seconds.</li>
                    <li><strong>Sauté the Onions:</strong> Add sliced onions and sauté until golden brown and caramelized, about 8-10 minutes.</li>
                    <li><strong>Add Ginger-Garlic Paste:</strong> Add ginger-garlic paste and sauté for 2 minutes, allowing the raw smell to disappear.</li>
                    <li><strong>Add Spices and Tomatoes:</strong> Add turmeric powder, red chili powder, coriander powder, and salt. Stir well. Add chopped tomatoes and cook until they turn soft and oil separates from the masala, about 5 minutes.</li>
                    <li><strong>Cook the Mutton:</strong> Add the mutton pieces to the pot. Stir well to coat them with the masala. Cook for about 5-7 minutes until the mutton changes color.</li>
                    <li><strong>Simmer the Mutton:</strong> Add water to the pot, mix well, and cover. Let it cook for 40-45 minutes on low heat until the mutton becomes tender and cooked through.</li>
                    <li><strong>Finishing Touch:</strong> Once the mutton is cooked, remove the lid and let the curry dry out a bit, creating a thick, rich masala. Stir in garam masala and cook for 5 minutes.</li>
                    <li><strong>Serve:</strong> Garnish with fresh cilantro leaves and serve hot with rice, roti, or paratha.</li>
                </ul>
            </div>
        </div>
    );
};

export default MuttonSukka;
