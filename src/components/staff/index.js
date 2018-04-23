/*
 * Staff
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Screen from 'components/screen';
import { Color } from 'styles';
import Config from 'config';
import { map } from 'lodash';

export default class StaffScreen extends Screen {
  screenTitle = 'Staff';

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
    color: Color.textNormal,
    paddingHorizontal: 20,
  },
  staff: {
    padding: 20,
  },
  staffSection: {
    marginBottom: 10,
  },
  staffSectionTitle: {
    color: Color.textNormal,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
  },
  staffSectionPerson: {
    marginLeft: 5,
    fontSize: 14,
    padding: 5,
  },
});
