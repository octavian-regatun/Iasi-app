import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {THEME} from '../../constants';

export default class Subtitle extends Component {
  render() {
    return (
      <Text
        style={{
          fontFamily: 'Cabin-Regular',
          fontSize: 36,
          textAlign: 'center',
          color: this.props.color,
          marginHorizontal: 25,
        }}>
        {this.props.children}
      </Text>
    );
  }
}
