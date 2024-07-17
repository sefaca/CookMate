/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Image, TitleRecipe, Description} from './styles';
import type {Props} from './types';

const Card: React.FC<Props> = ({image, title, description, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Image source={{uri: image}} />
        <TitleRecipe numberOfLines={1}>{title}</TitleRecipe>
        <Description numberOfLines={2}>{description}</Description>
      </Container>
    </TouchableOpacity>
  );
};

export default Card;
