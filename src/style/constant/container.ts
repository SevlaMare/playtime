import { StyleSheet } from 'react-native';
import theme from '../theme';

const container = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 40,
  },
  containerFluid: { width: '100%' },

  box0: {
    width: 20,
    height: 20,
  },
  box1: {
    width: 25,
    height: 25,
  },
  box2: {
    width: 30,
    height: 30,
  },
  box3: {
    width: 35,
    height: 35,
  },
  box5: {
    width: 56,
    height: 56,
  },

  // image utilities
  imgCover: { resizeMode: 'cover' },
  imgContain: { resizeMode: 'contain' },
  imgStretch: { resizeMode: 'stretch' },
  imgFluid: { width: '100%' },
  rounded: { borderRadius: 100 },
  noBorderRadius: { borderRadius: 0 },
});

export default container;
