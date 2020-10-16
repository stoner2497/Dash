import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import Container from '../../resuseable/Container';
import Header from '../../resuseable/Header';
import NotificationLarge from '../../resuseable/NotificationLarge';
import RoundedButton from '../../resuseable/RoundedButton';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import NotificationSmall from '../../resuseable/NotificationSmall';
import NotificationList from './NotificationList';
const {width, height} = Dimensions;
export default function InitialNotification() {
  const [show, showModal] = useState(false);
  const [notification] = useState([
    {
      username: 'sahil',
    },
    {
      username: 'sahil',
    },
    {
      username: 'sahil',
    },
    {
      username: 'sahil',
    },
    {
      username: 'sahil',
    },
    {
      username: 'sahil',
    },
    {
      username: 'sahil',
    },
  ]);
  const _onModalChange = () => {
    showModal(!show);
  };

  return (
    <React.Fragment>
      <Header headerTitle="Behind the Scene" />
      <Container>
        <NotificationList notification={notification} />
        {/* <NotificationLarge />
        <Text style={styles.primaryText}>No scene</Text>
        <TouchableOpacity onPress={_onModalChange}>
          <Text style={styles.learnMoreText}>Learn More</Text>
        </TouchableOpacity>
        <Modal
          // height={160}
          backdropColor="rgba(0,0,0,0.5)"
          backdropOpacity={1}
          isVisible={show}
          style={styles.bottomModal}
          onBackdropPress={_onModalChange}>
          <View style={styles.OverlayCard}>
              <NotificationSmall />
            <Text style={styles.modalText}>On DashDub We say notification as behind the scene as here all your horns,cringe,comment will be listed and you will be notify for that who has signed you and who has given horns to your dub but will not mention who has cringed on your dub </Text>
          </View>
        </Modal> */}
      </Container>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  primaryText: {
    color: 'white',
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
  },
  learnMoreText: {
    marginTop: 20,
    color: 'white',
    fontSize: 14,
  },
  OverlayCard: {
    backgroundColor: 'grey',
    width: width,
    height: 'auto',
    alignItems: 'center',
    padding: 15,
  },
  bottomModal: {
    // alignItems
    justifyContent: 'flex-end',
    margin: 0,
    // backgroundColor:'white',
    height: 20,
  },
  modalText: {
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});
