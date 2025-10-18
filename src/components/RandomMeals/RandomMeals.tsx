import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RandomMeals.css";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory?: string;
  strArea?: string;
}

interface MealsResponse {
  meals: Meal[] | null;
}

const RandomMeals: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomMeals = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get<MealsResponse>(
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
      );
      setMeals(data.meals ?? []);
    } catch (err) {
      console.error(err);
      setError("Failed to load meals");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomMeals();
  }, []);

  return (
    <div className='random-meals'>
      <h2>Meals</h2>

      {loading && <p>Loading...</p>}
      {error && <p className='error'>{error}</p>}

      {!loading && !error && meals.length === 0 && <p>No meals found.</p>}

      {!loading && !error && meals.length > 0 && (
        <div className='meals-grid'>
          {meals.map((meal) => (
            <div className='meal-card' key={meal.idMeal}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RandomMeals;
