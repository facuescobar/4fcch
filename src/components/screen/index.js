/*
 * Screen
 */

import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Color } from 'styles';
export default class Screen extends Component {
  _navigate(routeName, routeParams, useScreenPropsNavigator = false) {
    const props = useScreenPropsNavigator ? this.props.screenProps : this.props;

    props.navigation.navigate(routeName, {
      ...routeParams,
      previousRouteKey: props.navigation.state.key,
    });
  }

  _navigateBack(routeKey, useScreenPropsNavigator = false) {
    const props = useScreenPropsNavigator ? this.props.screenProps : this.props;

    props.navigation.dispatch(NavigationActions.back({ key: routeKey }));
  }

  _renderScreenTitle() {
    return (
      <Text style={[style.screenTitle, this.screenTitleStyle]}>
        {this.screenTitle}
      </Text>
    );
  }

  render() {
    return (
      <SafeAreaView style={style.container}>
        {this.screenTitle && this._renderScreenTitle()}
        <ScrollView
          contentContainerStyle={[this.fixedSrollView && style.container]}
          {...this.scrollViewOptions}
        >
          {this._render()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenTitle: {
    fontSize: 32,
    paddingVertical: 20,
    paddingLeft: 20,
    paddingRight: 40,
    fontWeight: '300',
    color: Color.white,
    backgroundColor: Color.orangeNormal,
  },
});
