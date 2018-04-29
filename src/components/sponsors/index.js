/*
 * Sponsors
 */

import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Screen from 'components/screen';
import { Color, Device } from 'styles';
import assets from 'assets';
import Config from 'config';
import { map } from 'lodash';

export default class SponsorsScreen extends Screen {
  screenTitle = 'Apoyan';

  renderItem = ({ item }) => {
    return (
      <View style={style.row}>
        <View style={style.column}>
          <Image source={assets[item]} style={style.image} />
        </View>
      </View>
    );
  };

  _renderSeparator = () => {
    return <View style={style.separator} />;
  };

  _render() {
    return (
      <View style={style.container}>
        <FlatList
          data={Config.sponsors.list}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          ItemSeparatorComponent={this._renderSeparator}
        />
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
    paddingVertical: 40,
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
  separator: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: Color.grayHighlight,
  },
});
