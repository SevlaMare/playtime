import React from 'react';
import { StatusBar, LogBox } from 'react-native';

LogBox.ignoreLogs([
  'You are not currently signed in to Expo on your development machine.',
]);

import Router from './src/Router';
import Container from './src/component/container';

import { AuthProvider } from './src/provider/auth';

import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani';
import { useFonts } from 'expo-font';
import AppLoadling from 'expo-app-loading';

// await AsyncStorage.clear();

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
      <AuthProvider>
        <Router />
      </AuthProvider>
    </Container>
  );
};

export default App;
