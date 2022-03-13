import React from 'react';
import {RootStackParamList} from '../../RootNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MainMenuView from '../../views/MainMenuView/MainMenuView';

type IRestaurantScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'MainMenuScreen'
>;
const CustomBridgeScreen = (props: IRestaurantScreenProps) => {
  const onPressCustomBridgeMenu = () => {
    props.navigation.navigate('CustomBridgeScreen');
  };

  const onPressRestaurantListMenu = () => {
    props.navigation.navigate('RestaurantScreen');
  };

  return (
    <MainMenuView
      onPressCustomBridge={onPressCustomBridgeMenu}
      onPressRestaurantList={onPressRestaurantListMenu}
    />
  );
};

export default CustomBridgeScreen;
