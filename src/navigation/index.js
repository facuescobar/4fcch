/*
 * Navigation
 */

import { Color } from 'styles';
import { merge } from 'lodash';

export const stackNavigationOptionsDefault = {
  gesturesEnabled: true,
  headerStyle: {
    backgroundColor: Color.orangeNormal,
    borderBottomColor: Color.white,
  },
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    textAlign: 'center',
  },
  headerTintColor: Color.white,
};

export const NavigationProps = {
  headerLeftEnabledDefault: true,
  headerRightEnabledDefault: false,
};

/*
 * Stack Navigator Default Props
 */

export const navigatorProps = {
  headerMode: 'screen',
  cardStyle: {
    shadowOpacity: 0,
  },
};

/*
 * Tab Navigator Default Props
 */

export const tabNavigatorProps = {
  swipeEnabled: false,
  animationEnabled: true,
};

/*
 * _isHeaderKeyEnabled
 * @Description: Verify if headerLeft/headerRight is enabled or return default value
 */

function _isHeaderKeyEnabled(headerKey, navigation, navOptions) {
  try {
    if (typeof navOptions[headerKey] === 'boolean')
      return navOptions[headerKey];
    if (typeof navigation.state.params[headerKey] === 'boolean')
      return navigation.state.params[headerKey];
  } catch (error) {
    //if headerKey is not defined in nav-props, return default value
  }
  return NavigationProps[headerKey + 'Default'];
}

/*
 * getScreenTitle
 * @Description: return screen title if it's defined, following this priority order: state title > navProp title > screenProp title
 * NOTE: A title must be defined always in one of this options.
 */

function _getScreenTitle(
  navigationState = {},
  screenProps = {},
  customOptions = {},
) {
  if (navigationState.params && navigationState.params.title) {
    return navigationState.params.title;
  }

  if (customOptions.title) {
    return customOptions.title;
  }

  if (screenProps.title) {
    return screenProps.title;
  }

  return '';
}

export function stackNavigationOptions(customOptions = {}) {
  return ({ navigation, screenProps }) => {
    const navOptions = merge({}, stackNavigationOptionsDefault, customOptions);

    return {
      ...navOptions,
      title: _getScreenTitle(navigation.state, screenProps, customOptions),
    };
  };
}

export function tabNavigationOptions(customOptions = {}) {
  return ({ screenProps }) => {
    //NOTE: tab navigation does not have NavigationProps tab props are in tabNavigatorProps
    const navOptions = merge({}, customOptions);

    return {
      ...navOptions,
      tabBarLabel:
        customOptions.title || (screenProps && screenProps.title) || '',
    };
  };
}
