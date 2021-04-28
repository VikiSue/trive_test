import * as React from 'react';
import {HomeScreen} from '../screen/home-screen/home-screen';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SecondScreen} from '../screen/second-screen/second-screen';
import {TouchableOpacity} from 'react-native';
import {DarkButtonText, NavHeader} from '../styles/styled-components';
// @ts-ignore
import HomeIcon from './../assets/home.svg';
// @ts-ignore
import GalleryIcon from './../assets/gallery.svg';
// @ts-ignore
import Logo from '../assets/logo.svg';
import {useUserStore} from '../state/store';
import {backgroundColor, brandColor, paleColor, secondBrandColor} from '../styles/style-const';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            const fill = focused ? brandColor : paleColor;
            return <HomeIcon height={25} width={25} fill={fill} />;
          }
          if (route.name === 'Second') {
            const fill = focused ? brandColor : paleColor;

            return <GalleryIcon height={25} width={25} fill={fill} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: brandColor,
        inactiveTintColor: paleColor,
        style: {
          backgroundColor: secondBrandColor,
          paddingTop: 10,
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Second" component={SecondScreen} />
    </Tab.Navigator>
  );
};

export const PrivateRoute = () => {
  const logOut = useUserStore(state => state.logOut);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTitle: () => (
            <NavHeader>
              <Logo width={30} height={30} />
            </NavHeader>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => logOut()}>
              <DarkButtonText>Log out{'   '}</DarkButtonText>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
