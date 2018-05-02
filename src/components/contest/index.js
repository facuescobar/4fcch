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
import { BlurView } from 'expo';

export default class ContestScreen extends Screen {
  screenBackground = Color.white;

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      contest: props.navigation.state.params.contest,
      location: props.navigation.state.params.location,
    };
  }

  onLocationPressDisabled = false;
  onLocationPress = initials => {
    this._navigate('map', {
      zoomTo: initials,
    });
  };

  _render() {
    const { contest, location } = this.state;

    return (
      <View style={style.container}>
        <View style={style.head}>
          <Text style={style.date}>{contest.date}</Text>
          <Text style={style.tagHead}>{contest.tagHead}</Text>
        </View>
        <View style={style.body}>
          {contest.tag && (
            <Text style={style.tag}>{contest.tag.toUpperCase()}</Text>
          )}
          <Text style={style.title}>{contest.title}</Text>
          <Text style={style.author}>
            {'de '}
            {contest.author}
          </Text>
          {contest.image && (
            <View style={style.imageContainer}>
              <Image
                style={style.imageBlur}
                source={assets[contest.image]}
                resizeMode={'cover'}
                blurRadius={25}
              />
              <BlurView tint="dark" style={StyleSheet.absoluteFill}>
                <Image
                  style={style.image}
                  source={assets[contest.image]}
                  resizeMode={'contain'}
                />
              </BlurView>
            </View>
          )}

          <Text style={style.synopsis}>{'Sinopsis: '}</Text>
          <Text style={style.description}>{contest.synopsis}</Text>

          {/* Location */}
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
    backgroundColor: Color.white,
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
    color: Color.white,
    backgroundColor: Color.grayBlack,
    padding: 10,
    paddingLeft: 20,
  },
  tagHead: {
    fontSize: 18,
    fontFamily: TextStyle.boldSC,
    padding: 10,
    color: Color.grayBlack,
  },
  body: {
    padding: 20,
  },
  tag: {
    fontSize: 14,
    color: Color.grayNormal,
    paddingBottom: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: TextStyle.blackSC,
    color: Color.orangeNormal,
    paddingBottom: 5,
  },
  author: {
    fontSize: 14,
    fontFamily: TextStyle.bookIta,
    paddingBottom: 15,
  },
  authorHead: {
    color: Color.textNormal,
    fontFamily: TextStyle.bold,
  },
  imageContainer: {
    flex: 1,
    marginBottom: 20,
    width: Device.width() - 40,
    height: Device.width() * 0.8,
    backgroundColor: Color.black,
  },
  imageBlur: {
    flex: 1,
    width: undefined,
    height: undefined,
    opacity: 0.6,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  synopsis: {
    fontFamily: TextStyle.bookIta,
    marginBottom: 5,
    color: Color.grayNormal,
  },
  description: {
    fontSize: 16,
    marginBottom: 0,
  },

  /*
   * Item Location
   */

  itemLocation: {
    paddingTop: 15,
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
