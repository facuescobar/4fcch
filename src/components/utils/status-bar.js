/*
 * Status Bar
 */

import React from 'react';
import { View, StyleSheet, StatusBar as NativeStatusBar } from 'react-native';
import { Color, Device, StatusBar as StatusBarStyle } from 'styles';

const StatusBar = () => {
  return <View style={style.container} />;
};

const style = StyleSheet.create({
  container: {
    backgroundColor: Color.screenBackground,
    width: Device.width(),
    height: NativeStatusBar.currentHeight,
  },
});

export default StatusBar;
