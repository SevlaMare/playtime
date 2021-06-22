import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Home from './screen/home';
import SignIn from './screen/signin';

// NavigationContainer wrap the navigation stack history
const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        headerMode='none'
        screenOptions={{ cardStyle: { backgroundColor: 'transparent' } }}
      >
        <Screen name='Home' component={Home} />
        <Screen name='SignIn' component={SignIn} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
