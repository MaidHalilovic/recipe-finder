import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomMeals: React.FC = () => {
  const [meals, setMeals] = useState<MealsResponse | null>(null);

  interface MealsResponse {
    strMeal: string;
    strCategory: string;
    strArea: string;
    strMealThumb: string;
  }

  const fetchRandomMeals = async () => {
    try {
      const data =
        await axios.get<MealsResponse>(`www.themealdb.com/api/json/v1/1/random.php
`);
      setMeals(data.data);
    } catch (error) {
      console.error("Error fetching random meals:", error);
    }
  };
  useEffect(() => {
    fetchRandomMeals();
  }, []);

  return <div>RandomMeals</div>;
};

export default RandomMeals;
