import React from "react";
import "./homePage.css";
import Inputs from "../../components/Inputs/Inputs";
import RandomMeals from "../../components/RandomMeals/RandomMeals";

const HomePage = () => {
  return (
    <div className='homePage'>
      <div>
        <h1>Recipes</h1>
      </div>
      <div className='inputs'>
        <Inputs />
      </div>
      <div className='randomMeals'>
        <RandomMeals />
      </div>
    </div>
  );
};

export default HomePage;
