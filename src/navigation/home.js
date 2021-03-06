/*
 * App Navigator
 */

import { StackNavigator, TabNavigator } from 'react-navigation';
import { navigatorProps, stackNavigationOptions } from 'navigation';
import HomeScreen from 'components/home';
import DayScreen from 'components/day';
import ActivityScreen from 'components/activity';
import ContestScreen from 'components/contest';

export default StackNavigator(
  {
    home: {
      screen: HomeScreen,
      navigationOptions: stackNavigationOptions({
        header: null,
      }),
    },
    day: {
      screen: DayScreen,
      navigationOptions: stackNavigationOptions({
        title: 'Day',
      }),
    },
    activity: {
      screen: ActivityScreen,
      navigationOptions: stackNavigationOptions({
        title: 'Actividad',
      }),
    },
    contest: {
      screen: ContestScreen,
      navigationOptions: stackNavigationOptions({
        title: 'Actividad',
      }),
    },
  },
  {
    ...navigatorProps,
  },
);
