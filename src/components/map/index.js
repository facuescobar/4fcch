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
import { Color } from 'styles';
import Config from 'config';
import { find, map } from 'lodash';
import MarkerInfo from './modules/marker-info';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class MapScreen extends Screen {
  screenTitle = 'Mapa';
  screenTitleStyle = {
    backgroundColor: Color.orangeNormal,
    color: Color.white,
  };

  constructor(props) {
    super(props);

    const { params } = props.navigation.state;

    // Set Regions
    this.regions = Config.map.regions;

    let initialRegion = Config.map.initialRegion;
    let regionTmp;

    // Set initial region
    if (params && params.zoomTo) {
      regionTmp = find(this.regions, { initials: params.zoomTo });

      if (regionTmp) {
        initialRegion = regionTmp.coordsZoom;
      }
    }

    this.state = {
      showRegionInfo: Boolean(regionTmp),
      initialRegion,
      region: regionTmp,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { params } = nextProps.navigation.state;

    if (params && params.zoomTo) {
      let nextRegion;
      let regionTmp;

      regionTmp = find(this.regions, { initials: params.zoomTo });

      if (regionTmp) {
        nextRegion = regionTmp.coordsZoom;

        this.setState(
          {
            showRegionInfo: true,
            region: regionTmp,
          },
          () => {
            this._animateToRegion(nextRegion);
          },
        );
      }
    }
  }

  _animateToRegion(region) {
    setTimeout(() => {
      this.mapView.animateToRegion(region, 1000);
    }, 750);
  }

  onMapLayout = () => {
    this._animateToRegion(this.state.initialRegion);
  };

  onMarkerPress = region => {
    this.setState({
      showRegionInfo: true,
      region,
    });
  };

  onCloseRegionInfoPress = () => {
    this.setState({
      showRegionInfo: false,
    });
  };

  _renderMapMarker = (region, index) => {
    return (
      <MapView.Marker
        key={index}
        coordinate={region.coords}
        pinColor={Color.orangeNormal}
        onPress={() => {
          this.onMarkerPress(region);
        }}
      />
    );
  };

  _render() {
    return (
      <View style={style.container}>
        <MapView
          ref={mapView => {
            this.mapView = mapView;
          }}
          style={style.map}
          initialRegion={Config.map.initialRegion}
          provider={'google'}
          zoomEnabled={true}
          scrollEnabled={true}
          onLayout={this.onMapLayout}
          showsUserLocation={true}
        >
          {map(this.regions, this._renderMapMarker)}
        </MapView>

        <MarkerInfo
          visible={this.state.showRegionInfo}
          region={this.state.region}
          onCloseInfoPress={this.onCloseRegionInfoPress}
        />
      </View>
    );
  }
  // onRegionChange={region => {
  //   console.log(region);
  // }}
  // onPress={()=>{}}
  // onMarkerPress={()=>{}}
  render() {
    return (
      <SafeAreaView style={style.container}>
        {this._renderStatusBar()}
        {this._renderScreenTitle()}
        {this._render()}
      </SafeAreaView>
    );
  }

  _regionFrom(lat, lon, distance) {
    distance = distance / 2;
    const circumference = 40075;
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
    const angularDistance = distance / circumference;

    const latitudeDelta = distance / oneDegreeOfLatitudeInMeters;
    const longitudeDelta = Math.abs(
      Math.atan2(
        Math.sin(angularDistance) * Math.cos(lat),
        Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat),
      ),
    );

    return (result = {
      latitude: lat,
      longitude: lon,
      latitudeDelta,
      longitudeDelta,
    });
  }

  _getRegionForCoordinates(points) {
    let minX, maxX, minY, maxY;

    // init first point
    (point => {
      minX = point.latitude;
      maxX = point.latitude;
      minY = point.longitude;
      maxY = point.longitude;
    })(points[0]);

    // calculate rect
    points.map(point => {
      minX = Math.min(minX, point.latitude);
      maxX = Math.max(maxX, point.latitude);
      minY = Math.min(minY, point.longitude);
      maxY = Math.max(maxY, point.longitude);
    });

    const midX = (minX + maxX) / 2;
    const midY = (minY + maxY) / 2;
    const deltaX = maxX - minX;
    const deltaY = maxY - minY;

    return {
      latitude: midX,
      longitude: midY,
      latitudeDelta: deltaX,
      longitudeDelta: deltaY,
    };
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerText: {
    fontSize: 14,
    fontWeight: '900',
    color: Color.white,
    backgroundColor: Color.orangeNormal,
  },
  markerIcon: {
    fontSize: 60,
    color: Color.orangeNormal,
  },
});
