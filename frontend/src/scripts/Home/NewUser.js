import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {onGettingUserData} from '../../Redux/rootReducers';
import OverLayCard from '../../resuseable/OverLayCard';
import RoundedButton from '../../resuseable/RoundedButton';
import {Actions} from 'react-native-router-flux';
import TabView from '../../resuseable/TabView';
import Header from '../../resuseable/Header';
export default function NewUser() {
  const userData = useSelector(state => onGettingUserData(state));
  const onCompleteProfile = () => {
    Actions.newProfile();
  };
  return (
    <React.Fragment>
      <View style={styles.conatiner}>
        <View style={styles.subContainer}>
          <OverLayCard>
            <Text style={styles.welcomeText}>Welcome To DubWorld</Text>
            <Text style={styles.goldenText}>
              Where Best Content creator get popular{' '}
            </Text>

            <Text style={styles.completeProfileText}>
              Complete your profile to get started with DashDub
            </Text>
            <View style={styles.ButtonContainer}>
              <RoundedButton
                title="complete profile"
                onPress={onCompleteProfile}
              />
            </View>
          </OverLayCard>
        </View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  headerText: {
    marginTop: 5,
    fontSize: 26,
    color: 'white',
    textShadowColor: 'white',
    textShadowOffset: {width: -2, height: -1},
    textShadowRadius: 5,
  },
  subContainer: {
    marginTop: 15,
  },
  welcomeText: {
    fontSize: 23,
    textShadowColor: '#EDA600',
    textShadowOffset: {width: -2, height: -1},
    textShadowRadius: 25,
    color: 'white',
  },
  ButtonContainer: {
    marginTop: 10,
  },
  completeProfileText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
  },
  goldenText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFBA0C',
    marginTop: 20,
    marginBottom: 10,
  },
});
