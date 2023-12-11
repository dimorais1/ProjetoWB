import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    private clientes: Array<Cliente>
    constructor(servicos: Array<Servico>, clientes: Array<Cliente>) {
        super()
        this.servicos = servicos;
        this.clientes = clientes;
    }
    public listar(): void {
        console.log(`\nLista de todos os Servicos:`);

        this.servicos.forEach( servico => {
            console.log(`Nome do serviço: ${servico.nome}`)
        });

        console.log(`\n`);
    }
    public ordenarPorMaisUtilizados(servicos: Array<Servico>): string[] {
        const frequencia: { [key: string]: number } = {};
      
        servicos.forEach((servico) => {
          const nome = servico.nome;
          frequencia[nome] = (frequencia[nome] || 0) + 1;
        });
      
        const elementosOrdenados = Object.keys(frequencia).sort(
          (a: string, b: string) => frequencia[b] - frequencia[a]
        );
      
        const servicosMaisUtilizados: string[] = elementosOrdenados.slice(0, 5);
      
        return servicosMaisUtilizados;
      }
      public concatenarServicos(): Array<Servico> {
        let servicos: Array<Servico> = []
        this.clientes.forEach( cliente => {
            cliente.getServicosConsumidos.forEach( servico => {
                servicos.push(servico)
            });
        });
        return servicos
    }
    public concatenarServicosPorGenero(clientes: Array<Cliente>): Array<Servico> {
        let servicos: Array<Servico> = []
        clientes.forEach( cliente => {
            cliente.getServicosConsumidos.forEach( servico => {
                servicos.push(servico)
            });
        });
        return servicos
    }
    public listarMaisUtilizados(): void {
        console.log(`\nLista dos 5 serviços mais utilizados:`);

        const nomeprodutos = this.ordenarPorMaisUtilizados(this.concatenarServicos())

        for (let index = 0; index < nomeprodutos.length; index++) {
            console.log(`${index+1}° serviço: ${nomeprodutos[index]}`)
        }

        console.log(`\n`);
    }
    public listarMaisUtilizadosPorGenero(): void {
        console.log(`\nLista dos 5 serviços mais utilizados por genero:`);
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
        const nomeprodutosH = this.ordenarPorMaisUtilizados(this.concatenarServicosPorGenero(clientesMasculinos));
        const nomeprodutosM = this.ordenarPorMaisUtilizados(this.concatenarServicosPorGenero(clientesFemininos));
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