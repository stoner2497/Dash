import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import homeUnfill from '../Images/homeUnfill.png';
import exploreUnfill from '../Images/exploreUnfill.png';
import notifyUnfill from '../Images/notificationUnfill.png';
import profileUnfill from '../Images/profileUnfill.png';
import Home from '../Images/Home.png';
import Explore from '../Images/Explore.png';
import Notification from '../Images/Notification.png';
import Profile from '../Images/profile.png';
import Button from '../resuseable/button';
import PopupButton from './PopupButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Actions} from 'react-native-router-flux';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);

export default function TabView(props) {
  const [homeState, setHome] = useState(true);
  const [exploreState, setExplore] = useState(false);
  const [notificationState, setNotification] = useState(false);
  const [profileState, setProfile] = useState(false);

  const onHomePress = () => {
    setHome(true);
    setExplore(false);
    setNotification(false);
    setProfile(false);
    Actions.newsfeed();
  };

  const onExplorePress = () => {
    const {home, explore, notification, profile} = props;
    setHome(home);
    setExplore(explore);
    setNotification(notification);
    setProfile(profile);
    Actions.explore();
  };

  const onNotfication = () => {
    setHome(false);
    setExplore(false);
    setNotification(true);
    setProfile(false);
  };

  const onProfile = () => {
    setHome(false);
    setExplore(false);
    setNotification(false);
    setProfile(true);
  };
  const onCreatePress = () => {
    Actions.Camera();
  };

  return (
    <React.Fragment>
      <View style={styles.tabView}>
        <View style={styles.tabContainer}>
          <TouchableOpacity onPress={onHomePress} style={styles.Home}>
            <View>
              {homeState ? (
                <Image source={homeUnfill} style={styles.icons} />
              ) : (
                <Image source={Home} style={styles.icons} />
              )}
            </View>
            <Text style={styles.iconText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onExplorePress} style={styles.explore}>
            <View>
              {exploreState ? (
                <Image source={exploreUnfill} style={styles.exploreicons} />
              ) : (
                <Image source={Explore} style={styles.exploreicons} />
              )}
            </View>
            <Text style={styles.iconText}>Explore</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onCreatePress}>
            <View style={[styles.button]}>
              <Text style={{fontSize: 15}}>+</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={onNotfication} style={styles.notification}>
            <View>
              {notificationState ? (
                <Image source={notifyUnfill} style={styles.icons} />
              ) : (
                <Image source={Notification} style={styles.icons} />
              )}
            </View>
            <Text style={styles.iconText}>Notification</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onProfile} style={styles.profile}>
            <View>
              {profileState ? (
                <Image source={profileUnfill} style={styles.icons} />
              ) : (
                <Image source={Profile} style={styles.icons} />
              )}
            </View>
            <Text style={styles.iconText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  tabView: {
    width: screenWidth,
    height: hp('7.5%'),
    backgroundColor: '#777777',
    // justifyContent:'space-between',
    paddingTop: 10,
    lineHeight: 20,
  },
  Home: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop:5.5
    paddingTop: 8,
  },
  explore: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop:2.5
    marginTop: 5,
  },
  notification: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    marginLeft: 15,
    // marginTop:5.5
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2,
  },
  Add: {
    bottom: 5,
    top: 100,
  },

  icons: {
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
  },
  exploreicons: {
    shadowColor: 'white',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    height: 22,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginLeft:50
  },
  iconText: {
    color: 'white',
  },
  button: {
    borderRadius: 52,
    width: 55,
    height: 55,
    borderColor: '#FFBA0C',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // left:0.1
  },
});
