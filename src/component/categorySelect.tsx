import React from 'react';
import { ScrollView } from 'react-native';
import styles from '../style';
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

export default CategorySelect;
