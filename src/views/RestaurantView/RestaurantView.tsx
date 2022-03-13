import React, {useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Linking,
  StatusBar,
} from 'react-native';
import * as colours from '../../utilities/colours';
import * as fonts from '../../utilities/fonts';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';
import {Restaurant} from '../../utilities/response';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/Button/Button';

type Props = {
  data: Array<Restaurant>;
  loading: boolean;
  onPressGoBack: () => void;
};

interface RenderItem<T> {
  item: T;
}

const RestaurantView = (props: Props) => {
  const openUrlHandler = useCallback(
    (url: string) =>
      Linking.openURL(url).catch(err =>
        console.error('An error occurred when opening url', err),
      ),
    [],
  );

  const renderRestaurantItem = useCallback(
    ({item}: RenderItem<Restaurant>) => {
      return (
        <>
          <RestaurantCard
            onPressRestaurant={() => openUrlHandler(item.url ?? '')}
            restaurantName={item.name}
            addressLocality={item?.geo?.address?.addressLocality}
            address={item?.geo?.address?.streetAddress}
            postalCode={item?.geo?.address?.postalCode}
          />
        </>
      );
    },
    [openUrlHandler],
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={colours.WHITE}
        barStyle="dark-content"
      />
      <View style={styles.innerContainer}>
        <Text style={styles.txtHeader}>Nando's Restaurants</Text>
        {!props.loading ? (
          <FlatList
            testID="flatlist-restaurant"
            automaticallyAdjustsScrollIndicatorInsets
            style={[styles.restaurantList]}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.containerFlatlist}
            data={props.data}
            keyExtractor={item => item.name}
            renderItem={renderRestaurantItem}
            contentInsetAdjustmentBehavior="automatic"
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          />
        ) : (
          <Text style={styles.txtHeader}>Loading...</Text>
        )}
        <Button style={styles.btn} title="Back" onPress={props.onPressGoBack} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.WHITE,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  txtHeader: {
    ...fonts.PoppinsLight,
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
    color: colours.BLACK,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  restaurantList: {
    flex: 1,
  },
  containerFlatlist: {
    paddingBottom: 30,
    paddingHorizontal: -40,
  },
  itemSeparator: {
    height: 20,
  },
  btn: {
    marginVertical: 20,
  },
});
export default RestaurantView;
