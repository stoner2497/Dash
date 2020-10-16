import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get('window');
export default function PlayVideo(props) {
    console.log(props.uri)
  return (
    <View>
      <Video
        useTextureView={true}
        source={{uri: props.uri}}
        style={styles.backgroundVideo}
        playInBackground={false}
        resizeMode="contain"
        repeat
        // onBuffer={onBuffer}
        // onLoad={onLoad}
        // onLoadStart={onLoad}
        // poster={url}
        controls={true}
        muted
        hideShutterView
        // paused={paused}
        resizeMode="contain"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
  },
  swiperContainer: {
    height: height,
  },
  backgroundVideo: {
    height: hp('62%'),
    width: width,
  },
  card: {
    height,
    margin: 0,
  },
  videoHeader: {
    backgroundColor: 'black',
    height: hp('5%'),
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 5,
    paddingLeft: 5,
  },
  videoFooter: {
    backgroundColor: 'black',
    height: hp('12%'),
  },
  profileImage: {
    borderRadius: 50,
    borderColor: '#FFBA0C',
    borderWidth: 1,
    height: hp('3.5%'),
    width: wp('8%'),
  },
  profileHeaderBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileHeaderBoxRight: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatarText: {
    marginLeft: 5,
    marginTop: hp('1%'),
    color: 'white',
  },
  king: {
    marginRight: 20,
    marginTop: 1.5,
  },
  threedots: {
    marginRight: 10,
    marginTop: 5,
  },
  footerIcons: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  hornsCover: {
    flexDirection: 'row',
  },
  count: {
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'center',
    fontSize: 16,
    color: 'white',
  },
  caption: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 5,
    marginBottom: 8,
    color: 'white',
  },
  OverlayCard: {
    backgroundColor: 'grey',
    width: width,
    height: hp('20%'),
    alignItems: 'center',
    padding: 15,
  },
  bottomModal: {
    // alignItems
    justifyContent: 'flex-end',
    margin: 0,
    // backgroundColor:'white',
    height: 20,
  },
});
