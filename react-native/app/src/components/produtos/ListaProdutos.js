import React, {Fragment} from 'react';
import {Text} from 'react-native';
import Style from '../estilo';

import produtos from './produtos';

const ListaProdutos = props => {
  const obterLista = () => {
    return produtos.map(produto => {
      return (
        <Text key={produto.id}>
          {produto.id}) {produto.nome} tem preço R$ {produto.preco}
        </Text>
      );
    });
  };

  return (
    <Fragment>
      <Text style={Style.fontG}>Lista de Produtos</Text>
      {obterLista()}
    </Fragment>
  );
};
export default ListaProdutos;
