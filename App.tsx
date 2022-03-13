import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  NativeModules,
} from 'react-native';

export default function App() {
  const [result, setResult] = React.useState<string>();
  const {GetAppInfo} = NativeModules;

  return (
    <View style={styles.container}>
      <Text>App Version: {result ? result : '-'}</Text>

      <TouchableOpacity
        onPress={() => {
          const value = GetAppInfo.appVersion;
          setResult(value);
        }}
        style={styles.button}>
        <Text style={styles.buttonTxt}>Get App Version From Native Module</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  button: {
    width: '95%',
    alignSelf: 'center',
    height: 40,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonTxt: {
    color: 'white',
  },
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
