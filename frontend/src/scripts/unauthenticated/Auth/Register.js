import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import Auth from '../../../Images/authBackground.png';
import {Item, Input, Label} from 'native-base';
import RoundedButton from '../../../resuseable/RoundedButton';
import {onRegister} from '../../../Redux/authentication/action';
import {useDispatch, useSelector} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {DATA_STATE} from '../../../Redux/DataState';
import {validateEmail, validatePin} from '../../../Redux/utils/regex';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
export default function Login() {
  const [username, setusername] = useState('');
  const [email, setEmail] = useState('');
  const [pincode, setPincode] = useState('');
  const [password, setpassword] = useState('');
  const dispatch = useDispatch();
  const AuthState = useSelector(state => state.authentication.dataState);
  const submit = () => {
    if (!username || !email || !pincode || !password) {
      return ToastAndroid.show('You are missing something', ToastAndroid.SHORT);
    }
    if (!validateEmail(email)) {
      return ToastAndroid.show(
        'Please enter a valid email',
        ToastAndroid.SHORT,
      );
    }
    if (!validatePin(pincode)) {
      return ToastAndroid.show(
        'Please enter a valid pincode',
        ToastAndroid.SHORT,
      );
    }
    let reqObj = {
      name: username,
      email,
      pincode,
      password,
    };
    dispatch(onRegister(reqObj));
  };
  console.log(AuthState)
  return (
    <React.Fragment>
      <ImageBackground source={Auth} style={styles.background}>
        <View style={styles.Container}>
          <View style={styles.loginCard}>
            <Text style={styles.textColor}>Register</Text>
            <Text style={styles.secondary}>To </Text>
            <Text style={styles.secondary}>Dub World</Text>
            <Item
              floatingLabel
              style={{marginBottom: 10}}
              useNativeDriver={true}>
              <Label style={styles.labelStyle} useNativeDriver={true}>
                Username
              </Label>
              <Input
                value={username}
                onChangeText={text => setusername(text)}
              />
            </Item>
            <Item
              floatingLabel
              style={{marginBottom: 10}}
              useNativeDriver={true}>
              <Label style={styles.labelStyle}>Email</Label>
              <Input value={email} onChangeText={email => setEmail(email)} />
            </Item>
            <Item
              floatingLabel
              style={{marginBottom: 10}}
              useNativeDriver={true}>
              <Label style={styles.labelStyle} useNativeDriver={true}>
                Pincode
              </Label>
              <Input
                value={pincode}
                onChangeText={pincode => setPincode(pincode)}
              />
            </Item>
            <Item
              floatingLabel
              style={{marginBottom: 10}}
              useNativeDriver={true}>
              <Label style={styles.labelStyle} useNativeDriver={true}>
                Password
              </Label>
              <Input
                value={password}
                onChangeText={password => setpassword(password)}
                secureTextEntry={true}
              />
            </Item>
            {AuthState === DATA_STATE.FETCHING ? (
              <ActivityIndicator size="small" />
            ) : (
              <RoundedButton title="Register" onPress={submit} />
            )}
          </View>
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
    color: 'black',
    fontSize: 22,
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
});
