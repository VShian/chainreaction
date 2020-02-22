/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Board from './components/Board'
import styles from './Styles'

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>ChainReaction</Text>
        <Text style={styles.sectionDescription}>
          Two Players
        </Text>
      </View>
      <Board/>
    </>
  );
};


export default App;
