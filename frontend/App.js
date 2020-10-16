import React, {useEffect} from 'react';
import {YellowBox} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import Router from './Router';
import {PersistGate} from 'redux-persist/integration/react';
import {GoogleSignin} from 'react-native-google-signin';
import {WEBID} from './src/Config/Keys';

export default function App() {
	YellowBox.ignoreWarnings([
		"Animated:'useNativeDriver' was not specified.This is required option and must be explicitly set to 'true' or 'false' ",
	]);
	useEffect(() => {
		GoogleSignin.configure({
			webClientId: WEBID, // client ID of type WEB for your server (needed to verify user ID and offline access)
			offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
		});
	}, []);
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Router />
			</PersistGate>
		</Provider>
	);
}
