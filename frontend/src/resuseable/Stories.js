import React , {useState} from 'react';
import {View, Text, TouchableOpacity,StyleSheet,Dimensions} from 'react-native';
const {height} = Dimensions.get('window');
export default function Stories() {
    const [show,setShow] = useState(false)
    const [array] = useState([{
        id:1,
        text:'1'
    },{
        id:1,
        text:'1'
    },{
        id:1,
        text:'1'
    },{
        id:1,
        text:'1'
    },{
        id:1,
        text:'1'
    }])
   const onPressOf = () => {
       setShow(!show)
   }
  return (
    <View>
      <TouchableOpacity onPress={onPressOf}>
        <Text style={{color: 'white'}}>Left</Text>
      </TouchableOpacity>
      {show ? (
          <View style={styles.StorieBoard}>
              <View style={styles.story}></View>
              <View style={styles.hr} />
              {array.map(value => (
              <View style={styles.story}>
                  <Text>{value.text}</Text>
              </View>
              ))}
          </View>
      ): null}
    </View>
  );
}

const styles = StyleSheet.create({
    StorieBoard:{
        height,
        // backgroundColor:'black',
        borderLeftColor:'yellow',
        borderLeftWidth:1,
        width:80,
        alignItems:'center',
        borderTopWidth:1,
        borderTopColor:'yellow',
        padding:20
    },
    story:{
        borderRadius:50,
        borderColor:'#FFBA0C',
        borderWidth:1,
        height:50,
        width:50,
        marginBottom:15
    },
    hr:{
        width:80,
        borderWidth:1,
        borderColor:'yellow',
        marginBottom:15
    }
})