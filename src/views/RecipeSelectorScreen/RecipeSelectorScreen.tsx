import React, {useState} from 'react';
import {ScrollView, View, ImageBackground, TextInput} from 'react-native';
import Slider from '@react-native-community/slider';
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
import imgFondo from '../../assets/imgs/imgFondo.png'; // Asegúrate de que la ruta sea correcta

const RecipeSelectorScreen: React.FC = () => {
  const [calorieRange, setCalorieRange] = useState({min: 100, max: 3500});
  const [manualCalories, setManualCalories] = useState('');
  const navigation = useNavigation();

  const handleSearch = () => {
    console.log('Buscar recetas con las siguientes opciones:', calorieRange);
    navigation.navigate('Blank', {calorieRange});
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

  return (
    <ImageBackground source={imgFondo} style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <TargetContainer>
          <Title>Plan your meal</Title>
          <InputContainer>
            <TextCalories>
              {calorieRange.min} - {calorieRange.max} cal
            </TextCalories>
            {/* <Slider
              style={styles.slider}
              minimumValue={100}
              maximumValue={3500}
              minimumTrackTintColor={colors.sliderBlue}
              maximumTrackTintColor={colors.sliderBlueLight}
              thumbTintColor={colors.yellowMedium}
              value={calorieRange.min}
              step={100}
              trackHeight={10}
              onValueChange={value =>
                setCalorieRange({min: value, max: value + 100})
              }
            /> */}
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
          <SearchButton title="Search" onPress={handleSearch} />
        </TargetContainer>
      </ScrollView>
    </ImageBackground>
  );
};

export default RecipeSelectorScreen;
