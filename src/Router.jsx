import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Home from './screen/home';
import SignIn from './screen/signin';
import AppointmentCreate from './screen/appointmentCreate';
import AppointmentDisplay from './screen/appointmentDisplay';

import theme from './style/theme';

// NavigationContainer wrap the navigation stack history
// cardStyle bg, will be see on transitions in IOs
const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        headerMode='none'
        screenOptions={{
          cardStyle: { backgroundColor: theme.background },
        }}
      >
        <Screen name='AppointmentCreate' component={AppointmentCreate} />
        <Screen name='SignIn' component={SignIn} />
        <Screen name='Home' component={Home} />
        <Screen name='AppointmentDisplay' component={AppointmentDisplay} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;
