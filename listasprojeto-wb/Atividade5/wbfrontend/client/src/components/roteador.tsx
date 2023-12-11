
import React, { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import ListaProduto from "./listaProduto";
import ListaServico from "./listaServico";

const Roteador = () => {
  const [tela, setTela] = useState('Clientes');

  const selecionarView = (novaTela: string) => {
    console.log(novaTela);
    setTela(novaTela);
  }

  let barraNavegacao = <BarraNavegacao seletorView={selecionarView} tema="blue " botoes={['Clientes', 'Produtos', 'Serviços']} />

  if (tela === 'Clientes') {
    return (
      <>
        {barraNavegacao}
        <ListaCliente />
      </>
    )
  } else if (tela === 'Produtos') {
    return (
      <>
        {barraNavegacao}
        <ListaProduto />
      </>
    )
  } else {
    return (
      <>
        {barraNavegacao}
        <ListaServico />
      </>
    )
  }
}

export default Roteador;
