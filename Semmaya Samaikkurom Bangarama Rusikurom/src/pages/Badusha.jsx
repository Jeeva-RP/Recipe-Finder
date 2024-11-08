import React from 'react';

const Badusha = () => {
    return (
        <div className="p-10 flex-1 bg-[#faf9fb]">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold text-gray-700 mb-4">Badusha (Without Curd/Yogurt) Recipe</h1>
                <img src="public\images\Badusha.jpeg" alt="Badusha" className="w-full h-64 object-cover mb-4" />
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Nutritional Information:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>Calories: 350 per serving</li>
                    <li>Servings: 10 pieces</li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Ingredients:</h2>
                <h2 className="mt-2 text-1xl font-bold text-gray-700">For the Dough:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>2 cups all-purpose flour (maida)</li>
                    <li>1/4 cup ghee (clarified butter)</li>
                    <li>1/4 cup warm water (adjust as needed)</li>
                    <li>1/4 teaspoon baking soda</li>
                    <li>1/2 teaspoon cardamom powder</li>
                    <li>A pinch of salt</li>
                    <li>1/4 cup sugar (optional, for sweetness in dough)</li>
                </ul>
                <h2 className="mt-2 text-2xl font-bold text-gray-700">For the Sugar Syrup:</h2>
                <ul className="list-disc ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li>1 cup sugar</li>
                    <li>1/4 cup water</li>
                    <li>1/2 teaspoon cardamom powder</li>
                    <li>1/2 teaspoon lemon juice</li>
                </ul>
                <h2 className="mt-6 text-2xl font-bold text-gray-700">Cooking Instructions:</h2>
                <ul className="list-decimal ml-5 mt-2 text-lg text-gray-600 leading-7">
                    <li><strong>Prepare the Dough:</strong> In a large mixing bowl, combine all-purpose flour, baking soda, cardamom powder, and a pinch of salt.</li>
                    <li>Add ghee to the dry ingredients and mix it well until the flour becomes crumbly.</li>
                    <li>Gradually add warm water and knead it into a soft, smooth dough (not too sticky). Let the dough rest for 15-20 minutes.</li>
                    <li><strong>Make the Sugar Syrup:</strong> In a small pan, combine sugar and water and bring it to a boil, stirring until the sugar dissolves.</li>
                    <li>Once it boils, add cardamom powder and lemon juice, and let it simmer for 5-7 minutes until it forms a sticky consistency. Set it aside.</li>
                    <li><strong>Shape the Badushas:</strong> After the dough has rested, divide it into small equal-sized balls (about the size of a golf ball).</li>
                    <li>Flatten each ball slightly with your fingers, then make a small indentation in the center using your thumb to form the characteristic Badusha shape.</li>
                    <li><strong>Fry the Badushas:</strong> Heat oil in a deep pan on medium-low heat. Once the oil is hot, gently drop the Badushas into the oil, one at a time, and fry them in batches.</li>
                    <li>Fry until they turn golden brown and crisp, ensuring that they cook evenly by occasionally flipping them over.</li>
                    <li><strong>Soak in Sugar Syrup:</strong> Once the Badushas are fried, immediately dip them into the warm sugar syrup and let them soak for 5 minutes.</li>
                    <li>Remove from the syrup and place them on a plate to cool down and absorb the sweetness.</li>
                    <li><strong>Serve:</strong> Once cooled, serve the Badushas as a delicious sweet treat.</li>
                </ul>
            </div>
        </div>
    );
};

export default Badusha;
