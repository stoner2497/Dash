import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Auth from '../../../Images/authBackground.png';
import {Item, Input, Label} from 'native-base';
import {Actions} from 'react-native-router-flux';
import RoundedButton from '../../../resuseable/RoundedButton';
import {validateEmail} from '../../../Redux/utils/regex';
import {useDispatch, useSelector} from 'react-redux';
import {onLogin} from '../../../Redux/authentication/action';
import {getAuth} from '../../../Redux/rootReducers';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const AuthState = useSelector(state => state.authentication.dataState);
  const authenticated = useSelector(state => state.authentication.authenticated);

  useEffect(() => {
    console.log(authenticated)
    if (authenticated) {
      Actions.newsfeed();
    }
  });

  const dispatch = useDispatch();
  const onSubmit = () => {
    // if (!email || !password) {
    //   return ToastAndroid.show('You are missing something', ToastAndroid.SHORT);
    // }
    // if (!validateEmail(email)) {
    //   return ToastAndroid.show(
    //     'Please enter a validate email',
    //     ToastAndroid.SHORT,
    //   );
    // }
    // let reqObj = {
    //   email,
    //   password,
    // };
    // dispatch(onLogin(reqObj));
    Actions.newsfeed()
  };

  const onForgotPress = () => {
    Actions.ForgotPassword();
  };

  return (
    <React.Fragment>
      <ImageBackground source={Auth} style={styles.background}>
        <View style={styles.Container}>
          <View style={styles.loginCard}>
            <View>
              <Text style={styles.textColor}>Login</Text>
            </View>

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
                Password
              </Label>
              <Input
                value={password}
                onChangeText={password => setpassword(password)}
                secureTextEntry={true}
              />
            </Item>
            <View style={styles.forgotPasswordConatiner}>
              <TouchableOpacity onPress={onForgotPress}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonConatiner}>
              <RoundedButton title="Login" onPress={onSubmit} />
            </View>
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
