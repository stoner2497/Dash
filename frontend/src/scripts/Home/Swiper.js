import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import {Card} from 'react-native-elements';
import Video from 'react-native-video';
// import VideoPlayer from 'react-native-video-controls'
import InView from './InView';
import avatar from '../../Images/avatar.png';
import King from '../../resuseable/King';
import ThreeDost from '../../resuseable/ThreeDots';
import ViewOverflow from 'react-native-view-overflow';
import ThreeDots from '../../resuseable/ThreeDots';
import Horns from '../../resuseable/Horns';
import Joker from '../../resuseable/Joker';
import Comments from '../../resuseable/Comments';
import Views from '../../resuseable/Views';
import Modal from 'react-native-modal';
import Thumbnail from '../../Images/loader.gif';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Actions} from 'react-native-router-flux';

const {height, width} = Dimensions.get('window');
const DeckSwiper = props => {
  const useSwiper = useRef(null).current;
  const [isVisible, handleModal] = useState(false);
  const [paused, setPause] = useState(true);
  const [hornsCount, setHorns] = useState(0);
  const [JokerCount, setJoker] = useState(0);
  const [opacity, setopacity] = useState(0);
  const [showVideo, setVideo] = useState(false);
  const [control, setControls] = useState(false);


  const handleOnSwipedLeft = () => useSwiper.swipeLeft();
  const handleOnSwipedTop = () => useSwiper.swipeTop();
  const handleOnSwipedRight = () => useSwiper.swipeRight();
  // const onBuffer = () => {
  //   return (
  //     <Image source={Thumbnail} />
  //   );
  // };
  // const onLoad = data => {
  //   console.log(data);
  //   return <ActivityIndicator size="large" color="white" />;
  // };
  useEffect(() => {
    console.log('im running')
    console.log(Actions.currentScene)
    if (Actions.currentScene === '_newsfeed') {
      setPause(false);
      setControls(true)
    } 
    return () => {
        setPause(true)
    }
  });
  
  const onVideoPress = () => {
    setPause(true);
  };
  const onModalShow = () => {
    handleModal(!isVisible);
  };

  const onLoadStart = () => {
    console.log('load start');
    setopacity(1);
  };

  const onLoad = () => {
    console.log('load ');
    setopacity(0);
  };

  const onBuffer = ({isBuffering}) => {
    console.log('buffer', isBuffering);
    let value = isBuffering ? 1 : 0;
    setopacity(value);
  };

  let url = `https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F839288080535653892%2F&psig=AOvVaw28olfubLi3yYz7EGEGvs55&ust=1590865784250000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPC4pIPj2ekCFQAAAAAdAAAAABAD`;
  console.log('opacity', paused);
  return (
    <View style={styles.container}>
      <View style={styles.swiperContainer}>
        <Swiper
          ref={useSwiper}
          animateCardOpacity
          cards={props.video}
          renderCard={(card, index) => (
            <View>
              <View style={styles.videoHeader}>
                <View style={styles.profileHeaderBox}>
                  <Image source={avatar} style={styles.profileImage} />
                  <Text style={styles.avatarText}>Username</Text>
                </View>
                <View style={styles.profileHeaderBoxRight}>
                  {/* <Image source={King} resizeMode="contain" style={styles.king} /> */}
                  <King style={styles.king} />
                  <TouchableOpacity onPress={onModalShow}>
                    <ThreeDots style={styles.threedots} />
                  </TouchableOpacity>
                </View>
              </View>
              {opacity === 1 ? (
                <ActivityIndicator
                  animating
                  size="large"
                  color="white"
                  style={[styles.activityIndicator]}
                />
              ) : null}
              <ViewOverflow>
                <Video
                  useTextureView={true}
                  source={{uri: card.uri}}
                  style={styles.backgroundVideo}
                  resizeMode="cover"
                  repeat
                  onBuffer={onBuffer}
                  onLoad={onLoad}
                  onLoadStart={onLoadStart}
                  poster={url}
                  playInBackground={false}
                  // muted
                  controls={control}
                  playWhenInactive={false}
                  hideShutterView
                  paused={paused}
                  resizeMode="contain"
                />
              </ViewOverflow>
              <View style={styles.videoFooter}>
                <Text style={styles.caption}>Caption......</Text>
                <View style={styles.footerIcons}>
                  <View style={styles.hornsCover}>
                    <TouchableOpacity>
                      <Horns />
                    </TouchableOpacity>
                    <Text style={styles.count}>{hornsCount}</Text>
                  </View>
                  <View style={styles.hornsCover}>
                    <TouchableOpacity>
                      <Joker />
                    </TouchableOpacity>
                    <Text style={styles.count}>{JokerCount}</Text>
                  </View>
                  <View style={styles.hornsCover}>
                    <TouchableOpacity>
                      <Comments />
                    </TouchableOpacity>
                    <Text style={styles.count}>{JokerCount}</Text>
                  </View>
                  <View style={styles.hornsCover}>
                    <Views />
                    <Text style={styles.count}>{JokerCount}</Text>
                  </View>
                </View>
              </View>
            </View>
          )}
          cardIndex={0}
          backgroundColor="black"
          stackSize={1}
          horizontalSwipe={false}
          cardVerticalMargin={0}
          cardHorizontalMargin={0}
          infinite
          showSecondCard
          animateOverlayLabelsOpacity
          goBackToPreviousCardOnSwipeBottom={true}
        />
        <Modal
          // height={160}
          backdropColor="rgba(0,0,0,0.5)"
          backdropOpacity={1}
          isVisible={isVisible}
          style={styles.bottomModal}
          onBackdropPress={onModalShow}>
          <View style={styles.OverlayCard}>
            <Text style={{color: 'white'}}>Report</Text>
          </View>
        </Modal>
      </View>
    </View>
  );
};

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
  activityIndicator: {
    //
    justifyContent: 'center',
    alignSelf: 'center',
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

export default DeckSwiper;
