import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {onGettingUserData} from '../../Redux/rootReducers';
import OverLayCard from '../../resuseable/OverLayCard';
import RoundedButton from '../../resuseable/RoundedButton';
import {Actions} from 'react-native-router-flux';
import TabView from '../../resuseable/TabView';
import Header from '../../resuseable/Header';
import Swiper from './Swiper'
export default function NewsFeed() {
  const userData = useSelector(state => onGettingUserData(state));
  const onCompleteProfile = () => {
    Actions.newProfile();
  };

  let videoArray = [
    {
      id: 1,
      uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    },
    {
      id: 2,
      uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    },
  ];
  const handlePlaying = isVisible => {
    isVisible ? setPause(true) : setPause(false);
  };
  // console.log('user', userData.name);
  return (
    // <React.Fragment>
    //   <Header headerTitle="DashDub" />
    //   <View style={styles.conatiner}>
    //     <View style={styles.subContainer}>
    //       <OverLayCard>
    //         <Text>You are all set</Text>
    //       </OverLayCard>
    //     </View>
    //   </View>
    //   <TabView />
    // </React.Fragment>

    <React.Fragment>
      <Header headerTitle="DashDub" />
      {/* <View style={styles.conatiner}>
        <View style={styles.SwipeButton} />
        <View style={styles.subContainer}>
        </View>
      </View> */}
      <Swiper video={videoArray} />
      {/* <TabView /> */}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  headerText: {
    marginTop: 5,
    fontSize: 26,
    color: 'white',
    textShadowColor: 'white',
    textShadowOffset: {width: -2, height: -1},
    textShadowRadius: 5,
  },
  subContainer: {
    marginTop: 15,
  },
  welcomeText: {
    fontSize: 23,
    textShadowColor: '#EDA600',
    textShadowOffset: {width: -2, height: -1},
    textShadowRadius: 25,
    color: 'white',
  },
  ButtonContainer: {
    marginTop: 10,
  },
  completeProfileText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
  },
  goldenText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFBA0C',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },

  videoConatiner: {
    marginTop: 10,
    borderWidth: 1,
  },
  videoHeader: {
    backgroundColor: 'white',
    height: 40,
  },
  videoFooter: {
    backgroundColor: 'white',
    height: 40,
  },
});
