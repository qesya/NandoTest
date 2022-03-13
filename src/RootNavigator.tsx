import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CustomBridgeScreen from './screens/CustomBridgeScreen/CustomBridgeScreen';
import RestaurantScreen from './screens/RestaurantScreen/RestaurantScreen';
import MainMenuScreen from './screens/MainMenuScreen/MainMenuScreen';

export enum Screens {
  // General
  mainMenuScreen = 'MainMenuScreen',
  customBridgeScreen = 'CustomBridgeScreen',
  restaurantScreen = 'RestaurantScreen',
}

export type RootStackParamList = {
  // General
  MainMenuScreen: undefined;
  CustomBridgeScreen: undefined;
  RestaurantScreen: undefined;
};

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name={Screens.mainMenuScreen} component={MainMenuScreen} />
    <Stack.Screen
      name={Screens.customBridgeScreen}
      component={CustomBridgeScreen}
    />
    <Stack.Screen
      name={Screens.restaurantScreen}
      component={RestaurantScreen}
    />
  </Stack.Navigator>
);

export default RootNavigator;
