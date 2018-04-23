/*
 * App Navigator
 */

import { StackNavigator, TabNavigator } from 'react-navigation';
import { navigatorProps, stackNavigationOptions } from 'navigation';
import HomeScreen from 'components/home';
import DayScreen from 'components/day';

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
  },
  {
    ...navigatorProps,
  },
);
