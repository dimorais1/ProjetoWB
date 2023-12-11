
import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import ListaProduto from "./listaProduto";
import ListaServico from "./listaServico";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";

const Roteador = () => {
  const [tela, setTela] = useState('Clientes');

  const selecionarView = (novaTela: string) => {
    console.log(novaTela);
    setTela(novaTela);
  }

  let barraNavegacao = <BarraNavegacao seletorView={selecionarView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastro de Clientes', 'Cadastro de Produtos', 'Cadastro de Serviços']} />

  if (tela === 'Clientes') {
    return (
      <>
        {barraNavegacao}
        <ListaCliente tema="purple lighten-4" />
      </>
    )
  } else if (tela === 'Produtos') {
    return (
      <>
        {barraNavegacao}
        <ListaProduto tema="purple lighten-4" />
      </>
    )
  } else if (tela === 'Serviços') {
    return (
      <>
        {barraNavegacao}
        <ListaServico tema="purple lighten-4" />
      </>
    )
  } else if (tela === 'Cadastro de Clientes') {
    return (
      <>
        {barraNavegacao}
        <FormularioCadastroCliente tema="purple lighten-4" />
      </>
    )
  } else if (tela === 'Cadastro de Produtos') {
    return (
      <>
        {barraNavegacao}
        <FormularioCadastroProduto tema="purple lighten-4" />
      </>
    )
  } else {
    return (
      <>
        {barraNavegacao}
        <FormularioCadastroServico tema="purple lighten-4" />
      </>
    )
  }
}

export default Roteador;
