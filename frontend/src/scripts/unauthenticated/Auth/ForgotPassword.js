import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Auth from '../../../Images/authBackground.png';
import {Overlay} from 'react-native-elements';
import {Item, Input, Label} from 'native-base';
import {Actions} from 'react-native-router-flux';
import RoundedButton from '../../../resuseable/RoundedButton';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export default function Login() {
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    console.log(email);
  };

  return (
    <React.Fragment>
      <ImageBackground source={Auth} style={styles.background}>
        <View style={styles.Container}>
          <Overlay
            isVisible={true}
            overlayStyle={styles.loginCard}
            onBackdropPress={() => Actions.pop()}>
            <View>
              <Text style={styles.textColor}>Forgot Password</Text>
            </View>

            <Item
              floatingLabel
              style={{marginBottom: 10}}
              useNativeDriver={true}>
              <Label style={styles.labelStyle}>Registered Email</Label>
              <Input value={email} onChangeText={email => setEmail(email)} />
            </Item>
            <View style={styles.buttonConatiner}>
              <RoundedButton title="Submit" onPress={onSubmit} />
            </View>
          </Overlay>
        </View>
      </ImageBackground>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  background: {
    width: screenWidth,
    height: screenHeight,
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginCard: {
    backgroundColor: 'grey',
    width: screenWidth - 90,
    height: 'auto',
    opacity: 0.8,
    marginBottom: 100,
    alignItems: 'center',
    padding: 15,
  },
  textColor: {
    color: 'white',
    fontSize: 22,
    marginBottom: 15,
  },
  secondary: {
    color: 'black',
    fontSize: 16,
  },
  inputContainerStyle: {
    borderColor: 'black',
  },
  labelStyle: {
    color: 'white',
    fontSize: 14,
  },
  buttonConatiner: {
    marginTop: 15,
  },
  forgotPasswordConatiner: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  forgotText: {
    color: 'white',
    fontSize: 12,
    margin: 5,
  },
});
