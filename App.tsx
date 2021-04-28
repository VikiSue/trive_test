import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {useUserStore} from './src/core/store';
import {ActivityIndicator} from 'react-native';
import {brandColor} from './src/styles/style-const';
import {ActivityIndContainer} from './src/styles/styled-components';
import {PrivateRoute} from './src/core/private-route';
import {PublicRoute} from './src/core/public-route';

export const App = () => {
  const [user, isLoading, setUser] = useUserStore(state => [
    state.user,
    state.isLoading,
    state.setUser,
  ]);
  useEffect(() => setUser(), []);
  if (isLoading) {
    return (
      <ActivityIndContainer>
        <ActivityIndicator size="large" color={brandColor} />
      </ActivityIndContainer>
    );
  } else {
    return (
      <>
        <NavigationContainer>
          {user.name.length ? <PrivateRoute /> : <PublicRoute />}
        </NavigationContainer>
        <Toast ref={ref => Toast.setRef(ref)} />
      </>
    );
  }
};
