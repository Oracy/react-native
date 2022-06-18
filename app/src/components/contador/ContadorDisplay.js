import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Style from '../estilo';

const ContadorDisplay = props => {
  return (
    <View style={style.Display}>
      <Text style={(Style.fontG, style.DisplayText)}>{props.num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  Display: {
    backgroundColor: '#000',
    padding: 20,
    width: 300,
    alignItems: 'center',
  },
  DisplayText: {
    color: '#FFF',
  },
});

export default ContadorDisplay;
