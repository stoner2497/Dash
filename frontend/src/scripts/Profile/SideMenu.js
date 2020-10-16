import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Container from '../../resuseable/Container';
import {Actions} from 'react-native-router-flux';
export default function SideMenu() {
  const pages = [
    {
      page: 1,
      name: 'Change password',
    },
    {
      page: 2,
      name: 'notification',
    },
    {
      page: 3,
      name: 'Feedback',
    },
    {
      page: 4,
      name: 'Report a Bug',
    },
    {
      page: 5,
      name: 'About Us',
    },
    {
      page: 6,
      name: 'Signed To',
    },
    {
      page: 7,
      name: 'Terms of Service ',
    },
    {
      page: 8,
      name: 'Sign out',
    },
  ];
  const signOut = () => {
    console.log('signout');
  };
  const onPagePress = page => {
    switch (page) {
      case 'Change password':
        return Actions.changePassword();

      case 'notification':
        return Actions.notification();
      case 'Feedback':
        return Actions.Feedback();
      case 'Report a Bug':
        return Actions.reportaBug();
      case 'About Us':
        return Actions.aboutUs();
      case 'Signed To':
        return Actions.signedTo();
      case 'Terms of Service ':
        return Actions.TOS();
      case 'Sign out':
        return signOut();
      default:
        return;
    }
  };
  return (
    <Container>
      <View style={styles.header}>
        <Text style={{color: 'white'}}>Settings</Text>
      </View>
      <View style={StyleSheet.innerConatiner}>
        <FlatList
          data={pages}
          renderItem={({item}) => (
            <React.Fragment>
              <View style={styles.listConatiner}>
                <TouchableOpacity onPress={() => onPagePress(item.name)}>
                  <Text style={styles.innerConatinerText}>{item.name}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.hr} />
            </React.Fragment>
          )}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    padding: 15,
    justifyContent: 'space-between',
  },
  innerConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerConatinerText: {
    color: 'white',
    fontSize: 18,
  },
  listConatiner: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hr: {
    borderWidth: 0.2,
    borderColor: '#ffba0c',
    width: 250,
    marginBottom: 5,
  },
});
