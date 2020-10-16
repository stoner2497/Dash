import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity
} from 'react-native';
import AddVideos from '../Images/Add.png'
import Create from '../Images/create.png'
import Music from '../Images/music.png'
export default function PopupButton(props) {
    let animation = new Animated.Value(0)
    let open = false
    const toggleMenu = () => {
        const toValue = open ? 0 : 1

        Animated.spring(animation,{
            toValue,
            friction:5
        }).start()
        open = !open
    }
    const addMusic = {
      transform : [
          {scale: animation},
          {
              translateY: animation.interpolate({
                  inputRange:[0,1],
                  outputRange:[0,-200]
              })
          }
      ]
  }
    const createVideo = {
      transform : [
          {scale: animation},
          {
              translateY: animation.interpolate({
                  inputRange:[0,1],
                  outputRange:[0,-140]
              })
          }
      ]
  }
    const AddVideo = {
        transform : [
            {scale: animation},
            {
                translateY: animation.interpolate({
                    inputRange:[0,1],
                    outputRange:[0,-80]
                })
            }
        ]
    }

    const rotation = {
        transform : [
            {
                rotate: animation.interpolate({
                    inputRange:[0,1],
                    outputRange:["0deg","45deg"]
                })
            }
        ]
    }

    const onCreatePress = () => {
      Actions.Camera()
    }
  return (
    <View style={[styles.Add,props.style]}>
      <TouchableOpacity onPress={onCreatePress}>
        <Animated.View style={[styles.button, styles.secondary, styles.menu,addMusic]}>
        <Image source={Create}  style={styles.icons} />
        <Text style={styles.iconText}>Create</Text>
        </Animated.View>
      </TouchableOpacity>
      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.secondary, styles.menu,createVideo]}>
        <Image source={Music}  style={styles.icons} />
        <Text style={styles.iconTextMusic}>Add Music</Text>
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <Animated.View style={[styles.button, styles.secondary, styles.menu ,AddVideo]}>
          <Image source={AddVideos}  style={styles.icons} />
          <Text style={styles.iconText}>Add</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={toggleMenu}>
        <Animated.View style={[styles.button, styles.menu,rotation]}>
          <Text style={{fontSize:15}}>+</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  Add: {
    alignItems: 'center',
    position: 'absolute',
  },
  button: {
    borderRadius: 52,
    width: 55,
    height: 55,
    borderColor: '#FFBA0C',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    // left:0.1
  },
  secondary: {
    
    borderRadius: 52,
    width: 50,
    height: 50,
    borderColor: '#FFBA0C',
    paddingBottom:5,
    paddingTop:5
  },
  menu: {
    backgroundColor: 'white',
  },
  icons:{
    width:20,
    height:20
  },
  iconText:{
    fontSize:10
  },
  iconTextMusic:{
    fontSize:8
  }
});
