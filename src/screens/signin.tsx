import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';

import IllustationImg from '../../assets/illustration.png';

function SignIn(){
  const [username, setUsername] = useState('');

  return (
    <View style={_styles.container}>
      <Text>Welcome</Text>

      <TextInput
        style={_styles.input}
        onChangeText={value => setUsername(value)}
      />

      <Text>Login: {username}</Text>
    </View>
  );
}

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 14,
    width: '100%',
    color: '#fff',
    backgroundColor: '#333'
  }
});

export default SignIn;
