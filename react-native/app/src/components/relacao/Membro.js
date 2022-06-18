import React from 'react';
import {Text} from 'react-native';
import Style from '../estilo';

const Membro = props => {
  return (
    <Text style={Style.fontG}>
      {props.nome} {props.sobrenome}
    </Text>
  );
};
export default Membro;
