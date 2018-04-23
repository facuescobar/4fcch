/*
 * App Navigator
 */

import React from 'react';
import { TabNavigator } from 'react-navigation';
import { tabNavigatorProps } from 'navigation';
import HomeNavigator from 'navigation/home';
import MapScreen from 'components/map';
import StaffScreen from 'components/staff';
import SponsorsScreen from 'components/sponsors';
import JuryScreen from 'components/jury';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from '@expo/vector-icons';
import { Color } from 'styles';

export default TabNavigator(
  {
    home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: 'Info',
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <MaterialIcons
              name={'event-available'}
              size={buttonSize}
              color={tintColor}
              style={buttonStyle}
            />
          );
        },
      },
    },
    map: {
      screen: MapScreen,
      navigationOptions: {
        title: 'Mapa',
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <MaterialCommunityIcons
              name={'map-marker-outline'}
              size={buttonSize}
              color={tintColor}
              style={buttonStyle}
            />
          );
        },
      },
    },
    jury: {
      screen: JuryScreen,
      navigationOptions: {
        title: 'Jurados',
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <MaterialCommunityIcons
              name={'approval'}
              // name={'account-card-details'}
              size={buttonSize}
              color={tintColor}
              style={buttonStyle}
            />
          );
        },
      },
    },
    staff: {
      screen: StaffScreen,
      navigationOptions: {
        title: 'Staff',
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <Ionicons
              name={'ios-people'}
              size={buttonSize}
              color={tintColor}
              style={buttonStyle}
            />
          );
        },
      },
    },
    sponsors: {
      screen: SponsorsScreen,
      navigationOptions: {
        title: 'Apoyan',
        tabBarIcon: ({ focused, tintColor }) => {
          return (
            <FontAwesome
              name={'hand-peace-o'}
              size={buttonSize}
              color={tintColor}
              style={buttonStyle}
            />
          );
        },
      },
    },
  },
  {
    ...tabNavigatorProps,
    tabBarOptions: {
      ...tabNavigatorProps.tabBarOptions,
      activeTintColor: Color.orangeNormal,
      inactiveTintColor: Color.grayLight,
      style: {
        height: 60,
      },
      labelStyle: {
        fontSize: 14,
      },
    },
    initialRouteName: 'home',
  },
);

const buttonSize = 26;
const buttonStyle = {
  padding: 0,
};
