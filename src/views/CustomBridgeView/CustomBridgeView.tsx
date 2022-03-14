import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import Button from '../../components/Button/Button';
import * as colours from '../../utilities/colours';
import * as fonts from '../../utilities/fonts';

type Props = {
  appVersion: string;
  onPressGoBack: () => void;
};

const CustomBridgeView = ({appVersion, onPressGoBack}: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={colours.WHITE}
        barStyle="dark-content"
      />
      <View>
        <Text style={styles.txtHeader}>APP VERSION</Text>
        <Text style={styles.txtNote}>this value from native modules</Text>
        <Text style={styles.txtAppVersion} testID="AppVersionText">
          {appVersion}
        </Text>
      </View>
      <Button style={styles.btn} title="Back" onPress={onPressGoBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colours.WHITE,
    justifyContent: 'center',
  },
  txtHeader: {
    ...fonts.PoppinsLight,
    fontSize: 24,
    marginTop: -40,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 6,
    color: colours.BLACK,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  txtAppVersion: {
    ...fonts.PoppinsMedium,
    fontSize: 34,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 18,
    color: colours.BLACK,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  txtNote: {
    ...fonts.PoppinsLight,
    fontSize: 8,
    textAlign: 'center',
    color: colours.BLACK,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  btn: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    marginHorizontal: 16,
  },
});
export default CustomBridgeView;
