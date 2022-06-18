import React, {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import Quadrado from './Quadrado';

const FlexBoxV1 = props => {
  return (
    <View style={style.FlexV1}>
      <Quadrado color="#FF801a" />
      <Quadrado color="#50D1F6" />
      <Quadrado color="#DD22C1" />
      <Quadrado color="#8312ED" />
      <Quadrado color="#36C9A7" />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV1: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#000',
  },
});

export default FlexBoxV1;
