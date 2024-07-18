import React, {useState} from 'react';
import {
  ScrollView,
  View,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../common/ui/theme/colors';
import {
  InputContainer,
  Label,
  TargetContainer,
  TextCalories,
  Title,
  styles,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import Button from '../../common/ui/components/Button';
import SearchButton from '../../common/ui/components/SearchButton';
import imgFondo from '../../assets/imgs/imgFondo2.jpg'; // Asegúrate de que la ruta sea correcta

const RecipeSelectorScreen: React.FC = () => {
  const [calorieRange, setCalorieRange] = useState({min: 100, max: 3500});
  const [manualCalories, setManualCalories] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [showCuisineOptions, setShowCuisineOptions] = useState(false);
  const navigation = useNavigation();

  const handleSearch = () => {
    console.log(
      'Buscar recetas con las siguientes opciones:',
      calorieRange,
      cuisine,
    );
    navigation.navigate('Blank', {calorieRange, cuisine});
  };

  const handleManualCaloriesChange = (text: string) => {
    // Validar que el texto ingresado sea un número válido
    if (/^\d+$/.test(text)) {
      const calories = parseInt(text);
      setManualCalories(text);
      setCalorieRange({min: calories - 100, max: calories + 100});
    } else {
      setManualCalories('');
    }
  };

  const cuisineOptions = [
    'American',
    'Asian',
    'British',
    'Caribbean',
    'Chinese',
    'French',
    'Indian',
    'Italian',
    'Japanese',
    'Mexican',
    'Middle Eastern',
    'Mediterranean',
    'Thai',
  ];

  return (
    <ImageBackground source={imgFondo} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <TargetContainer>
          <Title>Plan your meal</Title>
          <InputContainer>
            <TextCalories>
              {calorieRange.min} - {calorieRange.max} kcal
            </TextCalories>
          </InputContainer>
          <InputContainer>
            <Label>Manual Calories</Label>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter calories"
              value={manualCalories}
              onChangeText={handleManualCaloriesChange}
            />
          </InputContainer>
          <InputContainer>
            <Label onPress={() => setShowCuisineOptions(!showCuisineOptions)}>
              {showCuisineOptions
                ? 'Hide Cuisine Options'
                : 'Show Cuisine Options'}
            </Label>
            {showCuisineOptions && (
              <View style={styles.cuisineOptionsContainer}>
                {cuisineOptions.map(option => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => {
                      setCuisine(option);
                      setShowCuisineOptions(false);
                    }}
                    style={[
                      styles.cuisineOption,
                      cuisine === option && styles.selectedCuisineOption,
                    ]}>
                    <Text>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </InputContainer>
          <SearchButton title="Search" onPress={handleSearch} />
        </TargetContainer>
      </ScrollView>
    </ImageBackground>
  );
};

export default RecipeSelectorScreen;
