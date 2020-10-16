import React from 'react'
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

export default function smallCurvedButton(props) {
    const {onPress,style,title} = props
    return (
       <TouchableOpacity onPress={onPress} style={[styles.smallBtn,style]}>
           <Text > {title}</Text>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    smallBtn:{
        width:widthPercentageToDP('22%'),
        borderWidth:0.5,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f8f4f4',
        height:heightPercentageToDP('3.5%')
        }
})