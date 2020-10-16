//todo list
//on merging video spinner 
//audio player
//audio and video record at same time


import React, {Component} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityComponent,
  BackHandler,
  ToastAndroid,
  Dimensions,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Actions} from 'react-native-router-flux';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons2 from 'react-native-vector-icons/Ionicons';
import * as Progress from 'react-native-progress';
import {RNFFmpeg} from 'react-native-ffmpeg';
import RNFetchBlob from 'react-native-fetch-blob';
import Modal from 'react-native-modal';
import RoundedButton from '../../resuseable/RoundedButton';
const {height, width} = Dimensions.get('window');

import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {Toast} from 'native-base';
let result;
export default class RecordsVideo extends Component {
  constructor(props) {
    super(props);
     this.merge_url = '';
    this.videoArray = [];
    this.camera = null;
    this.result = null;
    this.state = {
      recording: false,
      processing: false,
      video_uri: '',
      new_Uri: '',
      merge_url: '',
      recordingSucess: false,
      maxDuration: 300,
      duration: 0,
      type: RNCamera.Constants.Type.front,
      isVisible: false,
    };
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
    
    if (this.state.duration === 300) {
      clearInterval(this.interval);
    }

    console.log('inside mount');
  }
  onSelectAudio = () => {
    Actions.AudioList();
  };
  onModalShow = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  handleBackPress = () => {
    this.setState({
      duration: 0,
      video_uri: '',
      new_Uri: '',
    });
    this.merge_url = '';
    Actions.pop();
    return true;
  };

