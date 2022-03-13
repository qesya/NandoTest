import React, {useEffect, useState} from 'react';
import {RootStackParamList} from '../../RootNavigator';
import CustomBridgeView from '../../views/CustomBridgeView/CustomBridgeView';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NativeModules} from 'react-native';

type ICustomBridgeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CustomBridgeScreen'
>;
const CustomBridgeScreen = (props: ICustomBridgeScreenProps) => {
  const {GetAppInfo} = NativeModules;
  const [appInfo, setAppInfo] = useState<string>('');

  useEffect(() => {
    const value = GetAppInfo.appVersion;
    setAppInfo(value);
  }, [GetAppInfo.appVersion]);

  const onPressGoBack = () => {
    props.navigation.navigate('MainMenuScreen');
  };
  return (
    <CustomBridgeView appVersion={appInfo} onPressGoBack={onPressGoBack} />
  );
};

export default CustomBridgeScreen;
