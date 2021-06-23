import { StyleSheet } from 'react-native';

// load fonts on entry point, src/app.tsx
const fonts = {
  inter400: 'Inter_400Regular',
  inter500: 'Inter_500Medium',
  rajdhani500: 'Rajdhani_500Medium',
  rajdhani700: 'Rajdhani_700Bold',
};

// TODO make better way to handle font family x weight x size
const typography = StyleSheet.create({
  // TITLE
  h1: {
    fontSize: 40,
    fontFamily: fonts.rajdhani700,
  },

  h2: {
    fontSize: 25,
    fontFamily: fonts.rajdhani500,
  },

  h3: {
    fontSize: 25,
    fontFamily: fonts.rajdhani700,
  },

  h4: {
    fontSize: 15,
    lineHeight: 25,
    fontFamily: fonts.inter400,
  },

  h5: {
    fontSize: 15,
    fontFamily: fonts.rajdhani700,
  },

  h6: {
    fontSize: 18,
    fontFamily: fonts.rajdhani700,
  },

  // PARAGRAPH
  t1: {
    fontSize: 10,
    fontFamily: fonts.inter500,
  },
  t2: {
    fontSize: 13,
    fontFamily: fonts.inter500,
  },
  t3: {
    fontSize: 15,
    fontFamily: fonts.inter500,
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
