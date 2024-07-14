import {Image as ImageBase} from 'react-native';
import styled from 'styled-components/native';
import Text from '../Text';

export const Container = styled.View`
  width: 350px;
  height: auto;
  border-width: 1px;
  background-color: ${({theme}) => theme.colors.white};
  border-color: ${({theme}) => theme.colors.gray5};
  border-radius: 8px;
  margin-top: 9px;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

export const Image = styled(ImageBase)`
  width: auto;
  height: 160px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const TitleRecipe = styled(Text).attrs({
  variant: 'headline3-bold',
})`
  margin-top: 10px;
  margin-left: 10px;
  color: ${({theme}) => theme.colors.blueBold};
`;

export const Description = styled(Text).attrs({
  variant: 'body17-semibold',
  numberOfLines: 2,
})`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 3px;
  color: ${({theme}) => theme.colors.blueMedium};
`;
