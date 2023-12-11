import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import ListaProduto from "./listaProduto";
import ListaServico from "./listaServico";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastro de Clientes', 'Cadastro de Produtos', 'Cadastro de Serviços']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="purple lighten-4" />
                </>
            )
        } if (this.state.tela === 'Produtos') {
            return(
                <>
                    {barraNavegacao}
                    <ListaProduto tema="purple lighten-4" />
                </>
            )
        } if (this.state.tela === 'Serviços') {
            return(
                <>
                    {barraNavegacao}
                    <ListaServico tema="purple lighten-4" />
                </>
            )
        } if (this.state.tela === 'Cadastro de Clientes') {
            return(
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        } if (this.state.tela === 'Cadastro de Produtos') {
            return(
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
}