/*
 * Activity
 */

import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text } from 'components/utils';
import Screen from 'components/screen';
import { buldDayNavigator } from 'navigation/day';
import Config from 'config';
import { Color, TextStyle, Device } from 'styles';
import assets from 'assets';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default class ActivityScreen extends Screen {
  screenBackground = Color.white;

  constructor(props) {
    super(props);

    this.state = {
      activity: props.navigation.state.params.activity,
      location: props.navigation.state.params.location,
    };
  }

  onLocationPressDisabled = true;
  onLocationPress = initials => {
    this._navigate('map', {
      zoomTo: initials,
    });
  };

  _render() {
    const { activity, location } = this.state;
    const { page } = activity;

    return (
      <View style={style.container}>
        <View style={style.head}>
          <Text style={style.date}>{activity.date}</Text>
          <Text style={style.tag}>{page.tag}</Text>
        </View>
        <View style={style.body}>
          <Text style={[style.title, !page.subtitle && style.titleOnly]}>
            {page.title}
          </Text>
          {page.subtitle && <Text style={style.subtitle}>{page.subtitle}</Text>}
          {page.image && (
            <View style={style.imageContainer}>
              <Image style={style.image} source={assets[page.image]} />
            </View>
          )}
          <Text style={style.description}>{page.description}</Text>
          {activity.extraTitle && (
            <Text style={style.itemExtra}>
              <Text style={style.itemExtraTitle}>{activity.extraTitle}</Text>
              <Text style={style.itemExtraDescription}>
                {activity.extraDescription}
              </Text>
            </Text>
          )}
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => {
              this.onLocationPress(location.initials);
            }}
            disabled={this.onLocationPressDisabled}
            style={style.itemLocation}
          >
            <MaterialCommunityIcons
              name={'map-marker-radius'}
              style={style.itemLocationIcon}
            />

            <Text style={style.itemLocationInitials}>{location.initials}</Text>
            <Text style={style.itemLocationTitle}>{location.title}</Text>
            <Text
              style={style.itenLocationAdress}
              numberOfLines={1}
              ellipsizeMode={'tail'}
            >
              {location.address}
            </Text>

            {!this.onLocationPressDisabled && (
              <MaterialIcons
                name={'keyboard-arrow-right'}
                style={style.itemLocationArrow}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  date: {
    fontSize: 18,
    fontFamily: TextStyle.black,
    color: Color.white,
    backgroundColor: Color.orangeNormal,
    padding: 10,
    paddingLeft: 20,
  },
  tag: {
    fontSize: 18,
    fontFamily: TextStyle.boldSC,
    padding: 10,
    color: Color.grayDark,
  },
  imageContainer: {
    height: Device.width(),
  },
  body: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: TextStyle.blackSC,
    color: Color.orangeNormal,
  },
  titleOnly: {
    marginBottom: 15,
  },
  subtitle: {
    fontFamily: TextStyle.bold,
    color: Color.grayDark,
    paddingVertical: 5,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
  },

  /* Extra data */
  itemExtra: {
    marginTop: 10,
    color: Color.orangeNormal,
  },
  itemExtraTitle: {
    fontFamily: TextStyle.bold,
  },
  itemExtraDescription: {
    color: Color.grayLight,
    fontFamily: TextStyle.medIta,
  },

  /*
     * Item Location
     */

  itemLocation: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemLocationIcon: {
    fontSize: 24,
    color: Color.orangeNormal,
    marginRight: 5,
  },
  itemLocationInitials: {
    fontSize: 16,
    fontFamily: TextStyle.black,
    marginRight: 5,
    color: Color.grayDark,
  },
  itemLocationTitle: {
    fontFamily: TextStyle.bold,
    color: Color.grayDark,
    marginRight: 5,
  },
  itenLocationAdress: {
    flex: 1,
    color: Color.grayLight,
    fontFamily: TextStyle.bookIta,
  },
  itemLocationArrow: {
    fontSize: 20,
    color: Color.grayDark,
  },
});
