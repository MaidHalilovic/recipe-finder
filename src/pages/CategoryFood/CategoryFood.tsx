import React, { useEffect, useState } from "react";
import "./categoryFood.css";
import axios from "axios";

interface CategoryItem {
  strCategory: string;
}

interface CategoriesResponse {
  meals: CategoryItem[] | null;
}

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

interface MealsResponse {
  meals: Meal[] | null;
}

const CategoryFood: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [category, setCategory] = useState<string>("");
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loadingCats, setLoadingCats] = useState<boolean>(false);
  const [loadingMeals, setLoadingMeals] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    setLoadingCats(true);
    setError(null);
    try {
      const { data } = await axios.get<CategoriesResponse>(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );
      setCategories(data.meals?.map((m) => m.strCategory) ?? []);
    } catch (err) {
      console.error(err);
      setError("Failed to load categories");
    } finally {
      setLoadingCats(false);
    }
  };

  const fetchCategoryMeals = async (cat: string) => {
    if (!cat) {
      setMeals([]);
      return;
    }
    setLoadingMeals(true);
    setError(null);
    try {
      const { data } = await axios.get<MealsResponse>(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(
          cat
        )}`
      );
      setMeals(data.meals ?? []);
    } catch (err) {
      console.error(err);
      setError("Failed to load meals for selected category");
      setMeals([]);
    } finally {
      setLoadingMeals(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (category) fetchCategoryMeals(category);
  }, [category]);

  return (
    <div className='category-page'>
      <h2>Category Meals</h2>

      <div className='controls'>
        {loadingCats ? (
          <p>Loading categories...</p>
        ) : (
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='category-select'
            aria-label='Select category'
          >
            <option value=''>-- Select category --</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        )}
      </div>

      {error && <p className='error'>{error}</p>}

      {loadingMeals && <p>Loading meals...</p>}

      {!loadingMeals && !error && meals.length === 0 && category && (
        <p>No meals found for "{category}".</p>
      )}

      {!loadingMeals && !error && meals.length > 0 && (
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

export default CategoryFood;
