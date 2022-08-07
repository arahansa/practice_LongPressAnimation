/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import AcceptDeliveryButton from './src/components/AcceptDeliveryButton';
import MyButton from './src/components/MyButton';
import ButtonThree from './src/components/ButtonThree';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import BtnProgress from './src/components/BtnProgress';
import CompoFour from './src/components/CompoFour';

const App: () => Node = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <CompoFour />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
