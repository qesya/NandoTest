import React from 'react';
import {
  StyleSheet,
  ViewStyle,
  TouchableHighlightProps,
  TouchableHighlight,
  Text,
} from 'react-native';
import * as colours from '../../utilities/colours';
import * as fonts from '../../utilities/fonts';

type Props = {
  title: string;
  style?: ViewStyle;
} & TouchableHighlightProps;

const Button = (props: Props) => {
  return (
    <TouchableHighlight
      style={[styles.button, props.style]}
      onPress={props.onPress}>
      <Text style={styles.txtBtn}>{props.title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    height: 40,
    backgroundColor: colours.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginBottom: 10,
  },
  txtBtn: {
    ...fonts.PoppinsLight,
    fontSize: 14,
    color: colours.WHITE,
  },
});

export default Button;
