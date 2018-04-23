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
} from 'react-native';
import Screen from 'components/screen';
import { Color } from 'styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class ContestsScreen extends Screen {
  constructor(props) {
    super(props);

    this.state = {
      locations: props.screenProps.locations,
      contests: props.screenProps.contests,
    };
  }

  _renderSectionHeader({ section }) {
    return (
      <View style={style.sectionHeader}>
        <View style={style.sectionDateContainer}>
          <Text style={style.sectionDate}>{section.date}</Text>
        </View>
        <Text style={style.sectionTitle}>{section.title}</Text>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={this.onLocationPress}
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
  }

  _renderSection({ item }) {
    return (
      <View style={style.item}>
        {item.band && <Text style={style.itemBand}>{item.band}</Text>}
        <Text style={style.itemTitle}>{item.title}</Text>
        <Text style={style.itemAuthor}>
          <Text style={style.itemAuthorPre}>{'de '}</Text>
          {item.author}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={style.container}>
        <SectionList
          renderItem={this._renderSection}
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
    fontWeight: '900',
    color: Color.white,
  },
  sectionTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: '900',
    color: Color.white,
    paddingLeft: 10,
  },
  sectionLocationButton: {
    flexDirection: 'row',
  },
  sectionLocationIcon: {
    fontSize: 17,
    color: Color.orangeNormal,
    marginRight: 5,
  },
  sectionLocationText: {
    fontSize: 17,
    color: Color.white,
    fontWeight: '900',
  },

  /* Section item */

  item: {
    padding: 20,
    borderBottomColor: Color.orangeLight,
    borderBottomWidth: 2,
  },
  itemBand: {
    paddingBottom: 2,
  },
  itemTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: Color.orangeNormal,
    paddingBottom: 2,
  },
  itemAuthor: {
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'italic',
  },
  itemAuthorPre: {
    fontWeight: '400',
  },
});
