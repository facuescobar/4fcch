/*
 * Contests
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Screen from 'components/screen';
import { Color, TextStyle, Device } from 'styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import assets from 'assets';
import { find } from 'lodash';

export default class ContestsScreen extends Screen {
  constructor(props) {
    super(props);

    this.state = {
      title: props.screenProps.title,
      locations: props.screenProps.locations,
      contests: props.screenProps.contests,
    };
  }

  onLocationPress = initials => {
    this._navigate(
      'map',
      {
        zoomTo: initials,
      },
      true,
    );
  };

  onItemPress = (section, contest, location) => {
    this._navigate(
      'contest',
      {
        title: this.state.title + ' - ' + section.date,
        contest: {
          date: section.date,
          tagHead: section.title,
          ...contest,
        },
        location,
      },
      true,
    );
  };

  _renderSectionHeader = ({ section }) => {
    return (
      <View style={style.sectionHeader}>
        <View style={style.sectionDateContainer}>
          <Text style={style.sectionDate}>{section.date}</Text>
        </View>
        <Text style={style.sectionTitle}>{section.title}</Text>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => {
            this.onLocationPress(section.location);
          }}
          style={style.sectionLocationButton}
        >
          <MaterialCommunityIcons
            name={'map-marker-radius'}
            style={style.sectionLocationIcon}
          />
          <Text style={style.sectionLocationText}>{section.location}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  _renderContest = ({ item, section }) => {
    const location = find(this.state.locations, { initials: section.location });

    return (
      <TouchableOpacity
        style={style.item}
        activeOpacity={0.75}
        onPress={() => {
          this.onItemPress(section, item, location);
        }}
      >
        <View style={style.itemThumbnail}>
          <Image
            style={style.itemImage}
            source={assets[item.imageThumb]}
            resizeMode={'cover'}
          />
        </View>
        <View style={style.itemBody}>
          {item.band && <Text style={style.itemBand}>{item.band}</Text>}
          {item.tag && (
            <Text style={style.itemTag}>{item.tag.toUpperCase()}</Text>
          )}
          <Text style={style.itemTitle}>{item.title}</Text>
          <Text style={style.itemAuthor}>
            <Text style={style.itemAuthorPre}>{'de '}</Text>
            {item.author}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={style.container}>
        <SectionList
          renderItem={this._renderContest}
          renderSectionHeader={this._renderSectionHeader}
          sections={this.state.contests}
          keyExtractor={(item, index) => item + index}
          stickySectionHeadersEnabled={true}
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

  /* Section Header */

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingVertical: 10,
    borderBottomWidth: 5,
    backgroundColor: Color.grayBlack,
    borderBottomColor: Color.orangeNormal,
  },
  sectionDateContainer: {
    borderRightColor: Color.white,
    borderRightWidth: 2,
    paddingRight: 10,
    justifyContent: 'center',
  },
  sectionDate: {
    fontSize: 17,
    fontFamily: TextStyle.black,
    color: Color.white,
  },
  sectionTitle: {
    flex: 1,
    fontSize: 17,
    fontFamily: TextStyle.semiBoldSC,
    color: Color.white,
    paddingLeft: 10,
  },
  sectionLocationButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionLocationIcon: {
    fontSize: 20,
    color: Color.orangeNormal,
    marginRight: 5,
  },
  sectionLocationText: {
    fontSize: 17,
    color: Color.white,
    fontFamily: TextStyle.black,
  },

  /* Section item */

  item: {
    padding: 20,
    borderBottomColor: Color.orangeLight,
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemThumbnail: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: 'tomato',
  },
  itemImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 5,
  },
  itemBody: {
    flex: 1,
  },
  itemBand: {
    fontSize: 14,
    color: Color.grayNormal,
    paddingBottom: 3,
  },
  itemTag: {
    fontSize: 14,
    color: Color.grayNormal,
    paddingBottom: 3,
  },
  itemTitle: {
    fontSize: 17,
    fontFamily: TextStyle.blackSC,
    color: Color.orangeNormal,
    paddingBottom: 3,
  },
  itemAuthor: {
    fontSize: 15,
    fontFamily: TextStyle.bookIta,
  },
  itemAuthorPre: {
    fontWeight: '400',
  },
});
