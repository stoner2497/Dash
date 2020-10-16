import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import Container from '../../resuseable/Container';
import TabView from '../../resuseable/TabView';
import Header from '../../resuseable/Header';
import SearchBig from '../../resuseable/SearchBig';
import ExploreWithData from './ExploreWithData';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
export default function Explore() {
  const [search, onSearch] = useState('');
  const onHandleChange = text => {
    onSearch(text);
    //todo
    //after attaching with redux directly fire the api and update the result of redux in state result should contain only 10 result for the first search
    //it should include music + user
  };
  return (
    <React.Fragment>
      <SafeAreaView style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <TextInput
            placeholder="Discover"
            value={search}
            onChangeText={text => onHandleChange(text)}
          />
        </View>
      </SafeAreaView>
      <Container>
        {/* <SearchBig /> */}
        {/* <Text style={styles.headerText}>Explore DashDub Community</Text> */}
        <ExploreWithData />
      </Container>
      {/* <TabView
        explore={true}
        home={false}
        notification={false}
        profile={false}
      /> */}
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  headerText: {
    marginTop: 15,
    color: 'white',
    fontSize: 24,
  },
  searchBarContainer: {
    height: heightPercentageToDP('10%'),
    backgroundColor: 'grey',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  searchBar: {
    height: heightPercentageToDP('7%'),
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
});
