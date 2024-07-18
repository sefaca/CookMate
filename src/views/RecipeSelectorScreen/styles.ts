/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import Text from '../../common/ui/components/Text';
import {StyleSheet} from 'react-native';

export const TargetContainer = styled.View`
  background-color: rgba(239, 239, 239, 0.9); /* Cambia el valor alfa (0.5) para ajustar la transparencia */
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  width: 100%;
`;

export const Title = styled(Text).attrs({
  variant: 'headline2',
})`
  margin-bottom: 5px;
  margin-left: 10px;
  text-align: center;
  font-weight: bold;
  color: ${({theme}) => theme.colors.deepBlue};
`;

export const TextCalories = styled(Text).attrs({
  variant: 'body17-semibold',
})`
  color: ${({theme}) => theme.colors.yellowMedium};
  text-align: center;
`;

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 5px;
`;

export const Label = styled(Text).attrs({
  variant: 'body17-semibold',
})`
  margin-bottom: 10px;
  margin-left: 40px;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    width: '80%',
    height: 40,
    alignSelf: 'center',
  },
  optionsContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    marginLeft: 40,
    width: '70%',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  input: {
    marginLeft: 37,
  },
  cuisineOptionsContainer: {
    borderWidth: 2,
    width: '70%',
    marginLeft: 40,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
    borderColor: '#FFFFFF',
  },
  cuisineOption: {
    marginLeft: 20,
  },
});
