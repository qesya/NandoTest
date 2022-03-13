import React, {useEffect, useState} from 'react';
import {RootStackParamList} from '../../RootNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import RestaurantView from '../../views/RestaurantView/RestaurantView';
import {Restaurant} from '../../utilities/response';

type IRestaurantScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'RestaurantScreen'
>;
const CustomBridgeScreen = (props: IRestaurantScreenProps) => {
  const [restaurants, setRestaurants] = useState<Array<Restaurant>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const raw = await fetch(
          'https://storage.googleapis.com/nandos-engineering-public/coding-challenge-rn/restaurantlist.json',
        );
        const result = await raw.json();
        console.log('result', result);
        setRestaurants(result.data.restaurant.items);
      } catch (ex) {
        console.log('error fetching data', ex);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const onPressGoBack = () => {
    props.navigation.navigate('MainMenuScreen');
  };

  return (
    <RestaurantView
      loading={loading}
      data={restaurants}
      onPressGoBack={onPressGoBack}
    />
  );
};

export default CustomBridgeScreen;
