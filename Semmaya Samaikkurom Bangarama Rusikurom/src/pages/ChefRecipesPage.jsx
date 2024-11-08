import React from 'react';
import { useParams, Link } from 'react-router-dom';

const recipesData = {
    'chef-damu': [
        { id: "Grill", name: 'Grilled Chicken with Mushroom Sauce', description: 'Grilled Chicken with Mushroom Sauce features tender, juicy chicken breasts char-grilled to perfection, topped with a rich, creamy mushroom sauce made with fresh mushrooms, garlic, and a touch of cream.', image: '/images/Grilled Chicken with Mushroom Sauce.jpg' },
        { id: "Coriander", name: 'Coriander Chicken Curry', description: 'Coriander Chicken Curry is a fragrant, flavorful dish where tender chicken is simmered in a rich, aromatic gravy made with fresh coriander leaves, spices, and coconut.', image: '/images/Coriander Chicken Curry.jpg' },
    ],
    'venkatesh-bhat': [
        { id: "Mulai", name: 'Mulai Keerai Cutlet Recipe', description: 'Mulai Keerai Cutlet is a nutritious cutlet made from amaranth leaves (mulai keerai) mixed with spices and herbs, then shallow fried.', image: '/images/Mulaikeerai Cutlet  Recipe.JPG' },
        { id: "Raw", name: 'Raw Mango Chutney', description: 'Raw Mango Chutney is a tangy and spicy condiment made with unripe mangoes, green chilies, and spices.', image: '/images/Raw Mango Chutney.jpg' },
    ],
    'mallika-badrinath': [
        { id: "Mango", name: 'Mango Adai', description: 'Mango Adai is a traditional South Indian lentil pancake made with fresh mangoes, adding a delightful sweetness and unique flavor.', image: '/images/Mango Adai.jpg' },
        { id: "Badusha", name: 'Badusha without Curd/Yogurt', description: 'Badusha without Curd/Yogurt is a flaky, deep-fried Indian sweet made without yogurt, resulting in a light, crunchy texture soaked in sugar syrup.', image: '/images/Badusha.jpeg' },
    ],
    'koushik': [
        { id: "Panner", name: 'Paneer Tikka Quesadilla', description: 'Paneer Tikka Quesadilla is a fusion dish combining spicy paneer tikka with a quesadilla, bringing together Indian and Mexican flavors.', image: '/images/Panner Tikka.jpg' },
        { id: "Quino", name: 'Quinoa Biryani', description: 'Quinoa Biryani is a healthy take on the classic biryani, made with quinoa instead of rice, and loaded with aromatic spices and vegetables.', image: '/images/Quino Biriyani.jpg' },
    ],
    'madhampatty-rangaraj': [
        { id: "Chettinad", name: 'Chettinad Chicken Curry', description: 'Chettinad Chicken Curry is a flavorful South Indian curry with a spicy, tangy base made with fresh ground spices.', image: '/images/Chettinad Chicken Curry.jpg' },
        { id: "Mutton", name: 'Mutton Sukka', description: 'Mutton Sukka is a dry, spicy mutton dish cooked with a blend of traditional spices, ideal for pairing with rice or roti.', image: '/images/Mutton Sukka.jpg' },
    ],
};

const ChefRecipesPage = () => {
    const { id } = useParams();
    const chefName = id.replace('-', ' ').toLowerCase();
    const formattedChefName = chefName.charAt(0).toUpperCase() + chefName.slice(1);
    const recipes = recipesData[id] || [];

    return (
        <div className="p-10 bg-[#faf9fb] flex-1">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold mb-6">Famous Recipes by {formattedChefName}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recipes.map((recipe, index) => (
                        <Link to={`/${recipe.id}`} key={index}>
                            <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition h-full flex flex-col">
                                <img src={recipe.image} alt={recipe.name} className="h-48 w-full object-cover rounded-md" />
                                <h2 className="text-xl font-bold mt-4 text-gray-800">{recipe.name}</h2>
                                <p className="text-gray-600 mt-2 text-ellipsis overflow-hidden line-clamp-3">{recipe.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChefRecipesPage;
