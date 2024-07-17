import styled from 'styled-components/native';
import Text from '../../components/Text';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.yellowMedium};
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.gray2};
  width: 70%;
  height: 45px;
  border-radius: 16px;
  margin: 5px;
  align-self: center;
`;

export const Pressable = styled(RectButton)`
  align-items: center;
  border-radius: 16px;
  height: 45px;
  justify-content: center;
`;

export const Title = styled(Text).attrs({
  variant: 'body20-bold',
})`
  color: ${({theme}) => theme.colors.deepBlue};
`;
