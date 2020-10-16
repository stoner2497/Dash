import React, {useState, useEffect} from 'react';
import {StyleSheet, Image,Dimensions} from 'react-native';
import OverLay from '../../resuseable/OverLayCard';
import TextInput from '../../resuseable/InputField';
import Container from '../../resuseable/Container';
import {useSelector} from 'react-redux';
import {onGettingUserData} from '../../Redux/rootReducers';
import RoundedButtom from '../../resuseable/RoundedButton'
import Header from '../../resuseable/Header'
import avatar from '../../Images/avatar.png'
const screenWidth = Math.round(Dimensions.get('window').width);

export default function createNewProfile() {
  const userData = useSelector(state => onGettingUserData(state));
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pincode, setPincode] = useState('');
  const [bio, setBio] = useState('');
  const [instagramHandle, setInstagram] = useState('');
  const [youtubeHandle, setYoutubeHandle] = useState('');


  const onUserChange = text => {
    setUsername(text);
  };
  // let avatar = `http://${userData.avatar.replace('//','')}`
  return (
    <React.Fragment>
      <Header headerTitle="Complete Profile" />
      <Container>
        <OverLay>
          
          <Image source={avatar} style={styles.profileImage}/>
          <TextInput
            label="UserName"
            value={username}
            onChange={onUserChange}
          />
          <TextInput
            label="email"
            value={email}
            onChange={onUserChange}
          />
          <TextInput
            label="pincode"
            value={pincode}
            onChange={onUserChange}
          />
          <TextInput
            label="bio"
            value={bio}
            onChange={onUserChange}
          />
          <TextInput
            label="instagram"
            value={instagramHandle}
            onChange={onUserChange}
          />
          <TextInput
            label="Youtube"
            value={youtubeHandle}
            onChange={onUserChange}
          />
          <RoundedButtom title="Create" />

        </OverLay>
      </Container>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
    profileImage:{
        width:100,
        height:100,
        borderRadius:50,
        marginBottom:20
    }
});
