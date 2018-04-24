/*
 * Staff
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'components/utils';
import Screen from 'components/screen';
import { Color, TextStyle } from 'styles';
import Config from 'config';
import { map } from 'lodash';

export default class StaffScreen extends Screen {
  screenTitle = 'Staff';
  screenBackground = Color.white;

  _renderStaffPerson = (staffPerson, index) => {
    return (
      <Text key={index} style={style.staffSectionPerson}>
        {'· '}
        {staffPerson}
      </Text>
    );
  };

  _renderStaffSection = (staffSection, index) => {
    return (
      <View style={style.staffSection} key={index}>
        <Text style={style.staffSectionTitle}>{staffSection.title}</Text>
        {map(staffSection.list, this._renderStaffPerson)}
      </View>
    );
  };

  _render() {
    return (
      <View style={style.container}>
        <Text style={style.message}>{Config.staff.message}</Text>
        <View style={style.staff}>
          {map(Config.staff.list, this._renderStaffSection)}
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  message: {
    fontSize: 16,
    paddingHorizontal: 20,
  },
  staff: {
    padding: 20,
  },
  staffSection: {
    marginBottom: 10,
  },
  staffSectionTitle: {
    fontSize: 18,
    fontFamily: TextStyle.bold,
    marginBottom: 10,
  },
  staffSectionPerson: {
    marginLeft: 5,
    fontSize: 16,
    padding: 5,
    fontFamily: TextStyle.bookIta,
  },
});
