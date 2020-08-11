import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ABOUT_APP, THEME} from '../../constants';

export default class Title extends Component {
  render() {
    return (
      <Text
        style={{
          fontFamily: 'Lobster-Regular',
          fontSize: 100,
          textAlign: 'center',
          color: this.props.color,
        }}>
        {ABOUT_APP.title}
      </Text>
    );
  }
}
