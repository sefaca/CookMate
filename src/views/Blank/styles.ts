import styled from 'styled-components/native';
import Text from '../../common/ui/components/Text';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.blueSoft};
`;

export const Header = styled.View`
  margin-top: 50px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  background-color: ${({theme}) => theme.colors.blueSoft};
  padding-vertical: 10px;
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
