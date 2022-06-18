import React, {Fragment} from 'react';
import {Text} from 'react-native';
import Style from './estilo';
import If from './If';

const UsuarioLogado = props => {
  const usuario = props.usuario || {};
  return (
    <Fragment>
      <If teste={usuario && usuario.nome && usuario.email}>
        <Text>Usuário logado:</Text>
        <Text style={Style.fontG}>
          {usuario.nome} - {usuario.email}
        </Text>
      </If>
    </Fragment>
  );
};
export default UsuarioLogado;
