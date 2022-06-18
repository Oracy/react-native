import React, {Fragment, useState} from 'react';
import {Text} from 'react-native';
import Style from '../estilo';
import ContadorBotoes from './ContadorBotoes';
import ContadorDisplay from './ContadorDisplay';

const ContadorV2 = props => {
  const [num, setNum] = useState(0);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <Fragment>
      <Text style={Style.fontG}>Contador</Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes inc={inc} dec={dec} />
    </Fragment>
  );
};
export default ContadorV2;
