/*
 * Activities
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Screen from 'components/screen';
import Config from 'config';
import { Color } from 'styles';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  FontAwesome,
} from '@expo/vector-icons';
import { find } from 'lodash';

export default class ActivitiesScreen extends Screen {
  constructor(props) {
    super(props);

    this.state = {
      locations: props.screenProps.locations,
      activities: props.screenProps.activities,
    };
  }

  onEmailPressDisabled = true;
  onEmailPress = () => {};

  onItemPressDisabled = true;
  onItemPress = () => {};

  onLocationPressDisabled = true;
  onLocationPress = () => {};

  _renderActivity = ({ item, index }) => {
    const location = find(this.state.locations, { initials: item.location });

    return (
      <View style={style.item}>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={this.onItemPress}
          disabled={this.onItemPressDisabled}
        >
          <View style={style.itemHead}>
            <View style={style.itemDateContainer}>
              <Text style={style.itemDate}>{item.date}</Text>
            </View>
            <Text style={style.itemTitle}>{item.title}</Text>
            {!this.onItemPressDisabled && (
              <MaterialCommunityIcons
                name={'chevron-double-right'}
                style={style.infoIcon}
              />
            )}
          </View>
          <Text style={style.itemData}>
            <Text style={style.itemDescriptionTitle}>
              {item.descriptionTitle}
            </Text>
            <Text style={style.itemDescription}>{item.description}</Text>
          </Text>
          {item.extraTitle && (
            <TouchableOpacity
              onPress={this.onEmailPress}
              disabled={this.onEmailPressDisabled}
              style={style.itemExtraButton}
            >
              <Text style={style.itemExtra}>
                <Text style={style.itemExtraTitle}>{item.extraTitle}</Text>
                <Text style={style.itemExtraDescription}>
                  {item.extraDescription}
                </Text>
              </Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.75}
          onPress={this.onLocationPress}
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
          <MaterialIcons
            name={'keyboard-arrow-right'}
            style={style.itemLocationArrow}
          />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={style.container}>
        <FlatList
          renderItem={this._renderActivity}
          data={this.state.activities}
          keyExtractor={(item, index) => item + index}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },

  /*
   * Item
   */

  item: {
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: Color.orangeLight,
    backgroundColor: Color.white,
  },
  /*
   * Item Head
   */

  itemHead: {
    flexDirection: 'row',
    flexGrow: 1,
    marginBottom: 10,
  },
  itemDateContainer: {
    borderRightColor: Color.orangeNormal,
    borderRightWidth: 2,
    paddingRight: 10,
    justifyContent: 'center',
  },
  itemDate: {
    fontSize: 17,
    fontWeight: '900',
    color: Color.grayDark,
  },
  itemTitle: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: '900',
    paddingLeft: 10,
    color: Color.orangeNormal,
  },

  /*
   * Item Data
   */

  itemData: {
    color: Color.textLight,
    fontSize: 14,
  },
  itemDescriptionTitle: {
    fontWeight: '700',
    fontStyle: 'italic',
  },
  itemDescription: {},

  /* Extra data */
  itemExtraButton: {
    marginTop: 10,
  },
  itemExtra: {
    color: Color.orangeNormal,
  },
  itemExtraTitle: {
    fontWeight: '700',
  },
  itemExtraDescription: {
    color: Color.grayNormal,
  },

  /* Info */

  infoButton: {},
  infoIcon: {
    alignSelf: 'center',
    fontSize: 32,
    color: Color.orangeNormal,
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
    fontWeight: '900',
    marginRight: 5,
    color: Color.grayDark,
  },
  itemLocationTitle: {
    fontWeight: '700',
    color: Color.grayDark,
    marginRight: 5,
  },
  itenLocationAdress: {
    flex: 1,
    color: Color.grayLight,
  },
  itemLocationArrow: {
    fontSize: 20,
    color: Color.grayDark,
  },
});
