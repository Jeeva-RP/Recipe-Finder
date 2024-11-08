// src/pages/IndianFestivalRecipes.jsx
import React from 'react';

const IndianFestivalRecipes = () => {
    return (
        <div className="p-10 bg-[#faf9fb] flex-1">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold mb-6">Indian Festival Recipes</h1>

                {/* Add introductory content */}
                <section className="mb-8">
                    <p className="text-gray-700 leading-relaxed">
                        India is a heterogeneous mix of different cultures, religions, and languages. Therefore, you will see different festivals celebrated with pride, joy, and unity in our country. Every day in India is unique and so are its festivals. Indian festivals are always related to the seasons. The special dishes prepared during these festivals also have a deeper meaning since each dish is carefully prepared to complement that particular climate or weather change.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        Moreover, the recipes that come from different regions have their own unique characteristic and flavor as well. Among the most popular festivals are Diwali, Ramzan Eid, Christmas, Parsi New Year, Mahavir Jayanti, etc. Modern festivals like Valentine’s Day also have their own special recipes and dishes. Therefore, there is plenty to indulge in and get spoilt when it comes to the food culture of Indian festivals.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        Sweets dishes are common in almost all the festivals. Sweets like chikki made from jaggery and til (sesame) have their own importance in Makara Sankranti since the heat of these ingredients provides a warm relief in the chilly season of winter. Also, festivals like Diwali have their own menu of chakli, ladus, barfi, and other sweet and crispy dishes.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        Festivals like Pongal are celebrated throughout the country with different names such as Bhogi, Baisakhi, Makar Sankranti, etc. Sweet preparations from cereals, millets, and other grains are popular dishes of these festivals since they mark the onset of the harvesting season in India.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        Some festivals like Eid, Christmas, etc., have their own share of non-vegetarian dishes as well as they are considered to be special recipes of these festivals. People experiment with different types of cakes during Christmas and Easter, such as frosted ice cake, cherry cake, plum cake, etc. The impact of Mughal cuisines on the Indian food culture cannot be ignored, especially when we consider the traditional recipes cooked in a typical Muslim family.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        On the other hand, the Southern regions of India have always included spices and special ingredients like tamarind, coconut, etc., in their recipes. These ingredients come to play during their festivals as well, and we are able to taste different flavors and dishes when we visit these places. Although the festival recipes are a little heavy on fat and calories, you can definitely indulge in them during festivals and once in a while when you crave them.
                    </p>
                </section>

                {/* Add external link */}
                <div className="mt-8">
                    <p className="text-gray-700">
                        Refer to this website for more information: 
                        <a 
                            href="https://www.awesomecuisine.com/categories/festival/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-blue-500 hover:underline"
                        >
                            https://www.awesomecuisine.com/categories/festival/
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IndianFestivalRecipes;
