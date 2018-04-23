/*
 * Marker Info
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { Color, Touchable } from 'styles';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default class MarkerInfo extends React.Component {
  constructor(props) {
    super(props);

    this.DURATION = 200;
    this.VALUE_MIN = 0;
    this.VALUE_MAX = 1;

    this.state = {
      visible: Boolean(props.visible),
      hidden: !Boolean(props.visible),
      animatedValue: new Animated.Value(
        Boolean(props.visible) ? this.VALUE_MAX : this.VALUE_MIN,
      ),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.visible !== nextProps.visible) {
      this.setState(
        {
          visible: nextProps.visible,
        },
        () => {
          this.state.visible ? this._fadeIn() : this._fadeOut();
        },
      );
    }
  }

  _fadeIn() {
    this.setState(
      {
        hidden: false,
      },
      () => {
        Animated.timing(this.state.animatedValue, {
          toValue: this.VALUE_MAX,
          duration: this.DURATION,
        }).start();
      },
    );
  }

  _fadeOut() {
    Animated.timing(this.state.animatedValue, {
      toValue: this.VALUE_MIN,
      duration: this.DURATION,
    }).start(() => {
      this.setState({
        hidden: true,
      });
    });
  }

  render() {
    const { region = {} } = this.props;

    if (this.state.hidden) {
      return null;
    }

    return (
      <Animated.View
        style={[
          style.container,
          {
            opacity: this.state.animatedValue,
          },
        ]}
      >
        <View style={style.left}>
          <MaterialCommunityIcons
            name={'map-marker-radius'}
            style={style.marker}
          />
          <Text style={style.initials}>{region.initials}</Text>
        </View>
        <View style={style.right}>
          <Text style={style.title}>{region.title}</Text>
          <Text style={style.description}>{region.address}</Text>
        </View>
        <TouchableOpacity
          onPress={this.props.onCloseInfoPress}
          style={style.closeButton}
          hitSlop={Touchable.hitSlop()}
        >
          <SimpleLineIcons name={'close'} style={style.closeIcon} />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255,.90)',
    padding: 20,
    flexDirection: 'row',
  },
  left: {
    alignItems: 'center',
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
    flex: 1,
  },
  marker: {
    fontSize: 32,
    color: Color.orangeNormal,
  },
  initials: {
    color: Color.textNormal,
    fontSize: 20,
    fontWeight: '900',
  },
  title: {
    color: Color.textNormal,
    fontSize: 22,
    fontWeight: '700',
  },
  description: {
    color: Color.textLight,
    fontSize: 18,
    fontWeight: '600',
  },
  closeButton: {
    // position: 'absolute',
    // right: 20,
    alignSelf: 'center',
  },
  closeIcon: {
    fontSize: 24,
    color: Color.textNormal,
  },
});
