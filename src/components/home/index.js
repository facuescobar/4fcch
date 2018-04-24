/*
 * Home
 */

import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text } from 'components/utils';
import Screen from 'components/screen';
import { TextStyle, Color } from 'styles';
import assets from 'assets';
import { MaterialIcons } from '@expo/vector-icons';
import isToday from 'date-fns/is_today';
import { map } from 'lodash';

export default class HomeScreen extends Screen {
  fixedSrollView = true;
  scrollViewOptions = {
    scrollEnabled: false,
  };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.onDayPress('sabado', 'Sábado 5');
  //   });
  // }

  onDayPress = (day, title) => {
    this._navigate('day', {
      day,
      title,
    });
  };

  _renderDay(key, title, dayDate) {
    const isTodayValue = isToday(dayDate);

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          this.onDayPress(key, title);
        }}
        style={[style.buttonDay, isTodayValue && style.buttonDayActive]}
      >
        <Text
          style={[
            style.buttonDayText,
            isTodayValue && style.buttonDayTextActive,
          ]}
        >
          {title}
        </Text>
        {isTodayValue && <Text style={style.buttonTodayText}>{'HOY'}</Text>}
        <MaterialIcons
          name={'keyboard-arrow-right'}
          style={[
            style.buttonDayIcon,
            isTodayValue && style.buttonDayIconActive,
          ]}
        />
      </TouchableOpacity>
    );
  }

  _render() {
    return (
      <View style={style.container}>
        <View style={style.logoContainer}>
          <Image
            source={assets.logo}
            resizeMode={'contain'}
            style={style.logo}
          />
        </View>
        {this._renderDay('jueves', 'Jueves 3 - Apertura', new Date(2018, 4, 3))}
        {this._renderDay('viernes', 'Viernes 4', new Date(2018, 4, 4))}
        {this._renderDay('sabado', 'Sábado 5', new Date(2018, 4, 5))}
        {this._renderDay('domingo', 'Domingo 6', new Date(2018, 4, 6))}
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  logoContainer: {
    flex: 1,
    padding: 20,
  },
  logo: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  buttonDay: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 2,
    borderColor: Color.grayHighlight,
    backgroundColor: Color.white,
    padding: 20,
    paddingVertical: 15,
  },
  buttonDayActive: {
    backgroundColor: Color.orangeNormal,
  },
  buttonDayText: {
    flex: 1,
    fontSize: 16,
    fontFamily: TextStyle.bold,
  },
  buttonDayTextActive: {
    flex: 0,
    color: Color.white,
    fontFamily: TextStyle.bold,
  },
  buttonTodayText: {
    flex: 1,
    fontSize: 16,
    color: Color.white,
    textAlign: 'right',
    fontFamily: TextStyle.bold,
  },
  buttonDayIcon: {
    fontSize: 24,
    color: Color.textNormal,
  },
  buttonDayIconActive: {
    color: Color.white,
  },
});
