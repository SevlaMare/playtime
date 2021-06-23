import React from 'react';
import { ScrollView } from 'react-native';
import styles from '../style';
import { CATEGORIES } from '../helpers/mock_data';
import Category from './category';

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
};

const CategorySelect = ({ categorySelected, setCategory }: Props) => {
  return (
    <ScrollView
      style={[styles.container, styles.ml2]}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 20 }}
    >
      {CATEGORIES.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
};

export default CategorySelect;
