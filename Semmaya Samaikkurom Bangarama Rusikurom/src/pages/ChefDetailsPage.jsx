// src/pages/ChefDetailsPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
const chefs = [
    {
        id: 'chef-damu',
        name: 'Chef Damu',
        bio: 'Chef Damu is known for his expertise in South Indian cuisine and his engaging cooking shows.',
    },
    {
        id: 'venkatesh-bhat',
        name: 'Venkatesh Bhat',
        bio: 'Venkatesh Bhat is a celebrity chef and host of the popular Tamil show "Samayal Samayal."',
    },
    {
        id: 'mallika-badrinath',
        name: 'Mallika Badrinath',
        bio: 'Mallika Badrinath is renowned for her cookbooks and television shows focusing on traditional Tamil recipes.',
    },
    {
        id: 'koushik',
        name: 'Chef Koushik S. A.K.A.',
        bio: 'Koushik, known as "MadChef," is popular for his modern take on traditional Tamil dishes.',
    },
    {
        id: 'madhampatty-rangaraj',
        name: 'Madhampatty Rangaraj',
        bio: 'Madhampatty Rangaraj is famous for his traditional Tamil cooking and innovative recipes.',
    },
];

const ChefDetailsPage = () => {
    const { id } = useParams();
    const chef = chefs.find(chef => chef.id === id);

    if (!chef) {
        return <div className="p-10">Chef not found!</div>;
    }

    return (
        <div className="p-10 bg-[#faf9fb] flex-1">
            <div className="max-w-screen-lg mx-auto text-center">
                <h1 className="text-3xl font-bold mb-2">{chef.name}</h1>
                <p className="text-gray-600 mb-4">{chef.bio}</p>
                <Link to={`/chef/${chef.id}/recipes`} className="text-blue-500 hover:underline">
                    View Favorite Recipes
                </Link>
            </div>
        </div>
    );
};

export default ChefDetailsPage;
