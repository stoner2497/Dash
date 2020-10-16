import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import thumb from '../../Images/thumb.png';
import SmallButton from '../../resuseable/smallCurvedButton';
import { Actions } from 'react-native-router-flux';

export default function ExploreWithData() {
const onViewMorePress = (tag) => {
    console.log(tag)
    Actions.ExploreDetail({tag})
}   
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
  const VideosArray = [
    {
      tag: 'Entertainment',
    },
    {
      tag: 'SciFiction',
    },
    {
      tag: 'Roast',
    },
    {
      tag: 'Spoof',
    },
    {
      tag: 'StandupComedy',
    },
    {
      tag: 'Funny',
    },
    {
      tag: 'Action',
    },
    {
      tag: 'Prank',
    },
    {
      tag: 'Dubbing',
    },
    {
      tag: 'Music',
    },
    {
      tag: 'HipHop',
    },
    {
      tag: 'Dance',
    },
    {
      tag: 'Educational',
    },
    {
      tag: 'news',
    },
    {
      tag: 'KnowledgeSharing',
    },
    {
      tag: 'Motivational',
    },
    {
      tag: 'Influencer',
    },
    {
      tag: 'Sports',
    },
    {
      tag: 'Adventure',
    },
    {
      tag: 'Vlog',
    },
  ];
  return (
    <React.Fragment>
      <View style={{flex:1}}>
        <View style={styles.runnerUpContainer}>
          <Text style={styles.runnerup}>Runner Up King/Queen</Text>
          <SmallButton title="View All" style={styles.smallButton} />
        </View>
        {/* <ScrollView horizontal>
          {thumbArray.map(img => (
            <Image
              source={img.img}
              resizeMode="contain"
              style={styles.thumbContainer}
            />
          ))}
        </ScrollView> */}
        <FlatList
          horizontal={true}
          data={thumbArray}
          renderItem={({item}) => (
            <Image
              source={item.img}
              resizeMode="contain"
              style={styles.thumbContainer}
            />
          )}
        />
      </View>
      <View style={{flex:1}}> 
        <FlatList
          data={VideosArray}
          renderItem={({item}) => (
            <React.Fragment>
              <View style={styles.runnerUpContainer}>
                <Text style={styles.runnerup}>{item.tag}</Text>
                <SmallButton style={styles.smallButton} title="View More" onPress={() => onViewMorePress(item.tag)} />
              </View>
              <FlatList
                horizontal={true}
                data={thumbArray}
                renderItem={({item}) => (
                  <Image
                    source={item.img}
                    resizeMode="contain"
                    style={styles.thumbContainer}
                  />
                )}
              />
            </React.Fragment>
          )}
        />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  thumbContainer: {
    width: widthPercentageToDP('30%'),
    height: heightPercentageToDP('22%'),
    borderColor: 'yellow',
    borderWidth: 0.5,
    marginLeft: 15,
  },
  runnerUpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  runnerup: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 15,
    marginTop: 15,
  },
  smallButton: {
    marginTop: 15,
    marginRight: 5,
    marginBottom:10
  },
});
