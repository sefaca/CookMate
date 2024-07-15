import React, {useState, useEffect} from 'react';
import {ScrollView, ActivityIndicator, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import VoiceButton from '../../common/ui/components/VoiceButton';
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

  // Actualizar las recetas cuando cambie el texto de búsqueda
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchRecipes(searchText);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  if (error) {
    return <Text>Error fetching recipes: {error.message}</Text>;
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
        <VoiceButton
          title="Voice"
          onPress={() => console.log('Voice button pressed')}
        />
      </Header>
      <CardsContainer>
        <ScrollView>
          {recipes.map(recipe => (
            <CardWrapper key={recipe.id}>
              <Card
                image={recipe.image}
                title={recipe.title}
                description={recipe.summary || 'No description available'}
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
