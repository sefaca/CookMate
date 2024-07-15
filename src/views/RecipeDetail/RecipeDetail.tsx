/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import {Props} from './types';
import styles from './styles';

const RecipeDetail: React.FC<Props> = ({route}) => {
  const {recipe} = route.params;

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      style={styles.container}>
      <Image source={{uri: recipe.image}} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.summary}>{recipe.summary}</Text>
      <Text style={styles.sectionTitle}>Ingredients</Text>
      {recipe.extendedIngredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredient}>
          {ingredient.original}
        </Text>
      ))}
      <Text style={styles.sectionTitle}>Instructions</Text>
      {recipe.analyzedInstructions.map((instruction, index) => (
        <View key={index}>
          {instruction.steps.map((step, stepIndex) => (
            <Text key={stepIndex} style={styles.step}>
              {step.number}. {step.step}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default RecipeDetail;
