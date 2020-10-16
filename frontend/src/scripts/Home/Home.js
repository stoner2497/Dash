import React, {useState} from 'react';
import {ButtonGroup} from 'react-native-elements';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../../resuseable/Header';
import TabView from '../../resuseable/TabView';
import Swiper from './Swiper';
import KingQueen from './KingQueen';
import KingQueenInitiate from './KingQueenInitiate';
import NewUser from './NewUser';
let color;
export default function Home() {
  const [selectedIndex, updateIndex] = useState(0);
  const [studio, setStudio] = useState(true);
  const [kingQueen, setKingQueen] = useState(false);
  const updateSelectedIndex = selected => {
    updateIndex(selected);
  };

  let data;
  let videoArray = [
    {
      id: 2,
      uri:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    },
    {
      id: 3,
      uri:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    },
  ];
  if (studio) {
    color = 'Yellow';
  } else {
    color = 'black';
  }
  if (selectedIndex === 0) {
    data = <Swiper video={videoArray} />;
    // data = <NewUser />
  } else {
    console.log('1');
    data = <KingQueenInitiate />;
  }
  const onStudioPress = () => {
    updateIndex(0);
    setStudio(true);
    setKingQueen(false);
  };
  const onKingPress = () => {
    updateIndex(1);
    setStudio(false);
    setKingQueen(true);
  };

  return (
    <React.Fragment>
      <Header headerTitle="DashDub" />

      <View style={styles.groupButton}>
        <TouchableOpacity style={[styles.Button]} onPress={onStudioPress}>
          <Text
            style={[styles.ButtonText, {color: studio ? '#FFBA0C' : 'white'}]}>
            Studio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onKingPress}>
          <Text
            style={[
              styles.ButtonText,
              {color: kingQueen ? '#FFBA0C' : 'white'},
            ]}>
            King/Queen
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1}}>{data}</View>
      {/* <TabView /> */}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  groupButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginTop: 30,
    borderWidth: 1,
    height: 40,
    paddingTop: 10,
    backgroundColor: 'black',
    borderBottomColor: '#EDA600',
  },
  ButtonText: {
    color: 'white',
  },
  Button: {
    backgroundColor: color,
  },
  Stories: {
    // backgroundColor: 'black',
    // width: 5,
    alignSelf: 'flex-end',
  },
});
