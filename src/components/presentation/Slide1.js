import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {THEME} from '../../constants';
import Subtitle from './Subtitle';
import Title from './Title';

export default class Slide1 extends Component {
  render() {
    return (
      <>
        <View style={styles.backgroundView}>
          <View style={styles.spacer} />
          <View style={styles.titleView}>
            <Title color={THEME.secondary} />
          </View>
          <View style={styles.imageView}>
            <AutoHeightImage
              source={{uri: 'https://i.imgur.com/yrl4fdL.png'}}
              width={(Dimensions.get('window').width / 100) * 80}
            />
          </View>
          <View style={{flex: 1.5}}>
            <Subtitle color={THEME.secondaryLight}>
              The only app you need to get through this city
            </Subtitle>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: THEME.primary,
  },
  spacer: {
    flex: 1,
  },
  titleView: {
    flex: 1,
  },
  imageView: {flex: 2.5, alignItems: 'center', justifyContent: 'center'},
});
