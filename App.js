import React from 'react';
import { SafeAreaView } from 'react-native';
import { Asset, AppLoading } from 'expo';
import AppNavigator from 'navigation/app';
import assets from './assets';
import { map } from 'lodash';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  async _cacheResourcesAsync() {
    const cacheImages = map(assets, image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages);
  }

  _renderLoading() {
    return (
      <AppLoading
        startAsync={this._cacheResourcesAsync}
        onFinish={() => this.setState({ isReady: true })}
      />
    );
  }

  render() {
    if (!this.state.isReady) {
      return this._renderLoading();
    }

    return <AppNavigator />;
  }
}
