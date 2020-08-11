import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {THEME} from '../../constants';
import {Icon} from 'react-native-elements';
import Subtitle from './Subtitle';
import Title from './Title';

export default class Slide extends Component {
  render() {
    let colors = {};

    if (this.props.theme === 1) {
      colors.backgroundColor = THEME.primary;
      colors.titleColor = THEME.secondary;
      colors.iconColor = THEME.secondary;
      colors.iconReverseColor = THEME.white;
      colors.subtitleColor = THEME.secondaryLight;
    } else if (this.props.theme === 2) {
      colors.backgroundColor = THEME.secondary;
      colors.titleColor = THEME.primary;
      colors.iconColor = THEME.primary;
      colors.iconReverseColor = THEME.black;
      colors.subtitleColor = THEME.primaryLight;
    }

    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.backgroundColor,
          }}>
          <View style={styles.spacer} />
          <View style={styles.titleView}>
            <Title color={colors.titleColor} />
          </View>
          <View style={styles.imageView}>
            <Icon
              reverse
              name={this.props.icon}
              type="feather"
              color={colors.iconColor}
              reverseColor={colors.iconReverseColor}
              size={100}
            />
          </View>
          <View style={{flex: 1.5}}>
            <Subtitle color={colors.subtitleColor}>
              {this.props.subtitle}
            </Subtitle>
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  spacer: {
    flex: 1,
  },
  titleView: {
    flex: 1,
  },
  imageView: {flex: 2.5, alignItems: 'center', justifyContent: 'center'},
});
