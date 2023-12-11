import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    private clientes: Array<Cliente>
    constructor(produtos: Array<Produto>, clientes: Array<Cliente>) {
        super()
        this.produtos = produtos;
        this.clientes = clientes;
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);

        this.produtos.forEach( produto => {
            console.log(`Nome do produto: ${produto.nome}`)
        })

        console.log(`\n`);
    }
    public ordenarPorMaisUtilizados(produtos: Array<Produto>): string[] {
        const frequencia: { [key: string]: number } = {};
      
        produtos.forEach((produto) => {
          const nome = produto.nome;
          frequencia[nome] = (frequencia[nome] || 0) + 1;
        });
      
        const elementosOrdenados = Object.keys(frequencia).sort(
          (a: string, b: string) => frequencia[b] - frequencia[a]
        );
      
        const produtosMaisUtilizados: string[] = elementosOrdenados.slice(0, 5);
      
        return produtosMaisUtilizados;
      }
    public concatenarProdutos(): Array<Produto> {
        let produtos: Array<Produto> = []
        this.clientes.forEach( cliente => {
            cliente.getProdutosConsumidos.forEach( produto => {
                produtos.push(produto)
            });
        });
        return produtos
    }
    public concatenarProdutosPorGenero(clientes: Array<Cliente>): Array<Produto> {
        let produtos: Array<Produto> = []
        clientes.forEach( cliente => {
            cliente.getProdutosConsumidos.forEach( produto => {
                produtos.push(produto)
            });
        });
        return produtos
    }
    public listarMaisUtilizados(): void {
        console.log(`\nLista dos 5 produtos mais utilizados:`);

        const nomeprodutos = this.ordenarPorMaisUtilizados(this.concatenarProdutos())

        for (let index = 0; index < nomeprodutos.length; index++) {
            console.log(`${index+1}° serviço: ${nomeprodutos[index]}`)
        }

        console.log(`\n`);
    }
    public listarMaisUtilizadosPorGenero(): void {
        console.log(`\nLista dos 5 produtos mais utilizados por genero:`);
        let clientesMasculinos: Cliente[] = [];
        let clientesFemininos: Cliente[] = [];
        this.clientes.forEach(cliente => {
            switch (cliente.getGenero) {
                case "M":
                    clientesMasculinos.push(cliente);
                case "F":
                    clientesFemininos.push(cliente);
            }
        });
        const nomeprodutosH = this.ordenarPorMaisUtilizados(this.concatenarProdutosPorGenero(clientesMasculinos));
        const nomeprodutosM = this.ordenarPorMaisUtilizados(this.concatenarProdutosPorGenero(clientesFemininos));
        console.log(`- MASCULINO`);
        for (let index = 0; index < nomeprodutosH.length; index++) {
            console.log(`${index+1}° serviço: ${nomeprodutosH[index]}`)
        }
        console.log(`- FEMININO`);
        for (let index = 0; index < nomeprodutosM.length; index++) {
            console.log(`${index+1}° serviço: ${nomeprodutosM[index]}`)
        }
        console.log(`\n`);
    }
}