import React from 'react';
import {Text, View} from 'react-native';
import Style from './estilo';

const ParImpar = ({num = 0}) => {
  return (
    <View>
      <Text style={Style.fontG}>O resultado é:</Text>
      {num % 2 === 0 ? <Text style={Style.fontG}>Par</Text> : false}
    </View>
  );
};
export default ParImpar;
