import React from 'react';
import {ScrollView, ActivityIndicator, Text} from 'react-native';
import VoiceButton from '../../common/ui/components/VoiceButton';
import {
  AppTitle,
  CardsContainer,
  Container,
  Header,
  CardWrapper,
} from './styles';
import type {Props} from './types';
import Card from '../../common/ui/components/Card';
import useRecipes from './viewmodel';

export const Blank: React.FC<Props> = () => {
  const {recipes, loading, error} = useRecipes('italian');

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
              />
            </CardWrapper>
          ))}
        </ScrollView>
      </CardsContainer>
    </Container>
  );
};

export default Blank;
