import React from 'react';

const PaneerTikkaQuesadilla = () => {
    return (
        <div className="p-10 flex-1 bg-[#faf9fb]">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">Paneer Tikka Quesadilla Recipe</h1>
                <img src="public\images\Panner Tikka.jpg" alt="Paneer Tikka Quesadilla" className="w-full h-64 object-cover mb-4" />
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Nutritional Information:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>Calories: 350 per serving</li>
                    <li>Servings: 4</li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Ingredients:</h2>
                <h2 className="mt-2 text-1xl font-bold text-gray-700">For the Paneer Tikka Marinade:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>200g paneer (cottage cheese), cubed</li>
                    <li>2 tablespoons yogurt</li>
                    <li>1 tablespoon ginger-garlic paste</li>
                    <li>1 tablespoon red chili powder</li>
                    <li>1 teaspoon garam masala</li>
                    <li>1 teaspoon cumin powder</li>
                    <li>1 tablespoon lemon juice</li>
                    <li>Salt to taste</li>
                    <li>2 tablespoons oil</li>
                </ul>
                <h2 className="mt-2 text-2xl font-bold text-gray-700">For the Quesadilla:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>4 flour tortillas</li>
                    <li>1/2 cup shredded cheese (cheddar or mozzarella)</li>
                    <li>1/4 cup sliced bell peppers (optional)</li>
                    <li>1/4 cup sliced onions (optional)</li>
                    <li>1 tablespoon olive oil or butter</li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Cooking Instructions:</h2>
                <ul className="list-decimal ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li><strong>Marinate the Paneer:</strong> In a bowl, mix the yogurt, ginger-garlic paste, red chili powder, garam masala, cumin powder, lemon juice, and salt to form the marinade.</li>
                    <li>Add the paneer cubes to the marinade and mix well. Let it marinate for at least 30 minutes (or refrigerate for up to 2 hours).</li>
                    <li><strong>Cook the Paneer:</strong> Heat 1 tablespoon of oil in a pan over medium heat. Add the marinated paneer cubes and cook for 4-5 minutes until they are slightly charred and cooked through. Remove from heat and set aside.</li>
                    <li><strong>Prepare the Quesadilla:</strong> Heat a separate skillet or griddle over medium heat. Place one tortilla on the pan and cook for 1-2 minutes until lightly golden.</li>
                    <li>Flip the tortilla and add some shredded cheese, a few paneer tikka cubes, and optional vegetables like bell peppers and onions.</li>
                    <li>Place the second tortilla on top and press gently to form a sandwich. Cook for another 2-3 minutes on each side until the quesadilla is crispy and golden, and the cheese has melted inside.</li>
                    <li><strong>Serve:</strong> Remove the quesadilla from the skillet, cut into wedges, and serve hot with chutney or salsa of your choice.</li>
                </ul>
            </div>
        </div>
    );
};

export default PaneerTikkaQuesadilla;
