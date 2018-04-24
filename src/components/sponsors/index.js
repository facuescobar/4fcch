/*
 * Sponsors
 */

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Screen from 'components/screen';
import { Color, Device } from 'styles';
import assets from 'assets';
import Config from 'config';
import { map } from 'lodash';

export default class SponsorsScreen extends Screen {
  screenTitle = 'Apoyan';

  _render() {
    return (
      <View style={style.container}>
        {map(Config.sponsors.list, (sponsor, index) => {
          return (
            <View style={style.row} key={index}>
              <View style={style.column}>
                <Image source={assets[sponsor]} style={style.image} />
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

const cropSize = (Device.width() - 40) / 4;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    marginBottom: 40,
    borderBottomWidth: 1,
    borderColor: Color.grayHighlight,
  },
  column: {
    flex: 1,
    width: cropSize,
    height: cropSize,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
});
