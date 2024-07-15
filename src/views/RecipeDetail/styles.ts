/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

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
