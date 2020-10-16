import React from 'react';
import {ImageBackground, StyleSheet, Dimensions} from 'react-native';
import Splash from '../../../Images/LandingScreen.png';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export default function SplashScreen() {
  const authenticated = useSelector(state => state.authentication.authenticated);

  setTimeout(() => {
    console.log(authenticated)
    if (authenticated) {
      Actions.newsfeed();
    } else {
      Actions.Auth();
    }
  }, 2000);

  return (
    <React.Fragment>
      <ImageBackground source={Splash} style={styles.splashScreen} />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  splashScreen: {
    width: screenWidth,
    height: screenHeight,
    resizeMode: 'cover',
  },
});
