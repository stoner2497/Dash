import React from 'react';
import {
  FlatList,
  Image,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Container from '../../resuseable/Container';
import avatar from '../../Images/avatar.png';
import Header from '../../resuseable/Header';
import TabView from '../../resuseable/TabView';
const screenWidth = Math.round(Dimensions.get('window').width);

export default function KingQueenHistory() {
  const users = [
    {
      id: 1,
      img: avatar,
    },
    {
      id: 1,
      img: avatar,
    },
    {
      id: 1,
      img: avatar,
    },
    {
      id: 1,
      img: avatar,
    },
    {
      id: 1,
      img: avatar,
    },
    {
      id: 1,
      img: avatar,
    },
    {
      id: 1,
      img: avatar,
    },
  ];

  return (
    <React.Fragment>
      <Header />
      <View style={styles.Container}>
        <Text style={styles.headerText}>
          History of King/Queen in your pincode
        </Text>
        <FlatList
          data={users}
          renderItem={user => (
            <React.Fragment>
              <TouchableOpacity>
                <View style={styles.profileHeaderBox}>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={avatar} style={styles.profileImage} />
                    <Text style={styles.avatarText}>Username</Text>
                  </View>
                  <View>
                    <Text style={styles.date}>11/11/11</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.hr} />
            </React.Fragment>
          )}
        />
      </View>
      <TabView />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerText: {
    fontSize: 22,
    textAlign: 'center',
    color: '#FFBA0C',
    marginTop: 15,
    marginBottom: 15,
  },
  profileHeaderBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  profileImage: {
    borderRadius: 50,
    borderColor: '#FFBA0C',
    borderWidth: 1,
    height: hp('3.5%'),
    width: wp('8%'),
  },
  avatarText: {
    marginLeft: 5,
    marginTop: hp('1%'),
    color: 'white',
  },
  hr: {
    width: screenWidth,
    borderWidth: 0.5,
    borderColor: 'yellow',
  },
  date: {
    fontSize: 12,
    color: 'white',
  },
});
