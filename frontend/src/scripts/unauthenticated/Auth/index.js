import React from 'react';
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	Dimensions,
	Image,
	TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import RoundedButton from '../../../resuseable/RoundedButton';
import Splash from '../../../Images/LandingScreen.png';
import Google from '../../../Images/google.png';
import {Actions} from 'react-native-router-flux';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {onRegister} from '../../../Redux/authentication/action'
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import {connect} from 'react-redux'
 class index extends React.Component {
  

  _onLoginPress = () => {
      this.props.onRegister()
  }

	render() {
		return (
			<React.Fragment>
				<ImageBackground source={Splash} style={styles.background}>
					<View style={styles.conatiner}>
						<View style={styles.loginContainer}>
							<Text style={styles.loginText}>Login/Signup with google</Text>
							<View style={styles.buttonConatiner}>
								<TouchableOpacity onPress={this._onLoginPress}>
									<Image source={Google} style={styles.googleButton} />
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</ImageBackground>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	loginContainer: {
		backgroundColor: 'grey',
		width: wp('90%'),
		height: hp('20%'),
		opacity: 0.8,
		padding: 15,
		marginBottom: 100,
		alignSelf: 'center',
	},
	loginText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 22,
		marginBottom: 10,
		textShadowColor: 'white',
		textShadowOffset: {width: 0, height: 1},
		textShadowRadius: 5,
	},
	background: {
		width: screenWidth,
		height: screenHeight,
	},
	conatiner: {
		flex: 1,
		justifyContent: 'flex-end',
	},
	buttonConatiner: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 100,
	},
	ButtonStyle: {
		width: screenWidth - 280,
		height: 'auto',
		backgroundColor: 'white',
		borderRadius: 50,
	},
	buttonContainer: {
		shadowColor: '#FFFFFF',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.58,
		shadowRadius: 50,

		elevation: 5,
	},
	buttonText: {
		color: 'black',
		fontSize: 14,
	},
	googleButton: {
		width: wp('17%'),
		height: hp('8.5%'),
	},
});


export default connect(null,{onRegister})(index)