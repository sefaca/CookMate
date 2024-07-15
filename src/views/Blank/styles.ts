import styled from 'styled-components/native';
import Text from '../../common/ui/components/Text';
import {TextInput} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.blueSoft};
`;

export const Header = styled.View`
  margin-top: 60px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  background-color: ${({theme}) => theme.colors.blueSoft};
  padding-left: 20px;
  padding-right: 20px;
`;

export const AppTitle = styled(Text).attrs({
  variant: 'headline2',
})`
  color: ${({theme}) => theme.colors.blueBold};
  text-align: center;
  font-weight: bold;
`;

export const CardsContainer = styled.ScrollView``;

export const CardWrapper = styled.View``;

export const Input = styled(TextInput)`
  height: 40px;
  border-color: ${({theme}) => theme.colors.gray3};
  border-width: 1px;
  padding: 10px;
  margin: 10px;
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray2};
  border-radius: 10px;
`;
