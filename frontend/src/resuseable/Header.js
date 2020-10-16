import React from 'react';
import {SafeAreaView, View, Text, StyleSheet,Platform} from 'react-native';
import Stories from './Stories'
export default function Header(props) {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.headerText}>{props.headerTitle}</Text>
      {/* <Stories /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    // paddingTop: Platform.OS === 'android' ? 25 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',

  },
  headerText: {
    padding:15,
    marginTop: 5,
    fontSize: 26,
    color: 'white',
    textShadowColor: 'white',
    textShadowOffset: {width: -2, height: -1},
    textShadowRadius: 5,
  },
});
