import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -50,
    paddingHorizontal: 50
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 16,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
  },
  subTitle: {
    color: theme.colors.heading,
    marginBottom: 64,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: theme.fonts.text500,
    lineHeight: 25,
  }
})