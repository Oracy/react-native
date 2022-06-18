import React, {Fragment} from 'react';
import {Text} from 'react-native';
import Style from '../estilo';

const Filho = props => {
  return (
    <Fragment>
      <Text style={Style.fontG}>{props.a}</Text>
      <Text style={Style.fontG}>{props.b}</Text>
    </Fragment>
  );
};

export default Filho;
