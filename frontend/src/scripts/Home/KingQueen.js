import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import KingBig from '../../resuseable/KingBig';
import QueenBig from '../../resuseable/QueenBig';
import RoundedButton from '../../resuseable/RoundedButton';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import King from '../../resuseable/King';
import Queen from '../../resuseable/Queen'
const screenWidth = Math.round(Dimensions.get('window').width);

export default function KingQueen() {
  const [isVisible, handleModal] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let countDownDate = new Date('Aug 30, 2020 00:00:00').getTime();
  setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }, 1000);
  const onModalShow = () => {
    handleModal(!isVisible);
  };
  return (
    <React.Fragment>
      <View style={styles.Container}>
        <View style={styles.kingQueenContainer}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <KingBig />
            <Text style={{color: 'white', fontSize: 18}}>King</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 30,
              marginRight: 18,
            }}>
            <QueenBig />
            <Text style={{color: 'white', fontSize: 18, marginTop: 16}}>
              Queen
            </Text>
          </View>
        </View>
        <Text style={styles.StartingText}>Will be Starting in</Text>
        <View style={styles.timer}>
          <Text style={styles.timeText}>{days} Days</Text>
          <Text style={styles.timeText}>{hours} Hours</Text>
          <Text style={styles.timeText}>{minutes} minutes</Text>
          <Text style={styles.timeText}>{seconds} seconds</Text>
        </View>
        <View style={styles.buttonContainer}>
          <RoundedButton title="know more" onPress={onModalShow} />
        </View>

          <Modal
            // height={160}
            backdropColor="rgba(0,0,0,0.5)"
            backdropOpacity={1}
            isVisible={isVisible}
            style={styles.bottomModal}
            onBackdropPress={onModalShow}>
            <View style={styles.OverlayCard}>
              <View style={styles.modalHeader}>
              <King />
              <Text style={styles.headerText}>King/Queen</Text>
              <Queen style={styles.modalQueen} />
              </View>
              <Text style={styles.modalText}>
                King/Queen is the opportunity given by DashDub Inc to each and
                every user to get popular. If you become King/queen you'll be
                showcased on current tab for 7 days all your dubs will be
                shown to user in your nearby. user can change the pincode to
                see other pincode's king/queen Only the best will be selected by
                the dashdub user community itself. Who produce the quality
                content will be selected as king/queen.{' '}Happy Dubbing.
              </Text>
            </View>
          </Modal>

      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 15,
    backgroundColor: 'black',
    flex: 1,
    //   justifyContent:'center',
    alignItems: 'center',
  },
  kingQueenContainer: {
    marginTop: heightPercentageToDP('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chairs: {
    marginLeft: 40,
  },
  timer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    marginRight: widthPercentageToDP('5%'),
  },
  timeText: {
    color: '#FFBA0C',
    marginLeft: 15,

    fontSize: heightPercentageToDP('2%'),
  },
  StartingText: {
    marginTop: 50,
    color: '#FFBA0C',
    fontSize: 32,
    textShadowColor: 'white',
    textShadowOffset: {width: 0, height: -1},
    textShadowRadius: 5,
  },
  buttonContainer: {
    marginTop: heightPercentageToDP('7%'),
  },
  bottomModal: {
    // alignItems
    justifyContent: 'flex-end',
    margin: 0,
    // backgroundColor:'white',
    height: 20,
  },
  OverlayCard: {
    backgroundColor: 'grey',
    width: screenWidth,
    height: heightPercentageToDP('50%'),
    alignItems: 'center',
    padding: 15,
  },
  headerText:{
    fontSize:heightPercentageToDP("3%"),
    color:'#FFBA0C',
    textShadowColor: 'white',
    textShadowOffset: {width: 0, height: -1},
    textShadowRadius: 5,
  },
  modalText:{
    fontSize:heightPercentageToDP("2.5%"),
    color: 'white',
    textAlign:'center'
  },
  modalHeader:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  modalQueen:{
    marginTop:heightPercentageToDP("0.5%"),
    marginLeft:widthPercentageToDP("1%")
  }
});
