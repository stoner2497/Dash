import React from 'react';
import {StyleSheet} from 'react-native'
import {Item, Input, Label} from 'native-base';

export default function InputField(props) {
  return (
    <Item floatingLabel style={{marginBottom: 10}} useNativeDriver={true}>
      <Label style={styles.labelStyle} useNativeDriver={true}>
        {props.label}
      </Label>
      <Input value={props.value} onChangeText={props.onChange} />
    </Item>
  );
}

const styles = StyleSheet.create({
    inputContainerStyle: {
        borderColor: 'black',
      },
      labelStyle: {
        color: 'white',
        fontSize: 14,
      },
})