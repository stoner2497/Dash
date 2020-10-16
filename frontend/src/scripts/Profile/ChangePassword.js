import React from 'react';
import {View, Text, ImageBackground, StyleSheet,TouchableOpacity} from 'react-native';
import Container from '../../resuseable/Container';
import Input from '../../resuseable/InputField';
import OverLayCard from '../../resuseable/OverLayCard';
import RoundedButton from '../../resuseable/RoundedButton';
import Header from '../../resuseable/Header';
import Auth from '../../Images/authBackground.png';
import Backgroud from '../../resuseable/Backgroudn';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Actions } from 'react-native-router-flux';
export default function ChangePassword() {
    const _onBackPress = () => {
        Actions.pop()
    }
  return (
    <React.Fragment>
      <Backgroud>
        <View style={styles.header}>
          <TouchableOpacity onPress={_onBackPress}>
          <Icon name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.Container}>
          <View>
            <OverLayCard>
              <Text style={styles.cardHeader}>Change Password</Text>
              <Input label="Old Password" />
              <Input label="New Password" />
              <RoundedButton title="Chnage" />
            </OverLayCard>
          </View>
        </View>
      </Backgroud>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardHeader: {
    fontSize: 22,
    color: 'white',
    marginBottom: 20,
  },
  header:{
      padding:20
  }
});
