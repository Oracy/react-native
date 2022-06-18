import React, {Fragment} from 'react';
import {StyleSheet, View} from 'react-native';

const FlexBoxV4 = props => {
  return (
    <View style={style.FlexV4}>
      <View style={style.V0} />
      <View style={style.V1} />
      <View style={style.V2} />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV4: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: '#000',
  },
  V0: {
    backgroundColor: '#36C9A7',
    height: 300,
  },
  V1: {
    backgroundColor: '#FF801A',
    flexGrow: 7,
  },
  V2: {
    backgroundColor: '#DD22C1',
    flexGrow: 3,
  },
});

export default FlexBoxV4;
