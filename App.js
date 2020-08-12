/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';

import {THEME} from './src/constants';
import Slide1 from './src/components/presentation/Slide1';
import Slide from './src/components/presentation/Slide';
import {Button} from 'react-native-elements';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar
        backgroundColor={THEME.secondaryDark}
        barStyle="dark-content"
      />
      <Swiper showsButtons loop={false}>
        <Slide1 />
        <Slide
          theme={2}
          subtitle="Stay up to date and don't miss important information"
          icon="info"
        />
        <Slide
          theme={1}
          subtitle="Find out where to stay, eat and how to spend your time"
          icon="check"
        />
        <Slide
          theme={2}
          subtitle="Receive recommendations depending on your location"
          icon="star"
        />
        <Slide theme={1} subtitle="Find places worth visiting" icon="map-pin" />
        <Slide
          theme={2}
          subtitle="Use the smart map to navigate faster"
          icon="map"
        />
        <Slide
          theme={1}
          subtitle="Find out about the weather from reliable sources "
          icon="sun"
        />
        <Slide
          theme={2}
          subtitle="That was it, you can start using the app"
          icon="heart">
          <Button
            titleStyle={styles.buttonTitleStyle}
            buttonStyle={styles.button}
            title="Let's go!"
            type="solid"
          />
        </Slide>
      </Swiper>
    </>
  );
};

const styles = StyleSheet.create({
  buttonTitleStyle: {
    color: THEME.black,
    fontSize: 36,
    fontFamily: 'Cabin-Regular',
  },
  button: {
    marginTop: 16,
    borderWidth: 0,
    width: 150,
    backgroundColor: THEME.primary,
  },
});

export default App;
