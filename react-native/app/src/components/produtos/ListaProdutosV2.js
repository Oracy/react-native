import React, {Fragment} from 'react';
import {FlatList, Text} from 'react-native';
import Style from '../estilo';

import produtos from './produtos';

const ListaProdutos = props => {
  const produtoRender = ({item: p}) => {
    return (
      <Text>
        {p.id}) {p.nome} - R$ {p.preco}
      </Text>
    );
  };
  return (
    <Fragment>
      <Text style={Style.fontG}>Lista de Produtos V2</Text>
      <FlatList
        data={produtos}
        keyExtractor={i => i.id}
        renderItem={produtoRender}
      />
    </Fragment>
  );
};
export default ListaProdutos;
