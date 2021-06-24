import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import styles from '../style';
import theme from '../style/theme';

const TextArea = ({ ...rest }: TextInputProps) => {
  return (
    <TextInput
      style={[style.box, styles.t3]}
      keyboardType='numeric'
      {...rest}
    />
  );
};

const style = StyleSheet.create({
  box: {
    width: '100%',
    height: 95,
    marginRight: 4,
    borderRadius: 8,
    fontSize: 13,
    borderWidth: 1,
    borderColor: theme.separator.fade,
    backgroundColor: styles.blue600,
    color: theme.color,
    textAlign: 'left',
    textAlignVertical: 'top',
    paddingLeft: 15,
    paddingTop: 15,
  },
});

export default TextArea;
