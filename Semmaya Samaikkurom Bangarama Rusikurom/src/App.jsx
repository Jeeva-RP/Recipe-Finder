// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import RecipeDetails from './pages/RecipeDetails';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ChefListPage from './pages/ChefListPage'; 
import ChefDetailsPage from './pages/ChefDetailsPage'; 
import ChefRecipesPage from './pages/ChefRecipesPage';
import IndianFestivalRecipes from './pages/IndianFestivalRecipes';
import Footer from './components/Footer'; // Import the Footer component
import LogoPage from './pages/LogoPage'; // Import LogoPage
import Grill from './pages/Grill';
import CorianderChickenCurry from './pages/Coriander';
import MulaiKeeraiCutlet from './pages/Mulai';
import RawMangoChutney from './pages/Raw';
import MangoAdai from './pages/Mango';
import Badusha from './pages/Badusha';
import PaneerTikkaQuesadilla from './pages/Panner';
import QuinoaBiryani from './pages/Quino';
import ChettinadChickenCurry from './pages/Chettinad';
import MuttonSukka from './pages/Mutton';

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen"> {/* Change to flex-col and min-h-screen */}
                <div className="flex flex-1">
                    <Sidebar />
                    <div className="flex-1">
                        <Routes>
                            <Route path="/logo" element={<LogoPage />} /> {/* LogoPage route */}
                            <Route path="/" element={<HomePage />} /> {/* Home page route */}
                            <Route path="/favorites" element={<FavoritesPage />} />
                            <Route path="/recipe-details" element={<RecipeDetails />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/chefs" element={<ChefListPage />} />
                            <Route path="/chef/:id" element={<ChefDetailsPage />} />
                            <Route path="/chef/:id/recipes" element={<ChefRecipesPage />} />
                            <Route path="/grill" element={<Grill />} />
                            <Route path="/Coriander" element={<CorianderChickenCurry />} />
                            <Route path="/Mulai" element={<MulaiKeeraiCutlet/>} />
                            <Route path="/Raw" element={<RawMangoChutney/>} />
                            <Route path="/Mango" element={<MangoAdai/>} />
                            <Route path="/Badusha" element={<Badusha/>} />
                            <Route path="/Panner" element={<PaneerTikkaQuesadilla/>} />
                            <Route path="/Quino" element={<QuinoaBiryani/>} />
                            <Route path="/Chettinad" element={<ChettinadChickenCurry/>} />
                            <Route path="/Mutton" element={<MuttonSukka/>} />
                            <Route path="/festival-recipes" element={<IndianFestivalRecipes />} />
                        </Routes>
                    </div>
                </div>
                <Footer /> {/* Add Footer here */}
            </div>
        </Router>
    );
};

export default App;

