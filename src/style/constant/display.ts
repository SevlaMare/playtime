import { StyleSheet } from 'react-native';

const display = StyleSheet.create({
  flex: { flex: 1 },
  flexRow: { flexDirection: 'row' },
  flexGrow: { flexGrow: 1 },
  flexShrink: { flexShrink: 1 },

  justifyContentBetween: { justifyContent: 'space-between' },
  justifyContentCenter: { justifyContent: 'center' },
  justifyContentStart: { justifyContent: 'flex-start' },
  justifyContentEnd: { justifyContent: 'flex-end' },

  alignItemsCenter: { alignItems: 'center' },

  textCenter: { textAlign: 'center' },
});

export default display;
