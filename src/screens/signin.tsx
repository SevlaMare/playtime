import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';

import { IllustationImg } from '../assets/image';

function SignIn() {
  const [username, setUsername] = useState('');

  return (
    <View style={_styles.container}>
      <Image source={IllustationImg} />

      <View>
        <Text>
          Organize{`\n`}
          yours gameplays{`\n`}
          easily
        </Text>
      </View>
      {/*
      <TextInput
        style={_styles.input}
        onChangeText={value => setUsername(value)}
      /> */}

      {/* <Text>Login: {username}</Text> */}
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
    backgroundColor: '#333',
  },
});

export default SignIn;
