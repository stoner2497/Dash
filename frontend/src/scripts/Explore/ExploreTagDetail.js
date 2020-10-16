import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import Container from '../../resuseable/Container';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import thumb from '../../Images/thumb.png';
import {primaryColor} from '../../resuseable/Colors';
import avatar from '../../Images/avatar.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width, height} = Dimensions;
export default function ExploreTagDetail(props) {
  const {tag} = props;
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
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.containerText}>{tag}</Text>
          <View style={styles.hr} />
        </View>
        <View style={{marginBottom:15}}>
          <Text style={styles.trendingText}>Trending Up</Text>

          <FlatList
            data={thumbArray}
            renderItem={({item}) => (
              <TouchableOpacity>
                <Image
                  source={item.img}
                  resizeMode="contain"
                  style={styles.thumbContainer}
                />
              </TouchableOpacity>
            )}
            horizontal={true}
          />
        </View>
        <View style={[styles.hr, {marginBottom: 15}]} />
        <FlatList
          data={thumbArray}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View>
                <TouchableOpacity>
                  <View style={styles.videoHeader}> 
                    <Image source={avatar} style={styles.profileImage} />
                    <Text style={styles.profileHeaderText}>username</Text>
                  </View>
                </TouchableOpacity>
                <Image
                  source={item.img}
                  resizeMode="contain"
                  style={styles.thumbContainer}
                />
              </View>
            </TouchableOpacity>
          )}
          numColumns={3}
        />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  textContainer: {
    width: width,
    // height: heightPercentageToDP('10%'),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginBottom: 5,
    backgroundColor:'black'
  },
  containerText: {
    fontSize: 18,
    marginBottom: 10,
    color:primaryColor,
    marginBottom:15
  },
  thumbContainer: {
    width: widthPercentageToDP('34%'),
    height: heightPercentageToDP('22%'),
    borderColor: 'yellow',
    borderWidth: 0.5,
    //   marginLeft: 15,
    // marginRight:15
  },
  hr: {
    borderWidth: 1,
    borderColor: primaryColor,
    width: widthPercentageToDP('100%'),
  },
  trendingText: {
    color: primaryColor,
    fontSize: 25,
    marginBottom: 10,
    marginTop:15,
  },
  videoHeader:{
    flexDirection:'row'
  },
  profileHeaderText:{
    alignSelf:'center',
    color:'white',
    fontSize:14
  },
  profileImage: {
    marginBottom:5,
    borderRadius: 50,
    borderColor: '#FFBA0C',
    borderWidth: 1,
    height: heightPercentageToDP('3%'),
    width: widthPercentageToDP('6.8%'),
    padding:15,
    margin:5
  },
});
