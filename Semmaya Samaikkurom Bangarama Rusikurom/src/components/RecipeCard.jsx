import { Heart, HeartPulse, Soup } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const getTwoValuesFromArray = (arr) => {
    return [arr[0], arr[1]];
};

const RecipeCard = ({ recipe, bg, badge }) => {
    const healthLabels = getTwoValuesFromArray(recipe.healthLabels);
    const [isFavorite, setIsFavorite] = useState(localStorage.getItem("favorites")?.includes(recipe.label));
    const navigate = useNavigate(); // Initialize navigate

    const addRecipeToFavorites = () => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const isRecipeAlreadyInFavorites = favorites.some((fav) => fav.label === recipe.label);

        if (isRecipeAlreadyInFavorites) {
            favorites = favorites.filter((fav) => fav.label !== recipe.label);
            setIsFavorite(false);
        } else {
            favorites.push(recipe);
            setIsFavorite(true);
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    };

    const handleClick = () => {
        navigate('/recipe-details', { state: { recipe } }); // Navigate to RecipeDetails with state
    };

    return (
        <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
            <a
                onClick={handleClick} // Call handleClick on click
                className='relative h-32 cursor-pointer'
            >
                <div className='skeleton absolute inset-0' />
                <img
                    src={recipe.image}
                    alt='recipe img'
                    className='rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500'
                    onLoad={(e) => {
                        e.currentTarget.style.opacity = 1;
                        e.currentTarget.previousElementSibling.style.display = "none";
                    }}
                />
                <div
                    className='absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center
                                gap-1 text-sm'
                >
                    <Soup size={16} /> {recipe.yield} Servings
                </div>

                <div
                    className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer'
                    onClick={(e) => {
                        e.preventDefault();
                        addRecipeToFavorites();
                    }}
                >
                    {!isFavorite && <Heart size={20} className='hover:fill-red-500 hover:text-red-500' />}
                    {isFavorite && <Heart size={20} className='fill-red-500 text-red-500' />}
                </div>
            </a>

            <div className='flex mt-1'>
                <p className='font-bold tracking-wide'>{recipe.label}</p>
            </div>
            <p className='my-2'>
                {recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)} Kitchen
            </p>

            <div className='flex gap-2 mt-auto'>
                {healthLabels.map((label, idx) => (
                    <div key={idx} className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
                        <HeartPulse size={16} />
                        <span className='text-sm tracking-tighter font-semibold'>{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeCard;
