import React from 'react';
import {View, ImageBackground, StyleSheet, Dimensions} from 'react-native';
import Auth from '../Images/authBackground.png'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export default function Backgroud(props) {
  return (
    <View>
      <ImageBackground source={Auth} style={styles.background}>
        {props.children}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: screenWidth,
    height: screenHeight,
  },
});
