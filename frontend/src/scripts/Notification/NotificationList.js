import React from 'react';
import {View, Text, FlatList, StyleSheet, Image,Dimensions,TouchableOpacity} from 'react-native';
import {Row} from 'native-base';
import avatar from '../../Images/avatar.png';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import NotificationSmall from '../../resuseable/NotificationSmall';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

//todo create with data notification List
export default function NotificationList(props) {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Text style={{color: 'white', fontSize: 26}}>Today</Text>
        <FlatList
          data={props.notification}
          renderItem={({item}) => (
            <React.Fragment>
              <TouchableOpacity>
                <View style={styles.profileHeaderBox}>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={avatar} style={styles.profileImage} />
                    <Text style={styles.avatarText}>Username has swaged your frame</Text>
                  </View>
                  <View>
                    <Text style={styles.date}>Video</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.hr} />
            </React.Fragment>
          )}
        />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  profileImage: {
    marginBottom: 5,
    borderRadius: 50,
    borderColor: '#FFBA0C',
    borderWidth: 1,
    height: heightPercentageToDP('3%'),
    width: widthPercentageToDP('6.8%'),
    padding: 15,
    margin: 5,
  },
  leftSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 120,
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
    height: heightPercentageToDP('3.5%'),
    width: widthPercentageToDP('8%'),
  },
  avatarText: {
    marginLeft: 5,
    marginTop: heightPercentageToDP('1%'),
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
