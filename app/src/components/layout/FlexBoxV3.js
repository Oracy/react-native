import React, {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';
import Quadrado from './Quadrado';

const FlexBoxV3 = props => {
  return (
    <View style={style.FlexV3}>
      <Quadrado color="#FF801a" lado={30} />
      <Quadrado color="#50D1F6" lado={40} />
      <Quadrado color="#DD22C1" lado={50} />
      <Quadrado color="#8312ED" lado={60} />
      <Quadrado color="#36C9A7" lado={70} />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 350,
    width: '100%',
    backgroundColor: '#000',
  },
});

export default FlexBoxV3;
