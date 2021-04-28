import React from 'react';
import {SignIn} from '../screen/sign-in/sign-in';
import {SignUp} from '../screen/sign-up/sign-up';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export const PublicRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={SignIn} options={{headerShown: false}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};
