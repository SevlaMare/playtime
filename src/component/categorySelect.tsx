import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import styles from '../style';
import theme from '../style/theme';

import { CATEGORIES } from '../helpers/categories';
import Category from './category';

type Props = {
  categorySelected: number;
};

const CategorySelect = ({ categorySelected }: Props) => {
  return (
    <ScrollView
      style={[styles.container, styles.ml2]}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {CATEGORIES.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
        />
      ))}
    </ScrollView>
  );
};

// const style = StyleSheet.create({
//   container: { backgroundColor: theme.button.primary.background },
// });

export default CategorySelect;
