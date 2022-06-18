import React from 'react';
import {Text} from 'react-native';

import Style from './estilo';

export default () => {
  return <Text style={Style.fontG}>Comp #Oficial</Text>;
};

export const Comp1 = () => {
  return <Text style={Style.fontG}>Comp #01</Text>;
};

export const Comp2 = () => {
  return <Text style={Style.fontG}>Comp #02</Text>;
};
