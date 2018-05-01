/*
 * Map
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { MapView } from 'expo';
import Screen from 'components/screen';
import { Color, TextStyle } from 'styles';
import Config from 'config';
import { find, map } from 'lodash';
import MarkerInfo from './modules/marker-info';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const MapMarker = props => {
  if (props.isActive) {
    return (
      <MapView.Marker {...props}>
        <MaterialCommunityIcons name={'map-marker-radius'} style={style.icon} />
      </MapView.Marker>
    );
  }
  return <MapView.Marker {...props} />;
};

const style = StyleSheet.create({
  icon: {
    color: Color.orangeNormal,
  },
});
export default MapMarker;
