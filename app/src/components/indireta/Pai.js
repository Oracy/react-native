import React, {Fragment, useState} from 'react';
import {Text} from 'react-native';
import Filho from './Filho';
import Style from '../estilo';

const Pai = props => {
  const [texto, setTexto] = useState('');
  const [num, setNum] = useState(0);

  const exibirValor = (numero, text) => {
    setNum(numero);
    setTexto(text);
  };
  return (
    <Fragment>
      <Text style={Style.fontG}>
        {texto}: {num}
      </Text>
      <Filho min={1} max={60} funcao={exibirValor} />
    </Fragment>
  );
};

export default Pai;
