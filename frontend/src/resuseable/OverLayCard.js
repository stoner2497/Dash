import React from 'react'
import {View,StyleSheet,Dimensions} from 'react-native'
const screenWidth = Math.round(Dimensions.get('window').width);
export default function OverLayCard(props) {
    return (
        <View style={styles.OverlayCard}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    OverlayCard: {
        backgroundColor: 'grey',
        width: screenWidth - 90,
        height: 'auto',
        opacity: 0.8,
        marginBottom: 100,
        alignItems: 'center',
        padding: 15,
      },
})