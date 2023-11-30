/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  useColorScheme,
  Platform,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Routes from './src/routes';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.android}>
        <Routes />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
  },
  android: {
    ...(Platform.OS === 'android' && {
      paddingTop: 12,
      flex: 1,
      backgroundColor: '#262626',
    }),
  },
});

export default App;
