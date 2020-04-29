/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import FadeView from './src/components/FadeView';
import SlideView from './src/components/SlideView';
import TransformView from './src/components/TransformView';
import TransfromRotato from './src/components/TransfromRotato';
import ResponseView from './src/components/ResponseView';
import GallaryView from './src/components/GallaryView';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <GallaryView />
      </SafeAreaView>
    </>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});