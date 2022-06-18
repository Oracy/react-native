import React, {Fragment} from 'react';
import {View} from 'react-native';

const Quadrado = props => {
  const lado = props.lado || 60;
  return (
    <Fragment>
      <View
        style={{
          height: lado,
          width: lado,
          backgroundColor: props.color || '#000',
        }}
      />
    </Fragment>
  );
};

export default Quadrado;
