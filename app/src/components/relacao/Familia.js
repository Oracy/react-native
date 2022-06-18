import React, {Fragment} from 'react';
import {Text} from 'react-native';

const Familia = props => {
  return (
    <Fragment>
      <Text>Membros da Família:</Text>
      {props.children}
    </Fragment>
  );
};
export default Familia;