  timer = () => {
    console.log('im running');
    this.setState({duration: this.state.duration + 1});
  };
  startRecording = async () => {
    console.log('record');
    // default to mp4 for android as codec is not set
    try {
      this.interval = setInterval(this.timer, 1000);
      if (this.merge_url) {
        this.setState({
          video_uri: '',
          new_Uri: '',
          recording: true,
        });
      } else {
        if (this.state.video_uri && this.state.new_Uri) {
          this.setState({
            recording: true,
            video_uri: '',
          });
        } else {
          this.setState({
            recording: true,
          });
        }
      }
      const options = {
        quality: '1080p',
        maxDuration: 300,
        maxFileSize: 100 * 1024 * 1024,
        fps: 960,
      };
      const {uri, codec = 'mp4'} = await this.camera.recordAsync(options);
      if (this.state.video_uri) {
        this.setState({
          new_Uri: uri,
          recordingSucess: true,
        });
      } else {
        this.setState({
          video_uri: uri,
          recordingSucess: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  stopRecording = () => {
    clearInterval(this.interval);
    this.setState({
      recording: false,
    });
    this.camera.stopRecording();
  };
  onProceesing = () => {
    this.setState({
      processing: !this.state.processing,
    });
  };
  onMergeVideo = async () => {
    console.log(RNFetchBlob.fs.ExternalStorageDirectoryPath);

    if (this.merge_url) {
      try {
        const Result = await RNFFmpeg.execute(
          `  -i ${this.merge_url} -i ${
            this.state.video_uri
          }  -vsync 2  -filter_complex "[0:v:0][0:a:0][1:v:0][1:a:0] concat=n=2:v=1:a=1[outv][outa]" -map "[outv]" -map "[outa]"  -y ${
            RNFetchBlob.fs.dirs.DocumentDir
          }/video2.mp4`,
        );
        this.merge_url = `${RNFetchBlob.fs.dirs.DocumentDir}/video2.mp4`;
      } catch (err) {
        ToastAndroid.show(
          'something went wrong the video recording can you please try again',
          ToastAndroid.SHORT,
        );
      }
      // this.setState({
      //   processing: false,
      // });
    } else {
      try {
        // this.setState({processing: true});

        RNFFmpeg.execute(
          `  -i ${this.state.video_uri} -i ${
            this.state.new_Uri
          } -vsync 2  -filter_complex "[0:v:0][0:a:0][1:v:0][1:a:0] concat=n=2:v=1:a=1[outv][outa]" -map "[outv]" -map "[outa]"   -y ${
            RNFetchBlob.fs.dirs.DocumentDir
          }/video1.mp4`,
        )
          .then(result => {
            console.log('the end');
            console.log(result.rc);
            this.result = result.rc;
            // this.forceUpdate()
            if(result.rc != 0) {
              ToastAndroid.show(
                'something went wrong the video recording can you please try again',
                ToastAndroid.SHORT,
              );  
            }
             this.merge_url = `${RNFetchBlob.fs.dirs.DocumentDir}/video1.mp4`;
          })
          .catch(err => {
            ToastAndroid.show(
              'something went wrong the video recording can you please try again',
              ToastAndroid.SHORT,
            );
          });
      } catch (err) {
        ToastAndroid.show(
          'something went wrong the video recording can you please try again',
          ToastAndroid.SHORT,
        );
        console.log(err);
      }
    }
  };

  onDone = () => {
    if (this.merge_url) {
      Actions.playVideo({
        uri: this.merge_url,
      });
      this.setState({
        video_uri: '',
        duration: 0,
        new_Uri: '',
      });
      this.merge_url = '';
    } else {
      Actions.playVideo({
        uri: this.state.video_uri,
      });
      this.setState({
        video_uri: '',
        duration: 0,
        new_Uri: '',
      });
    }
  };

  onCameraFlip = () => {
    this.setState({
      type:
        this.state.type === RNCamera.Constants.Type.back
          ? RNCamera.Constants.Type.front
          : RNCamera.Constants.Type.back,
    });
  };
  mergin = () => {};
  componentDidUpdate(prevState) {
    if (prevState.processing && this.merge_url) {
      this.setState({
        processing: false,
      });
    } else if (prevState.processing && prevState.video_uri) {
      this.setState({
        processing: false,
      });
    }
    if (this.state.video_uri && this.state.new_Uri) {
      // this.videoArray.push({uri: this.state.video_uri});
      this.onMergeVideo();
    }
    if (this.merge_url && this.state.video_uri) {
      this.onMergeVideo();
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    this.setState({
      video_uri: '',
      new_Uri: '',
      merge_url: '',
    });
  }
  render() {
    console.log(this.state.video_uri);
    console.log(this.state.duration);
    console.log('mergerddddd..........', this.merge_url);
    const {recording, processing} = this.state;
    if (this.state.duration === this.state.maxDuration) {
      Actions.playVideo({
        uri: this.merge_url ? this.merge_url : this.state.video_uri,
      });
    }
    // if (this.merge_url) {
    //   this.setState({
    //     this.merge_url,
    //     video_uri: '',
    //   });
    // }
    this.mergin();
    let button = (
      <TouchableOpacity onPress={this.startRecording}>
        <Icon name="dot-circle-o" size={80} color="white" />
      </TouchableOpacity>
    );
    let btn;
    if (recording) {
      button = (
        <Icon
          name="stop-circle-o"
          size={80}
          color="white"
          onPress={this.stopRecording}
        />
      );
    }

    if (this.state.video_uri) {
      btn = (
        <TouchableOpacity onPress={this.onDone}>
          <Text>Done</Text>
        </TouchableOpacity>
      );
    }
    if (this.state.video_uri && this.state.new_Uri) {
      btn = <ActivityIndicator size="small" color="white" />;
    }
    if (this.merge_url) {
      btn = (
        <TouchableOpacity onPress={this.onDone}>
          <Text>Done</Text>
        </TouchableOpacity>
      );
    }
    // if (!this.merge_url && this.state.new_Uri) {
    //   btn = <ActivityIndicator size="small" color="white" />;
    // }
    return (
      <View style={{flex: 1}}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          type={this.state.type}
          style={{flex: 1, elevation: 1}}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          <View style={styles.progressContainer}>
            <Progress.Bar
              progress={this.state.duration / 300}
              width={widthPercentageToDP('92%')}
            />
            <View style={styles.audioPlayer}>
              <TouchableOpacity onPress={this.onModalShow}>
                <Icon name="times" size={15} color="white" />
              </TouchableOpacity>
              {this.props.audio ? (
                <Text style={styles.audioText}>Audio is there </Text>
              ) : (
                <TouchableOpacity onPress={this.onSelectAudio}>
                  <View
                    style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Icon name="music" size={15} color="white" />
                    <Text style={styles.audioText}> Select Audio</Text>
                  </View>
                </TouchableOpacity>
              )}
              <View />
            </View>
          </View>
          <View style={styles.cameraHeader}>
            <View style={styles.iconConatiner}>
              <Icons2
                name="ios-reverse-camera"
                onPress={this.onCameraFlip}
                size={40}
                color="white"
              />
              {/* <Icons2 name="ios-timer" size={40} color="white" />
              <Icon name="stopwatch" size={40} color="white" /> */}
            </View>
          </View>
          <View style={styles.buttonFooter}>
            {button}
            {btn}
          </View>
          <Modal
            // height={160}
            backdropColor="rgba(0,0,0,0.5)"
            backdropOpacity={1}
            isVisible={this.state.isVisible}
            style={styles.bottomModal}
            onBackdropPress={this.onModalShow}>
            <View style={styles.OverlayCard}>
              <Text style={styles.ModalText}>Do you want to discard?</Text>
              <View style={styles.modalButtonContainer}>
                <RoundedButton
                  title="Yes"
                  Style={styles.modalBtn}
                  onPress={() => Actions.newsfeed()}
                />
                <RoundedButton title="No" onPress={this.onModalShow} />
              </View>
            </View>
          </Modal>
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonFooter: {
    flex: 1,
    alignItems: 'center',
    height: 50,
    // backgroundColor:'white',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    zIndex: 100,
    marginBottom: 20,
  },
  cameraHeader: {
    marginRight: 20,
    marginTop: 10,
    flex: 1,
    height: 50,
    // backgroundColor:'white',
    justifyContent: 'flex-start',
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
    // zIndex:100,
    // marginBottom:20
  },
  iconConatiner: {
    justifyContent: 'space-between',
  },
  progressContainer: {
    padding: 15,
  },
  audioText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  audioPlayer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
    height: 20,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OverlayCard: {
    backgroundColor: 'grey',
    width: width,
    height: heightPercentageToDP('16%'),
    alignItems: 'center',
    // padding: 15,
  },
  modalBtn: {
    marginRight: 5,
  },
  ModalText: {
    color: 'white',
    marginBottom: 10,
    fontSize: 18,
  },
});
