/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import {Props} from './types';
import styles, { Content, Ingredients, Summary, Title } from './styles';

const RecipeDetail: React.FC<Props> = ({route}) => {
  const {recipe} = route.params;

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      style={styles.container}>
      <Image source={{uri: recipe.image}} style={styles.image} />
      <Title>{recipe.label}</Title>
      <Summary>{recipe.source || 'No summary available'}</Summary>
      <Ingredients>Ingredients</Ingredients>
      {recipe.ingredientLines ? (
        recipe.ingredientLines.map((ingredient, index) => (
          <Content key={index} style={styles.ingredient}>
            {ingredient}
          </Content>
        ))
      ) : (
        <Text>No ingredients available</Text>
      )}
      <Ingredients>Nutritional Information</Ingredients>
      {recipe.totalNutrients ? (
        Object.entries(recipe.totalNutrients).map(([key, nutrient]) => (
          <Content key={key} style={styles.nutrient}>
            {nutrient.label}: {nutrient.quantity.toFixed(2)} {nutrient.unit}
          </Content>
        ))
      ) : (
        <Text>No nutritional information available</Text>
      )}
    </ScrollView>
  );
};

export default RecipeDetail;
