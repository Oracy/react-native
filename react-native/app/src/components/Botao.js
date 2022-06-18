import React, {Fragment} from 'react';
import {Button} from 'react-native';

const Botao = () => {
  const exec = () => {
    console.warn('Exec!!!!');
  };
  return (
    <Fragment>
      <Button title="Exec01!" onPress={exec} />
      <Button
        title="Exec02!"
        onPress={() => {
          console.warn('Exec02!!');
        }}
      />
    </Fragment>
  );
};

export default Botao;
