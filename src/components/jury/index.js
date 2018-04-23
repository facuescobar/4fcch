/*
 * Jury
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  Image,
  Dimensions,
} from 'react-native';
import Screen from 'components/screen';
import { Color } from 'styles';
import Config from 'config';
import { map } from 'lodash';
import assets from 'assets';

export default class JuryScreen extends Screen {
  screenTitle = 'Jurados';
  screenTitleStyle = {
    marginBottom: 0,
    color: Color.textNormal,
    backgroundColor: Color.white,
  };
  fixedSrollView = true;
  scrollViewOptions = {
    scrollEnabled: false,
  };

  _renderSectionHeader = ({ section }) => {
    return <Text style={style.sectionTitle}>{section.title}</Text>;
  };

  _renderPerson = ({ item, index }) => {
    return (
      <View style={style.person} key={index}>
        <View style={style.personNameContainer}>
          <Text style={style.personName}>{item.name}</Text>
        </View>
        <View style={style.personImageContainer}>
          <Image
            source={assets[item.image]}
            style={style.personImage}
            resizeMode={'contain'}
          />
        </View>
        <Text style={style.personDescription}>{item.description}</Text>
      </View>
    );
  };

  _renderSeparator = () => {
    return <View style={style.personSeparator} />;
  };

  _render() {
    return (
      <View style={style.container}>
        <SectionList
          renderItem={this._renderPerson}
          renderSectionHeader={this._renderSectionHeader}
          ItemSeparatorComponent={this._renderSeparator}
          sections={Config.jury}
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
  },
  sectionTitle: {
    fontSize: 22,
    padding: 10,
    paddingHorizontal: 20,
    fontWeight: '300',
    color: Color.white,
    backgroundColor: Color.grayBlack,
  },
  personSeparator: {
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: Color.grayLight,
  },
  person: {
    padding: 20,
  },
  personNameContainer: {
    alignSelf: 'flex-start',
  },
  personName: {
    fontSize: 22,
    color: Color.textNormal,
    fontWeight: '700',
    paddingBottom: 20,
  },
  personImageContainer: {
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').width - 40,
    marginBottom: 20,
  },
  personImage: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  personDescription: {
    fontSize: 16,
  },
});
