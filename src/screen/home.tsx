import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import styles from '../style';
import theme from '../style/theme';

import Avatar from '../component/avatar';
import ButtonChar from '../component/buttonChar';
import CategorySelect from '../component/categorySelect';

const Home = () => {
  const [category, setCategory] = useState('');

  const handleToggleCategory = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  };

  return (
    <ScrollView style={[style.header, { width: '100%' }]}>
      <View
        style={[
          styles.flexRow,
          styles.alignItemsCenter,
          styles.mx2,
          styles.mb2,
        ]}
      >
        <Avatar urlImage={'http://github.com/SevlaMare.png'} />

        <View style={styles.flexGrow}>
          <View style={styles.flexRow}>
            <Text style={[styles.h2, { color: theme.color }]}>Hi, </Text>
            <Text style={[styles.h3, { color: theme.color }]}>Thiago</Text>
          </View>

          <Text style={[styles.h4, { color: theme.color }]}>
            Today is winning day
          </Text>
        </View>

        <ButtonChar />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleToggleCategory}
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  header: { marginTop: 26 },
});

export default Home;
