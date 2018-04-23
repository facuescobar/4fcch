/*
 * Day
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Screen from 'components/screen';
import { buldDayNavigator } from 'navigation/day';
import Config from 'config';

export default class DayScreen extends Screen {
  constructor(props) {
    super(props);

    this.state = {
      day: Config.days[props.navigation.state.params.day],
    };

    this.DayNavigator = buldDayNavigator(this.state.day);
  }

  render() {
    const { DayNavigator } = this;

    return (
      <DayNavigator
        // navigation={this.props.navigation}
        screenProps={{
          ...this.state.day,
          locations: Config.map.regions,
        }}
      />
    );
  }
}

// DayScreen.router = DayNavigator.router;
