import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import Container from '../../resuseable/Container';
import PopularityMeter from '../../resuseable/PopularityMeter';
import Stalker from '../../resuseable/Stalker';
import Icon from 'react-native-vector-icons/FontAwesome5';
import thumb from '../../Images/thumb.png';
import Video from 'react-native-video';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import avatar from '../../Images/avatar.png';
import SmallCurvedButton from '../../resuseable/smallCurvedButton';
import SmallHorn from '../../resuseable/smallHorns';
import SmallViews from '../../resuseable/SmallViews';
import KingSmall from '../../resuseable/KingSmall';
import {Actions} from 'react-native-router-flux';
import {primaryColor} from '../../resuseable/Colors';
import Modal from 'react-native-modal';
import Input from '../../resuseable/InputField'
import RoundedButton from '../../resuseable/RoundedButton';
const screenWidth = Math.round(Dimensions.get('window').width);

const {width, height} = Dimensions;
export default function InitialProfile() {
  const [stalkerCount, onHandleStockerCount] = useState(0);
  const [isVisible, handleModal] = useState(false);
  const onModalShow = () => {
    handleModal(!isVisible);
  };
  const thumbArray = [
    {
      id: 1,
      img: thumb,
    },
    {
      id: 2,
      img: thumb,
    },
    {
      id: 3,
      img: thumb,
    },
    {
      id: 4,
      img: thumb,
    },
    {
      id: 4,
      img: thumb,
    },
  ];
  const hamburger = (
    <Icon name="ellipsis-v" size={25} style={{marginTop: 5}} color="white" />
  );

  return (
    <React.Fragment>
      <View style={styles.header}>
        <View style={styles.leftZone}>
          <TouchableOpacity>
            <PopularityMeter />
          </TouchableOpacity>
        </View>
        <View>
          <View>
            <Text style={styles.usernameHeader}>Sahil Shah</Text>
            <View style={styles.hr} />
            <View style={styles.centerZone}>
              <Stalker />
              <Text style={styles.stalkedText}>Stalked By {stalkerCount}</Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => Actions.drawerOpen()}>
            {hamburger}
          </TouchableOpacity>
        </View>
      </View>
      {/* <ScrollView> */}
        <View style={styles.profileConatiner}>
          <View>
            <Video
              useTextureView={true}
              source={{
                uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
              }}
              style={styles.backgroundVideo}
              resizeMode="cover"
              repeat
              // onBuffer={onBuffer}
              // onLoad={onLoad}
              // onLoadStart={onLoadStart}
              playInBackground={false}
              muted
              // controls={control}
              playWhenInactive={false}
              hideShutterView
              // paused={paused}
            />
          </View>
          <View style={styles.profileHeader}>
            <Image style={styles.profileImage} source={avatar} />
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                }}>
                <Text style={{color: 'white'}}>UserName</Text>
                <TouchableOpacity onPress={onModalShow}>
                  <Icon
                    name="pen"
                    size={18}
                    color="#ffba0c"
                    style={styles.editIcon}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    color: 'white',
                    marginLeft: 10,
                    alignItems: 'center',
                    padding: 5,
                  }}>
                  <Text style={{fontSize: 18, color: primaryColor}}>
                    Videos
                  </Text>
                  <Text style={{fontSize: 20, color: primaryColor}}>0</Text>
                </View>
                <View
                  style={{
                    color: 'white',
                    marginLeft: 10,
                    alignItems: 'center',
                    padding: 5,
                  }}>
                  <Text style={{fontSize: 18, color: primaryColor}}>
                    Signed by
                  </Text>
                  <Text style={{fontSize: 20, color: primaryColor}}>0</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <Text style={{color: 'white'}}>LoremIpsum {'/n'} LoremIpsum</Text>
              <SmallCurvedButton title="Sign" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', marginLeft: 10}}>
                  <Text style={{color: 'white'}}>King</Text>
                  <KingSmall />
                </View>
                <Text style={{color: 'white'}}>Locked</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'white'}}>Swags</Text>
                  <SmallHorn />
                </View>
                <Text style={{color: 'white'}}>0</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View>
                  <Text style={{color: 'white'}}>Cringes</Text>
                </View>
                <Text style={{color: 'white'}}>0</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={{flexDirection: 'row', marginRight: 10}}>
                  <Text style={{color: 'white'}}>Views</Text>
                  <SmallViews />
                </View>
                <Text style={{color: 'white'}}>0</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.hr} />
        <View style={styles.videoContainer}>
         {/* <Text style={{fontSize:20,color:primaryColor,textAlign:'center',}}>No Frames Start Creating One</Text> */}
         
          <FlatList
            data={thumbArray}
            renderItem={({item}) => (
              <Image
                source={item.img}
                resizeMode="contain"
                style={styles.thumbContainer}
              />
            )}
            numColumns={3}
          />
        </View>
      {/* </ScrollView> */}
      <Modal
        // height={160}
        backdropColor="rgba(0,0,0,0.5)"
        backdropOpacity={1}
        isVisible={isVisible}
        style={styles.bottomModal}
        onBackdropPress={onModalShow}>
        <View style={styles.OverlayCard}>
          <View style={styles.modalHeader}>
            <Text style={styles.headerText}>Edit Profile</Text>
          </View>
          {/* <Text style={styles.modalText}>
          </Text> */}
          <Image source={avatar} style={styles.editProfileImage} />
          <Input label="username" />
          <Input label="email" />
          <Input label="Bio" />
          <Input label="instagram" />
          <Input label="youtube" />
          <RoundedButton title="Edit" />
        </View>
      </Modal>
      <Container />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'black',
  },
  leftZone: {
    marginTop: 15,
  },
  centerZone: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  stalkedText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 5,
  },
  usernameHeader: {
    color: '#ffba0c',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  hr: {
    borderWidth: 0.2,
    borderColor: '#ffba0c',
    width: 250,
    marginBottom: 5,
  },
  profileConatiner: {
    backgroundColor: 'black',

    height:'auto',
  },
  backgroundVideo: {
    zIndex: 0,
    flex: 1,
    height: heightPercentageToDP('15%'),
    width: width,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  profileImage: {
    marginTop: 50,
    borderRadius: 50,
    borderColor: '#FFBA0C',
    borderWidth: 1,
    height: heightPercentageToDP('8%'),
    width: widthPercentageToDP('15%'),
    marginBottom: 0,
    marginLeft: 15,
    marginTop: 85,
  },
  editIcon: {
    marginLeft: 5,
    marginBottom: 5,
    // bottom:18,
    // left:15
  },
  profileHeader: {
    // width: widthPercentageToDP('20%'),
    zIndex: 1,
  },
  videoContainer: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'black',
  },
  thumbContainer: {
    width: widthPercentageToDP('33%'),
    height: heightPercentageToDP('22%'),
    borderColor: 'yellow',
    borderWidth: 0.5,
  },
  bottomModal: {
    // alignItems
    justifyContent: 'flex-end',
    margin: 0,
    // backgroundColor:'white',
    height: 20,
  },
  modalText:{
    fontSize:heightPercentageToDP("2.5%"),
    color: 'white',
    textAlign:'center'
  },
  modalHeader:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  OverlayCard: {
    backgroundColor: 'grey',
    width: screenWidth,
    height:'auto',
    alignItems: 'center',
    padding: 10,
  },
  headerText:{
    fontSize:heightPercentageToDP("3%"),
    color:'#FFBA0C',
    textShadowColor: 'white',
    textShadowOffset: {width: 0, height: -1},
    textShadowRadius: 5,
  },
  editProfileImage: {
    marginTop:10,
    borderRadius: 50,
    borderColor: '#FFBA0C',
    borderWidth: 1,
    height: heightPercentageToDP('8%'),
    width: widthPercentageToDP('15%'),
    marginBottom: 0,
    marginLeft: 15,
  }
});
