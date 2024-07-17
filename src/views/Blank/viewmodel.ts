import {useState, useEffect} from 'react';
import axios from 'axios';

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipes = async (
    query: string,
    calorieRange: {min: number; max: number},
    cuisine: string,
  ) => {
    setLoading(true);
    setError(null);

    try {
      const params: any = {
        q: query,
        app_id: '2ff36a96',
        app_key: '1a3827c211c1a106ed1e49e76f6c66f5',
        from: 0,
        to: 2,
        calories: `${calorieRange.min}-${calorieRange.max}`,
      };

      if (cuisine) {
        params.cuisineType = cuisine;
      }

      console.log('Fetching recipes with params:', params);

      const response = await axios.get('https://api.edamam.com/search', {
        params,
      });

      const recipesData = response.data.hits.map(hit => hit.recipe);
      console.log('Fetched recipes:', recipesData);

      setRecipes(recipesData);
    } catch (err) {
      console.error(
        'Error fetching recipes:',
        err.response?.data ?? err.message,
      );
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {recipes, loading, error, fetchRecipes};
};

export default useRecipes;
