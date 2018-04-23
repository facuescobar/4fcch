/*
 * Sponsors
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Screen from 'components/screen';

export default class SponsorsScreen extends Screen {
  render() {
    return (
      <View style={styles.container}>
        <Text>{'Sponsors Screen'}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
