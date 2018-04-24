/*
 * Text
 */

import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
import { Color, TextStyle } from 'styles';

const Text = props => (
  <NativeText {...props} style={[style.textDefault, props.style]}>
    {props.children}
  </NativeText>
);

const style = StyleSheet.create({
  textDefault: {
    color: Color.textNormal,
    fontFamily: TextStyle.book,
  },
});

export default Text;
