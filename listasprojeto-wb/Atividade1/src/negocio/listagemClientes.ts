import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public printarCliente(cliente: Cliente): void {
        console.log(`Nome: ` + cliente.nome);
        console.log(`Nome social: ` + cliente.nomeSocial);
        console.log(`CPF: ` + cliente.getCpf.getValor);
        console.log(`--------------------------------------`);
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            this.printarCliente(cliente)
        });
        console.log(`\n`);
    }
    public listarTopConsumo(): void {
        console.log(`\nLista dos 10 clientes que consumiram mais produtos ou serviços:`);
        let topClientes: Cliente[] = [];

        this.clientes.forEach(cliente => {
            if (topClientes.length < 10) {
            topClientes.push(cliente);
            } else {
            let menorConsumoIndex = 0;
            let menorConsumo = this.calcularComprimentoTotal(topClientes[0]);

            for (let i = 1; i < topClientes.length; i++) {
                const consumoAtual = this.calcularComprimentoTotal(topClientes[i]);

                if (consumoAtual < menorConsumo) {
                menorConsumo = consumoAtual;
                menorConsumoIndex = i;
                }
            }

            const consumoCliente = this.calcularComprimentoTotal(cliente);

            if (consumoCliente > menorConsumo) {
                topClientes[menorConsumoIndex] = cliente;
            }
            }
        });

        topClientes.forEach(cliente => {
            this.printarCliente(cliente);
        });

        console.log(`\n`);
    }
      
    private calcularComprimentoTotal(cliente: Cliente): number {
        const produtos = cliente.getProdutosConsumidos;
        const servicos = cliente.getServicosConsumidos;
        return produtos.length + servicos.length;
    }
      
    public listarPorGenero(): void {
        console.log(`\nLista de todos os clientes por genero:`);
        let clientesMasculinos: Cliente[] = [];
        let clientesFemininos: Cliente[] = [];
        this.clientes.forEach(cliente => {
            switch (cliente.getGenero) {
                case "M":
                    clientesMasculinos.push(cliente);
                    break;
                case "F":
                    clientesFemininos.push(cliente);
                    break;
            }
        });
        if (clientesFemininos.length > 0) {
            console.log(`\nClientes femininos`);
            clientesFemininos.forEach(cliente => {
                this.printarCliente(cliente)
            });
        }
        if (clientesMasculinos.length > 0) {
            console.log(`\nClientes masculinos`);
            clientesMasculinos.forEach(cliente => {
                this.printarCliente(cliente)
            });
        }
        console.log(`\n`);
    }
    public listarQuemMenosConsumiu(): void {
        console.log(`\nLista dos 10 clientes que menos consumiram produtos ou serviços:`);

        const clientesOrdenados = this.clientes.sort((a, b) => a.getQtdServicosEProdutos - b.getQtdServicosEProdutos);

        const clientesMenosConsumiram = clientesOrdenados.slice(0, 10);

        let contador: number = 1;

        clientesMenosConsumiram.forEach( cliente => {
            console.log(`${contador}° serviço: ${cliente.nome}`);
            contador += 1;
        });
    }
    public listarQuemMaisConsumiuValor(): void {
        console.log(`\nLista dos 5 clientes que mais consumiram produtos ou serviços em valor:`);

        const clientesOrdenados = this.clientes.sort((a, b) => b.getTotalGasto - a.getTotalGasto);

        const clientesMaisConsumiram = clientesOrdenados.slice(0, 5);

        let contador: number = 1;

        clientesMaisConsumiram.forEach( cliente => {
            console.log(`${contador}° cleinte: ${cliente.nome}`);
            contador += 1;
        });
    }
}