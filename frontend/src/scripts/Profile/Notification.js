import React from 'react';
import {View, Text, Switch, StyleSheet, TouchableOpacity} from 'react-native';
import Container from '../../resuseable/Container';
import OverLayCard from '../../resuseable/OverLayCard';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Backgroud from '../../resuseable/Backgroudn';
import {Actions} from 'react-native-router-flux'
export default function ChangePassword() {
  const _onBackPress = () => {
    Actions.pop();
  };
  return (
    <React.Fragment>
      <Backgroud>
        <View style={styles.header}>
          <TouchableOpacity onPress={_onBackPress}>
            <Icon name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.Container}>
          <OverLayCard>
            <View style={styles.switchRow}>
              <View style={{width: '90%'}}>
                <Text style={styles.txt}>Notification</Text>
              </View>

              <View style={{width: '10%'}}>
                <Switch style={styles.switch} />
              </View>
            </View>

            <Text style={styles.Note}>
              By turning off you will be no longer getting notification on your
              device.
            </Text>
          </OverLayCard>
        </View>
      </Backgroud>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  switchRow: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  txt: {
    paddingTop: 24,
    paddingBottom: 8,
    fontSize: 16,
    color: '#4a4a4a',
    paddingLeft: 8,
    paddingRight: 8,
    color: 'white',
  },
  switch: {
    paddingTop: 45,
  },
  header: {
    padding: 20,
  },
  Note:{
      fontSize:18,
      color:'white',
      textAlign:'center'
  }
});
