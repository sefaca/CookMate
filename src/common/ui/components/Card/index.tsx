import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Image, TitleRecipe, Description} from './styles'; // Asegúrate de importar correctamente los estilos
import type {Props} from './types';

const Card: React.FC<Props> = ({image, title, description}) => {
  return (
    <TouchableOpacity>
      <Container>
        <Image source={{uri: image}} />
        <TitleRecipe>{title}</TitleRecipe>
        <Description>{description}</Description>
      </Container>
    </TouchableOpacity>
  );
};

export default Card;
