import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

const DigiteSeuNome = props => {
  const [nome, setNome] = useState('');
  return (
    <View>
      <TextInput
        placeholder="Digite seu Nome"
        value={nome}
        // eslint-disable-next-line no-shadow
        onChangeText={nome => setNome(nome)}
      />
    </View>
  );
};
export default DigiteSeuNome;
