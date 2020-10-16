import React from 'react'
import {TouchableOpacity} from 'react-native'
export default function button(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            {props.children}
        </TouchableOpacity>
    )
}
