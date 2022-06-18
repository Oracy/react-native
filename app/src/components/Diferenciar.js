import React from 'react';
import {Platform, Text} from 'react-native';
import Style from './estilo';

const Diferenciar = props => {
  if (Platform.OS === 'android') {
    return <Text style={Style.fontG}>Android</Text>;
  } else if (Platform.OS === 'ios') {
    return <Text style={Style.fontG}>Ios</Text>;
  }
};
export default Diferenciar;
