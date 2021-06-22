import React from 'react';
import { StatusBar } from 'react-native';

import SignIn from './src/screen/signin';
import Home from './src/screen/home';
import Container from './src/component/container';

import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';

import AppLoadling from 'expo-app-loading';

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoadling />;
  }

  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {/* <SignIn /> */}
      <Home />
    </Container>
  );
};

export default App;
