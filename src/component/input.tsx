import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import styles from '../style';
import theme from '../style/theme';

const Input = ({ ...rest }: TextInputProps) => {
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
    width: 48,
    height: 48,
    marginRight: 4,
    borderRadius: 8,
    fontSize: 13,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: theme.separator.fade,
    backgroundColor: styles.blue600,
  },
});

export default Input;
