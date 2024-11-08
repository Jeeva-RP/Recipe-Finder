// src/components/ChefCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    return (
        <Link to={`/chef/${chef.id}`} className="block">
            <div className="border rounded-lg p-4 hover:shadow-lg transition">
                <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-48 object-cover rounded-md"
                />
                <h2 className="mt-4 text-xl font-bold text-center">{chef.name}</h2>
            </div>
        </Link>
    );
};

export default ChefCard;
