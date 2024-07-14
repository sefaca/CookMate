/* eslint-disable prettier/prettier */
import {useState, useEffect} from 'react';
import axios from 'axios';

const useRecipes = (query: string) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          'https://api.spoonacular.com/recipes/complexSearch',
          {
            params: {
              query,
              number: 10,
              apiKey: '8950dbd43f9e4901894c97b30bbf7936',
            },
          },
        );

        const recipes = response.data.results;

        // Fetch detailed information for each recipe
        const detailedRecipes = await Promise.all(
          recipes.map(async recipe => {
            const detailResponse = await axios.get(
              `https://api.spoonacular.com/recipes/${recipe.id}/information`,
              {
                params: {
                  apiKey: '8950dbd43f9e4901894c97b30bbf7936',
                },
              },
            );
            return detailResponse.data;
          }),
        );

        setRecipes(detailedRecipes);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query]);

  return {recipes, loading, error};
};

export default useRecipes;
