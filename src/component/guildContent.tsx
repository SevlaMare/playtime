import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from '../style';
import theme from '../style/theme';
import GuildIcon from './guildIcon';

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type Props = TouchableOpacityProps & {
  data: GuildProps;
};

const GuildContent = ({ data, ...rest }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, styles.mx2, styles.flexRow]}
      activeOpacity={0.9}
      {...rest}
    >
      <View>
        <GuildIcon />
      </View>

      <View
        style={[
          styles.flexRow,
          styles.flexGrow,
          styles.justifyContentBetween,
          styles.alignItemsCenter,
          styles.ml2,
          { borderBottomWidth: 1, borderColor: theme.text.secondary.color },
        ]}
      >
        <View>
          <Text style={[styles.h6, { color: theme.color }]}>{data.name}</Text>
          <Text style={[styles.t3, { color: theme.text.secondary.color }]}>
            {data.owner ? 'Host' : 'Guess'}
          </Text>
        </View>

        <Feather name='chevron-right' color={theme.color} size={24} />
      </View>
    </TouchableOpacity>
  );
};

export default GuildContent;
