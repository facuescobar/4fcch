import React from 'react';
import { SafeAreaView } from 'react-native';
import { Asset, AppLoading, Updates } from 'expo';
import { onNavigationStateChange } from 'navigation';
import AppNavigator from 'navigation/app';
import assets, { fonts } from './assets';
import { map } from 'lodash';
import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    isReady: false,
    fontLoaded: false,
  };

  async componentDidMount() {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();

        Updates.reload();
      }
    } catch (error) {
      // Just continue initializing the app
    }

    await Font.loadAsync(fonts);
    this.setState({ fontLoaded: true });
  }

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
    if (!this.state.isReady || !this.state.fontLoaded) {
      return this._renderLoading();
    }

    return <AppNavigator onNavigationStateChange={onNavigationStateChange} />;
  }
}
