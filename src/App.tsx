import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Recipes from "./pages/Recipes/Recipes";
import Category from "./pages/CategoryFood/CategoryFood";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/recipes' element={<Recipes />} />
          <Route path='/category' element={<Category />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
