import React from 'react';
import {ScrollView} from 'react-native';
import VoiceButton from '../../common/ui/components/VoiceButton';
import {
  AppTitle,
  Container,
  Header,
  CardsContainer,
  CardWrapper,
} from './styles';
import type {Props} from './types';
import Card from '../../common/ui/components/Card';

export const Blank: React.FC<Props> = () => {
  // Ejemplo de datos de tarjetas (simulados)
  const characters = [
    {
      id: 1,
      image: 'https://via.placeholder.com/350x180',
      title: 'Alive',
      description: 'Character 1',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/350x180',
      title: 'Dead',
      description: 'Character 2',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/350x180',
      title: 'Unknown',
      description: 'Character 3',
    },
  ];

  return (
    <Container>
      <Header>
        <AppTitle>CookMate</AppTitle>
        <VoiceButton onPress={() => addExpense(setExpenses3, 'Transport')} />
      </Header>
      <CardsContainer>
        <ScrollView>
          {characters.map(character => (
            <CardWrapper key={character.id}>
              <Card
                image={character.image}
                title={character.title}
                description={character.description}
                id={''}
              />
            </CardWrapper>
          ))}
        </ScrollView>
      </CardsContainer>
    </Container>
  );
};

export default Blank;
