import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Container from '../../resuseable/Container';
import thumb from '../../Images/thumb.png';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import RoundedButton from '../../resuseable/RoundedButton';
import King from '../../resuseable/King';
import Queen from '../../resuseable/Queen';
import Modal from 'react-native-modal';
import TextInput from '../../resuseable/InputField';
import {Actions} from 'react-native-router-flux';
const screenWidth = Math.round(Dimensions.get('window').width);

export default function KingQueenInitiate() {
  const [isVisible, handleModal] = useState(false);
  const [pincode, onHandlePincode] = useState('');

  let thumbnails = [];
  console.log(thumbnails);

  const thumbArray = [
    {
      id: 1,
      img: thumb,
    },
    {
      id: 2,
      img: thumb,
    },
    {
      id: 3,
      img: thumb,
    },
    {
      id: 4,
      img: thumb,
    },
    {
      id: 4,
      img: thumb,
    },
  ];
  const onModalChange = () => {
    handleModal(!isVisible);
  };
  const onChange = text => {
    onHandlePincode(text);
  };
  const onHistory = () => {
    Actions.History();
  };
  return (
    <Container>
      <View style={styles.topButtonContainer}>
        <View>
          <RoundedButton onPress={onModalChange} title="Change pincode" />
        </View>
        <View style={styles.button}>
          <RoundedButton title="History" onPress={onHistory} />
        </View>
      </View>
      <ScrollView style={{marginBottom: 40}}>
        <View style={{marginTop: 15}}>
          <View style={styles.textContainer}>
            <King />
            <Text style={{color: 'white', fontSize: 25}}>
              King in your pincode
            </Text>
          </View>
          <Text style={styles.username}>UserName</Text>
          <ScrollView horizontal>
            {thumbArray.map(img => (
              <Image
                source={img.img}
                resizeMode="contain"
                style={styles.thumbContainer}
              />
            ))}
          </ScrollView>
        </View>
        <View style={{marginTop: 15}}>
          <View style={styles.textContainer}>
            <Queen style={{marginTop: 3, marginRight: 3}} />
            <Text style={{color: 'white', fontSize: 25}}>
              Queen in your pincode
            </Text>
          </View>
          <Text style={styles.username}>UserName</Text>
          <ScrollView horizontal>
            {thumbArray.map(img => (
              <Image
                source={img.img}
                resizeMode="contain"
                style={styles.thumbContainer}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <Modal
        // height={160}
        backdropColor="rgba(0,0,0,0.5)"
        backdropOpacity={1}
        isVisible={isVisible}
        style={styles.bottomModal}
        onBackdropPress={onModalChange}>
        <View style={styles.OverlayCard}>
          <TextInput label="Pincode" value={pincode} onChange={onChange} />
          <RoundedButton title="Change pincode" />
        </View>
      </Modal>
    </Container>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  thumbContainer: {
    width: widthPercentageToDP('30%'),
    height: heightPercentageToDP('22%'),
    borderColor: 'yellow',
    borderWidth: 0.5,
    marginLeft: 15,
  },
  topButtonContainer: {
    marginTop: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 25,
  },
  button: {
    marginLeft: 20,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  username: {
    color: 'white',
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
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
    height: heightPercentageToDP('25%'),
    alignItems: 'center',
    padding: 15,
  },
});
