/*
 * App Navigator
 */

import React from 'react';
import { TabNavigator } from 'react-navigation';
import { tabNavigatorProps } from 'navigation';
import ActivitiesScreen from 'components/activities';
import ContestsScreen from 'components/contests';
import { Color, TextStyle } from 'styles';

const activities = {
  screen: ActivitiesScreen,
  navigationOptions: {
    title: 'Actividades',
  },
};
const contests = {
  screen: ContestsScreen,
  navigationOptions: {
    title: 'Competencias',
  },
};

const dayNavigatorProps = {
  ...TabNavigator.Presets.AndroidTopTabs,
  ...tabNavigatorProps,
  tabBarPosition: 'top',
  tabBarOptions: {
    ...tabNavigatorProps.tabBarOptions,
    upperCaseLabel: true,
    activeTintColor: Color.white,
    inactiveTintColor: 'rgba(255,255,255,.75)',
    indicatorStyle: {
      backgroundColor: 'rgba(255,255,255,.75)',
    },
    style: {
      backgroundColor: Color.orangeNormal,
    },
    labelStyle: {
      fontSize: 14,
      fontFamily: TextStyle.bold,
    },
  },
};

export function buldDayNavigator(day) {
  let initialRouteName = 'activities';

  const dayNavigator = {
    activities,
  };

  if (day.contests) {
    dayNavigator.contests = contests;
  }

  return TabNavigator(dayNavigator, { ...dayNavigatorProps, initialRouteName });
}

export default TabNavigator(
  {
    activities,
    contests,
  },
  dayNavigatorProps,
);
