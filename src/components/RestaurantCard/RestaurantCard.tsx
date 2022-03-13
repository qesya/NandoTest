import React from 'react';
import {StyleSheet, ViewStyle, Text, TouchableOpacity} from 'react-native';
import * as colours from '../../utilities/colours';
import * as fonts from '../../utilities/fonts';

type Props = {
  onPressRestaurant: () => void;
  restaurantName: string;
  address: string;
  addressLocality: string;
  postalCode: string;
  style?: ViewStyle;
};

const RestaurantCard = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onPressRestaurant}
      style={styles.restaurantItem}>
      <Text style={styles.itemTitle}>{props.restaurantName}</Text>
      <Text style={styles.itemText}>{props.address}</Text>
      <Text style={styles.itemText}>{props.addressLocality}</Text>
      <Text style={styles.itemText}>{props.postalCode}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  restaurantItem: {
    borderWidth: 1,
    borderColor: colours.BG_COLOR,
    padding: 16,
    borderRadius: 10,
  },
  itemTitle: {
    ...fonts.PoppinsMedium,
    fontSize: 16,
    color: colours.BLACK,
    marginBottom: 15,
  },
  itemText: {
    ...fonts.PoppinsLight,
    fontSize: 14,
    color: colours.BLACK,
    marginBottom: 2,
  },
});

export default RestaurantCard;
