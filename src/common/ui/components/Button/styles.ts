import styled from 'styled-components/native';
import Text from '../../components/Text';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.buttonBeige};
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.brown};
  width: 70%;
  height: 35px;
  border-radius: 16px;
  margin: 5px;
  align-self: center;
`;

export const Pressable = styled(RectButton)`
  align-items: center;
  border-radius: 16px;
  height: 35px;
  justify-content: center;
`;

export const Title = styled(Text).attrs({
  variant: 'body17-semibold',
})`
  color: ${({theme}) => theme.colors.mediumBrown};
`;
