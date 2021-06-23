import { StyleSheet } from 'react-native';

const display = StyleSheet.create({
  flex: { flex: 1 },
  flexRow: { flexDirection: 'row' },

  flexGrow: { flexGrow: 1 },
  flexShrink: { flexShrink: 1 },

  alignSelfEnd: { alignSelf: 'flex-end' },
  alignSelfStart: { alignSelf: 'flex-start' },

  justifyContentBetween: { justifyContent: 'space-between' },
  justifyContentCenter: { justifyContent: 'center' },
  justifyContentStart: { justifyContent: 'flex-start' },
  justifyContentEnd: { justifyContent: 'flex-end' },

  alignItemsCenter: { alignItems: 'center' },
  alignItemsStart: { alignItems: 'flex-start' },
  alignItemsEnd: { alignItems: 'flex-end' },

  textCenter: { textAlign: 'center' },
  textLeft: { textAlign: 'left' },
  textRight: { textAlign: 'right' },
});

export default display;
