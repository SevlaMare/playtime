import { StyleSheet } from 'react-native';

const typography = StyleSheet.create({
  // TITLE
  h1: {
    fontSize: 40,
    fontWeight: '700',
  },

  h2: {
    fontSize: 25,
  },

  h3: {
    fontSize: 15,
    lineHeight: 25,
    fontWeight: '400',
  },

  // PARAGRAPH
  t1: {
    fontSize: 10,
  },
  t2: {
    fontSize: 15,
  },
  t3: {
    fontSize: 15,
    fontWeight: '500',
  },

  // FOOTER
  f1: {
    fontSize: 6,
  },
  f2: {
    fontSize: 8,
  },
});

export default typography;
