import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const ContadorBotoes = props => {
  return (
    <View style={style.Botoes}>
      <Button title="+" onPress={props.inc} />
      <Button title="-" onPress={props.dec} />
    </View>
  );
};

const style = StyleSheet.create({
  Botoes: {
    flexDirection: 'row',
  },
});

export default ContadorBotoes;
