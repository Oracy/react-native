import React, {Fragment} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Style from '../estilo';
import MegaNumero from './MegaNumero';

export default class Mega extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qtdNumeros: props.qtdNumeros,
      numeros: [],
    };
  }

  alterarQtdNumeros = qtd => {
    this.setState({qtdNumeros: +qtd});
  };

  gerarNumeroNaoContido = nums => {
    // eslint-disable-next-line radix
    const novoNumero = parseInt(Math.random() * 60) + 1;
    return nums.includes(novoNumero)
      ? this.gerarNumeroNaoContido(nums)
      : novoNumero;
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdNumeros)
      .fill()
      .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
      .sort((a, b) => a - b);
    this.setState({numeros});
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map(num => {
      return <MegaNumero key={num} num={num} />;
    });
  };

  render() {
    return (
      <Fragment>
        <Text style={Style.fontG}>
          Gerador de Mega-Sena {this.state.qtdNumeros}
        </Text>
        <TextInput
          keyboardType={'numeric'}
          //   style={{borderBottomWidth: 1}}
          placeholder="Qtd de Numeros"
          value={`${this.state.qtdNumeros}`}
          onChangeText={this.alterarQtdNumeros}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {this.exibirNumeros()}
        </View>
      </Fragment>
    );
  }
}
