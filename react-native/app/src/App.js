import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Mega from './components/mega/Mega';

export default () => (
  <SafeAreaView style={style.App}>
    <Mega qtdNumeros={12} />
    {/*
    <FlexBoxV4 />
    <FlexBoxV3 />
    <FlexBoxV2 />
    <FlexBoxV1 />
    <DigiteSeuNome />
    <ListaProdutosV2 />
    <ListaProdutos />
    <UsuarioLogado
      usuario={{nome: 'Oracy', email: 'oramartos_21@hotmail.com'}}
    />
    <UsuarioLogado usuario={{email: 'oramartos_21@hotmail.com'}} />
    <UsuarioLogado usuario={{nome: 'Oracy'}} />
    <Familia>
      <Membro nome="Bia" sobrenome="Martos" />
      <Membro nome="Julia" sobrenome="Martos" />
    </Familia>
    <Familia>
      <Membro nome="Oracy" sobrenome="Martos" />
      <Membro nome="Juliana" sobrenome="Martos" />
    </Familia>
    <ParImpar num={3} />
    <Diferenciar />
    <ContadorV2 />
    <Pai />
    <Contador inicial={100} passo={13} />
    <Contador />
     <Botao />
    <Titulo
      principal="Cadastro Produto"
      secundario="Tela de Cadastro do Produto"
    />
    <MinMax min={RandomNumber()} max={RandomNumber()} />
    <MinMax min="1" max="94" />
    <Primeiro />
    <CompPadrao />
    <Comp1 />
    <Comp2 /> */}
  </SafeAreaView>
);
// export default () =>{
//     <Text>Primeiro Componente</Text>;
// }

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
