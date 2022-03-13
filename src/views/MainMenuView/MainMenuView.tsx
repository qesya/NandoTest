import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import Button from '../../components/Button/Button';
import * as colours from '../../utilities/colours';
import * as fonts from '../../utilities/fonts';

type Props = {
  onPressCustomBridge: () => void;
  onPressRestaurantList: () => void;
};

const MainMenuView = ({onPressCustomBridge, onPressRestaurantList}: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={colours.WHITE}
        barStyle="dark-content"
      />
      <View>
        <Text style={styles.txtHeader}>Nando's coding challenge</Text>
        <Button title="Custom Bridge Screen" onPress={onPressCustomBridge} />
        <Button
          title="Restaurant List Screen"
          onPress={onPressRestaurantList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.WHITE,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  button: {
    alignSelf: 'center',
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  txtHeader: {
    ...fonts.PoppinsLight,
    fontSize: 24,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 36,
    color: colours.BLACK,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});
export default MainMenuView;
