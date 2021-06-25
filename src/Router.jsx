import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from './provider/auth';

const { Navigator, Screen } = createStackNavigator();

import SignIn from './screen/signin';
import Home from './screen/home';
import AppointmentCreate from './screen/appointmentCreate';
import AppointmentDisplay from './screen/appointmentDisplay';
import ModalGuild from './screen/modalGuild';

import theme from './style/theme';

const Router = () => {
  const { user } = useAuth();

  console.log('>>>>>>>', user.id);

  return (
    <NavigationContainer>
      {user.id > 1 ? (
        <Navigator
          headerMode='none'
          screenOptions={{
            cardStyle: { backgroundColor: theme.background },
          }}
        >
          <Screen name='Home' component={Home} />
          <Screen name='AppointmentCreate' component={AppointmentCreate} />
          <Screen name='AppointmentDisplay' component={AppointmentDisplay} />
          <Screen name='ModalGuild' component={ModalGuild} />
        </Navigator>
      ) : (
        <SignIn />
      )}
    </NavigationContainer>
  );
};

export default Router;
