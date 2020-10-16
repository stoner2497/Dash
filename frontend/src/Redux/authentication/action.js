import {ToastAndroid} from 'react-native';
import Axios from 'axios';
import {Actions} from 'react-native-router-flux';
import {Routes} from '../../Config/RequestRoutes';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';
import setAuthToken from '../utils/setAuthToken';
import axios from '../utils/axios';
import {getAccount} from '../Account/actions';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
  } from 'react-native-google-signin';
export const AUTH_ACTION_TYPES = {
	AUTH_FETCHING: 'AUTH/AUTH_FETCHING',
	AUTH_REGISTER_SUCCESS: 'AUTH/AUTH_REGISTER_SUCCESS',
	AUTH_REGISTER_FAILURE: 'AUTH/AUTH_REGISTER_FAILURE',
	AUTH_LOGIN_SUCCESS: 'AUTH/AUTH_LOGIN_SUCCESS',
	AUTH_FAILURE: 'AUTH/AUTH_FAILURE',
};

export const onFetching = () => {
	return {
		type: AUTH_ACTION_TYPES.AUTH_FETCHING,
	};
};

export const onError = () => {
	return {
		type: AUTH_ACTION_TYPES.AUTH_FAILURE,
	};
};

export const onRegisterSuccess = () => {
	return {
		type: AUTH_ACTION_TYPES.AUTH_REGISTER_SUCCESS,
	};
};

export const onRegisterFailure = () => {
	return {
		type: AUTH_ACTION_TYPES.AUTH_REGISTER_FAILURE,
	};
};

export const onLoginSuccess = data => {
	return {
		type: AUTH_ACTION_TYPES.AUTH_LOGIN_SUCCESS,
		payload: data,
	};
};

export const onRegister = reqObj => {
	console.log('im running');
	return async dispatch => {
		dispatch(onFetching());
		let url = `${Routes.register}`;
		try {
			await GoogleSignin.hasPlayServices();
			GoogleSignin.signIn().then(response => {
        console.log(response)
        // axioss
				// 	.post(url, reqObj)
				// 	.then(res => {
				// 		if (res.status === 400) {
				// 			dispatch(onError());
				// 			ToastAndroid.show(res.data.msg, ToastAndroid.SHORT);
				// 		} else {
				// 			dispatch(onRegisterSuccess());
				// 			Actions.login();
				// 		}
				// 	})
				// 	.then(() => {
				// 		ToastAndroid.show('Registered Successfully', ToastAndroid.SHORT);
				// 	})
				// 	.catch(err => {
				// 		dispatch(onError());
				// 		ToastAndroid.show('something went wrong', ToastAndroid.SHORT);
				// 	});
			});
			setloggedIn(true);
		} catch (error) {
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				// user cancelled the login flow
				alert('Cancel');
			} else if (error.code === statusCodes.IN_PROGRESS) {
				alert('Signin in progress');
				// operation (f.e. sign in) is in progress already
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				alert('PLAY_SERVICES_NOT_AVAILABLE');
				// play services not available or outdated
			} else {
				// some other error happened
			}
		}
	};
};

