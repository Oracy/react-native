import React from 'react';
import {Text} from 'react-native';

import Style from './estilo';

const MinMax = props => {
  let min = props.n1;
  let max = props.n2;
  if (props.n1 > props.n2) {
    min = props.n2;
    max = props.n1;
  }

  return (
    <Text style={Style.fontG}>
      O valor {max} é maior que o valor {min}!
    </Text>
  );
};

export default MinMax;
