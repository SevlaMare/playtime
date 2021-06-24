import React, { ReactNode } from 'react';
import { View, Modal, ModalProps, StyleSheet } from 'react-native';
import styles from '../style';

type Props = ModalProps & {
  children: ReactNode;
};

const ModalWindow = ({ children, ...rest }: Props) => {
  return (
    <Modal transparent animationType='slide' {...rest}>
      <View style={[styles.flexGrow, { backgroundColor: styles.blue800 }]}>
        <View style={[styles.mx2, { marginTop: 100 }]}>
          <View style={[style.separator, styles.alignSelfCenter, styles.mt1]} />
          {children}
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  separator: {
    width: 39,
    borderBottomWidth: 2,
    borderRadius: 2,
    borderColor: styles.blue300,
  },
});

export default ModalWindow;
