import { Search, Filter } from "lucide-react"; // Import filter icon
import RecipeCard from "../components/RecipeCard";
import { useEffect, useState } from "react";
import { getRandomColor } from "../lib/utils";

const APP_ID = 'd51ca6ec';
const APP_KEY = 'b76b6bfa265ba0448a5b9c81874fd439';

const HomePage = () => {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState("chicken");
	const [caloriesFrom, setCaloriesFrom] = useState("");
	const [caloriesTo, setCaloriesTo] = useState("");
	const [selectedDiet, setSelectedDiet] = useState("");
	const [selectedAllergy, setSelectedAllergy] = useState("");
	const [showFilterDropdown, setShowFilterDropdown] = useState(false);

	const fetchRecipes = async () => {
		setLoading(true);
		setRecipes([]);
		const calorieFilter = caloriesFrom || caloriesTo ? `&calories=${caloriesFrom}-${caloriesTo}` : "";
		const dietFilter = selectedDiet ? `&health=${selectedDiet}` : "";
		const allergyFilter = selectedAllergy ? `&health=${selectedAllergy}` : "";
		try {
			const res = await fetch(
				`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public${calorieFilter}${dietFilter}${allergyFilter}`
			);

			// Check if the response is OK
			if (!res.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await res.json();
			setRecipes(data.hits);
		} catch (error) {
			console.error("Fetch error: ", error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchRecipes();
	}, [searchQuery, caloriesFrom, caloriesTo, selectedDiet, selectedAllergy]);

	const handleSearchRecipe = (e) => {
		e.preventDefault();
		setSearchQuery(e.target[0].value);
	};

	const toggleFilterDropdown = () => {
		setShowFilterDropdown((prev) => !prev);
	};

	const dietOptions = [
		"Vegetarian", "Vegan", "Paleo", "High-Fiber", "High-Protein",
		"Low-Carb", "Low-Fat", "Low-Sodium", "Low-Sugar", "Alcohol-Free",
		"Balanced", "Immunity"
	];

	const allergyOptions = [
		"Gluten", "Dairy", "Eggs", "Soy", "Wheat",
		"Fish", "Shellfish", "Tree Nuts", "Peanuts"
	];

	return (
		<div className='bg-[#faf9fb] p-10 flex-1'>
			<div className='max-w-screen-lg mx-auto'>
				<form onSubmit={handleSearchRecipe} className="relative">
					<label className='input shadow-md flex items-center gap-2'>
						<Search size={"24"} />
						<input
							type='text'
							className='text-sm md:text-md grow'
							placeholder='What do you want to cook today?'
						/>
						<Filter size={"24"} className="cursor-pointer" onClick={toggleFilterDropdown} />
					</label>
					{showFilterDropdown && (
						<div className="absolute z-10 bg-white shadow-lg mt-1 rounded w-full">
							<div className="p-4">
								<h3 className="font-bold">Calories</h3>
								<label className="flex flex-col">
									<span>From</span>
									<input
										type="number"
										value={caloriesFrom}
										onChange={(e) => setCaloriesFrom(e.target.value)}
										placeholder="Calories from"
										className="border p-1"
									/>
								</label>
								<label className="flex flex-col mt-2">
									<span>To</span>
									<input
										type="number"
										value={caloriesTo}
										onChange={(e) => setCaloriesTo(e.target.value)}
										placeholder="Calories to"
										className="border p-1"
									/>
								</label>
							</div>
							<div className="p-4 border-t">
								<h3 className="font-bold">Diet</h3>
								{dietOptions.map((option) => (
									<label key={option} className="flex items-center">
										<input
											type="radio"
											name="diet"
											value={option.toLowerCase()}
											onChange={(e) => setSelectedDiet(e.target.value)}
											className="mr-2"
										/>
										{option}
									</label>
								))}
							</div>
							<div className="p-4 border-t">
								<h3 className="font-bold">Ingredients</h3>
								{allergyOptions.map((option) => (
									<label key={option} className="flex items-center">
										<input
											type="radio"
											name="allergy"
											value={option.toLowerCase()}
											onChange={(e) => setSelectedAllergy(e.target.value)}
											className="mr-2"
										/>
										{option}
									</label>
								))}
							</div>
						</div>
					)}
				</form>

				<h1 className='font-bold text-3xl md:text-5xl mt-4'>Recommended Recipes</h1>
				<p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>Popular choices</p>

				<div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
					{!loading &&
						recipes.map(({ recipe }, index) => (
							<RecipeCard key={index} recipe={recipe} {...getRandomColor()} />
						))}

					{loading &&
						[...Array(9)].map((_, index) => (
							<div key={index} className='flex flex-col gap-4 w-full'>
								<div className='skeleton h-32 w-full'></div>
								<div className='flex justify-between'>
									<div className='skeleton h-4 w-28'></div>
									<div className='skeleton h-4 w-24'></div>
								</div>
								<div className='skeleton h-4 w-1/2'></div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
