import React from "react";
import "./homePage.css";
import Inputs from "../../components/Inputs/Inputs";

const HomePage = () => {
  return (
    <div className='homePage'>
      <div>
        <h1>Recipes</h1>
      </div>
      <div className='inputs'>
        <Inputs />
      </div>
    </div>
  );
};

export default HomePage;

//5-6  random meals koji se refreshaju svaki put na reftesh stranice
//search bar ce se napraviti
//categories
//popular meals
//areas
