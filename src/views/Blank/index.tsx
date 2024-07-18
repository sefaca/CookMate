import React, {useState, useEffect} from 'react';
import {ScrollView, ActivityIndicator, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  AppTitle,
  CardsContainer,
  Container,
  Header,
  CardWrapper,
  Input,
} from './styles';
import type {Props} from './types';
import Card from '../../common/ui/components/Card';
import useRecipes from './viewmodel';

export const Blank: React.FC<Props> = () => {
  const [searchText, setSearchText] = useState('');
  const {recipes, loading, error, fetchRecipes} = useRecipes('');
  const navigation = useNavigation();
  const route = useRoute();

  const {calorieRange, cuisine} = route.params || {
    calorieRange: {min: 100, max: 3500},
    cuisine: '',
  };

  useEffect(() => {
    const fetchRecipesByFilters = async () => {
      try {
        await fetchRecipes(searchText, calorieRange, cuisine);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipesByFilters();
  }, [searchText, calorieRange, cuisine]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error fetching recipes: {error.message}</Text>;
  }

  if (recipes.length === 0) {
    return (
      <Container>
        <Text>No recipes found. Try adjusting your search criteria.</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <AppTitle>CookMate</AppTitle>
        <Input
          placeholder="Search Recipes"
          value={searchText}
          onChangeText={setSearchText}
        />
      </Header>
      <CardsContainer>
        <ScrollView>
          {recipes.map(recipe => (
            <CardWrapper key={recipe.uri}>
              <Card
                image={recipe.image}
                title={recipe.label}
                description={recipe.source || 'No description available'}
                onPress={() => navigation.navigate('RecipeDetail', {recipe})}
              />
            </CardWrapper>
          ))}
        </ScrollView>
      </CardsContainer>
    </Container>
  );
};

export default Blank;
