//todo list
//1.audio playlist
//2.add audio functionaliity
//3.sound player
//4. if want change it to class

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Container from '../../resuseable/Container';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { Actions } from 'react-native-router-flux';

export default function AudioList() {
  const [search, onSearch] = useState('');
  const onHandleChange = text => {
    onSearch(text);
  };
  const onBackPress = () => {
      Actions.pop()
  }
  return (
    <React.Fragment>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBackPress}>
          <Icon
            name="chevron-left"
            style={styles.icon}
            size={25}
            color="white"
          />
        </TouchableOpacity>
        {/* <View style={styles.searchBar}> */}
        <TextInput
          placeholder="Discover Music"
          value={search}
          onChangeText={onHandleChange}
          style={styles.searchBar}
        />
        {/* </View> */}
      </View>
      <Container />
      <View style={styles.addBtnContainer}>
        <TouchableOpacity>
          <View style={styles.addBtn}>
            <Icon name="plus" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'black',
    padding: 15,
  },
  searchBar: {
    // height: heightPercentageToDP('3%'),
    backgroundColor: 'white',
    // alignItems: 'center',
    width: widthPercentageToDP('85%'),
    marginLeft: 10,
  },
  icon: {
    marginTop: 10,
  },
  addBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    backgroundColor: 'black',
  },
  addBtn: {
    marginRight: 23,
    marginBottom: 18,
    borderWidth: 1,
    borderRadius: 50,
    width: widthPercentageToDP('13%'),
    height: heightPercentageToDP('6%'),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
