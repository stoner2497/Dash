import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Dimensions} from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {Button} from 'react-native-elements';
export default function RoundedButton(props) {
  const {onPress, title,Style} = props;
  return (
    <Button
    buttonStyle={[styles.ButtonStyle,Style]}
    title={title}
    titleStyle={styles.buttonText}
    containerStyle={styles.buttonContainer}
    onPress={onPress}
  />
  );
}

const styles = StyleSheet.create({
  ButtonStyle: {
    width: screenWidth - 280,
    height: 'auto',
    backgroundColor: 'white',
    borderRadius: 50,
    
  },
  buttonContainer:{
    shadowColor: "#FFFFFF",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.58,
    shadowRadius: 50,
    
    elevation: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
  },
});
