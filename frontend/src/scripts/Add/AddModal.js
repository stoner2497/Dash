import React , {useState,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import {Actions} from 'react-native-router-flux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get('window');

export default function AddModal() {
  const [isVisible, handleModal] = useState(false);
  useEffect(() => {
    const onModalShow = () => {
        handleModal(!isVisible);
      };
      return () => {
        const onModalShow = () => {
            handleModal(!isVisible);
          };
      }
  })
  const onModalShow = () => {
    handleModal(!isVisible);
  };
  return (
    <View>
        <Modal
      // height={160}
      backdropColor="rgba(0,0,0,0.5)"
      backdropOpacity={1}
      isVisible={isVisible}
      style={styles.bottomModal}
      onBackdropPress={onModalShow}>
      <View style={styles.OverlayCard}>
        <TouchableOpacity onPress={() => Actions.Camera()}>
          <Text style={{color: 'white'}}>Record Video</Text>
        </TouchableOpacity>
      </View>
    </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  OverlayCard: {
    backgroundColor: 'grey',
    width: width,
    height: hp('20%'),
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
});
