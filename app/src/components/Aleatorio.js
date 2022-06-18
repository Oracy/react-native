import React from 'react';
import Text from 'react-native';
import Style from './estilo';

const RandomNumber = () => {
  Math.floor(Math.random() * 1000) + 1;
  return <Text style={Style.fountG}>O valor aleatório é</Text>;
};

export default RandomNumber;
