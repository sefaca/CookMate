/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import Text from '../../common/ui/components/Text';
import styled from 'styled-components';

export const Title = styled(Text).attrs({
  variant: 'headline3-bold',
})`
  color: ${({theme}) => theme.colors.blueBold};
  font-weight: bold;
`;

export const Summary = styled(Text).attrs({
  variant: 'body17-semibold',
  numberOfLines: 2,
})`
  margin-top: 5px;
  margin-bottom: 5px;
  color: ${({theme}) => theme.colors.blueMedium};
`;

export const Ingredients = styled(Text).attrs({
  variant: 'body20-bold',
})`
  color: ${({theme}) => theme.colors.blueBold};
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Content = styled(Text).attrs({
  variant: 'body17-semibold',
  numberOfLines: 2,
})`
  margin-top: 3px;
  color: ${({theme}) => theme.colors.blueMedium};
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  summary: {
    fontSize: 16,
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
  },
  ingredient: {
    fontSize: 16,
    marginVertical: 2,
  },
  step: {
    fontSize: 16,
    marginVertical: 4,
  },
  scrollViewContent: {
    paddingTop: 50,
    paddingBottom: 50,
  },
});

export default styles;
