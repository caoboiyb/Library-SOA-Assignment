/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppWithNavigator from './AppWithNavigator'

export default class App extends PureComponent {
  render() {
    return (
      <AppWithNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
