import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

// instead of touchable opacity, better user experience
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import styles from '../style';
import theme from '../style/theme';

type Props = RectButtonProps & {
  label: string;
  icon?: any;
};

const ButtonIcon = ({ label, icon, ...props }: Props) => {
  return (
    <RectButton
      style={[style.container, styles.rounded1]}
      activeOpacity={0.85}
      {...props}
    >
      <View style={[styles.flexRow, styles.alignItemsCenter]}>
        <Image style={[styles.mx2, { width: 24, height: 18 }]} source={icon} />

        <Text
          style={[style.separator, { height: 56, borderLeftWidth: 1 }]}
        ></Text>

        <Text
          style={[
            styles.flexRow,
            styles.textCenter,
            styles.t3,
            style.label,
            styles.flexGrow,
          ]}
        >
          {label}
        </Text>
      </View>
    </RectButton>
  );
};

const style = StyleSheet.create({
  container: { backgroundColor: theme.button.primary.background },
  separator: { borderColor: theme.separator.color },
  label: { color: theme.color },
});

export default ButtonIcon;
