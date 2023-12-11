import { cp } from "fs";
import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";
import Selecionador from "../negocio/selecionador";
import EditorCliente from "../negocio/editorCliente";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import _ from 'lodash';


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`);

let produto = new Produto();
produto.nome = 'Condicionador';
produto.valor = 25;

let produto1 = new Produto();
produto1.nome = 'Shampoo';
produto1.valor = 20;

let produto2 = new Produto();
produto2.nome = 'Sabonete';
produto2.valor = 5;

let produto3 = new Produto();
produto3.nome = 'Creme dental';
produto3.valor = 8;

let produto4 = new Produto();
produto4.nome = 'Desodorante';
produto4.valor = 15;

let produto5 = new Produto();
produto5.nome = 'Perfume';
produto5.valor = 50;

let produto6 = new Produto();
produto6.nome = 'Pente';
produto6.valor = 10;

let produto7 = new Produto();
produto7.nome = 'Escova de cabelo';
produto7.valor = 12;

let produto8 = new Produto();
produto8.nome = 'Papel higiênico';
produto8.valor = 6;

let produto9 = new Produto();
produto9.nome = 'Escova de dentes';
produto9.valor = 7;

let produto10 = new Produto();
produto10.nome = 'Creme hidratante';
produto10.valor = 30;

let produto11 = new Produto();
produto11.nome = 'Protetor solar';
produto11.valor = 40;

let produtos: Produto[] = [
  produto, produto1, produto2, produto3, produto4, produto5, produto6,
  produto7, produto8, produto9, produto10, produto11
];

let servico1 = new Servico();
servico1.nome = 'Corte de Cabelo';
servico1.valor = 30;

let servico2 = new Servico();
servico2.nome = 'Coloração';
servico2.valor = 60;

let servico3 = new Servico();
servico3.nome = 'Manicure';
servico3.valor = 20;

let servico4 = new Servico();
servico4.nome = 'Pedicure';
servico4.valor = 25;

let servico5 = new Servico();
servico5.nome = 'Limpeza de Pele';
servico5.valor = 50;

let servico6 = new Servico();
servico6.nome = 'Massagem Relaxante';
servico6.valor = 70;

let servico7 = new Servico();
servico7.nome = 'Depilação';
servico7.valor = 40;

let servico8 = new Servico();
servico8.nome = 'Sobrancelha';
servico8.valor = 15;

let servico9 = new Servico();
servico9.nome = 'Maquiagem';
servico9.valor = 50;

let servico10 = new Servico();
servico10.nome = 'Penteado';
servico10.valor = 40;

let servico11 = new Servico();
servico11.nome = 'Tratamento Capilar';
servico11.valor = 55;

let servico12 = new Servico();
servico12.nome = 'Design de Unhas';
servico12.valor = 25;

let servicos: Servico[] = [
  servico1, servico2, servico3, servico4, servico5, servico6, 
  servico7, servico8, servico9, servico10, servico11, servico12
];

let cliente = new Cliente('José Silva', 'José', 'M', new CPF('12345678912', new Date(1950, 5, 15)));
let cliente1 = new Cliente('Maria Silva', 'Maria', 'F', new CPF('12345858912', new Date(1958, 6, 2)));
let cliente2 = new Cliente('João Souza', 'João', 'M', new CPF('98765432198', new Date(1985, 8, 10)));
let cliente3 = new Cliente('Ana Santos', 'Ana', 'F', new CPF('45678912367', new Date(1990, 3, 25)));
let cliente4 = new Cliente('Pedro Oliveira', 'Pedro', 'M', new CPF('78945612345', new Date(1982, 11, 7)));
let cliente5 = new Cliente('Carla Mendes', 'Carla', 'F', new CPF('12378965423', new Date(1975, 7, 19)));
let cliente6 = new Cliente('Márcio Alves', 'Márcio', 'M', new CPF('36985214725', new Date(1995, 1, 12)));
let cliente7 = new Cliente('Sandra Costa', 'Sandra', 'F', new CPF('25896314789', new Date(1988, 9, 8)));
let cliente8 = new Cliente('Rafaela Pereira', 'Rafaela', 'F', new CPF('96385274136', new Date(1978, 4, 30)));
let cliente9 = new Cliente('Fernando Lima', 'Fernando', 'M', new CPF('14785236984', new Date(1980, 2, 3)));
let cliente10 = new Cliente('Cristina Rodrigues', 'Cristina', 'F', new CPF('36974125896', new Date(1992, 6, 21)));
let cliente11 = new Cliente('Gustavo Castro', 'Gustavo', 'M', new CPF('78965412385', new Date(1987, 10, 14)));
let cliente12 = new Cliente('Luciana Ribeiro', 'Luciana', 'F', new CPF('12398745636', new Date(1973, 12, 28)));
let cliente13 = new Cliente('Carlos Melo', 'Carlos', 'M', new CPF('14796325874', new Date(1998, 4, 9)));
let cliente14 = new Cliente('Patrícia Almeida', 'Patrícia', 'F', new CPF('36914785263', new Date(1984, 8, 17)));
let cliente15 = new Cliente('Roberto Ferreira', 'Roberto', 'M', new CPF('98732165474', new Date(1971, 11, 1)));
let cliente16 = new Cliente('Camila Gonçalves', 'Camila', 'F', new CPF('12365478985', new Date(1993, 3, 6)));
let cliente17 = new Cliente('Daniel Santos', 'Daniel', 'M', new CPF('74125896325', new Date(1976, 9, 24)));
let cliente18 = new Cliente('Mariana Castro', 'Mariana', 'F', new CPF('32165498774', new Date(1989, 5, 13)));
let cliente19 = new Cliente('Alexandre Carvalho', 'Alexandre', 'M', new CPF('96374185269', new Date(1979, 1, 18)));
let cliente20 = new Cliente('Tatiana Cunha', 'Tatiana', 'F', new CPF('15935785296', new Date(1991, 7, 27)));
let cliente21 = new Cliente('Vitor Paiva', 'Vitor', 'M', new CPF('45678912365', new Date(1986, 6, 11)));
let cliente22 = new Cliente('Laura Lima', 'Laura', 'F', new CPF('74185296325', new Date(1974, 10, 5)));
let cliente23 = new Cliente('Marcelo Ribeiro', 'Marcelo', 'M', new CPF('32165498774', new Date(1997, 4, 23)));
let cliente24 = new Cliente('Camila Costa', 'Camila', 'F', new CPF('96385274139', new Date(1983, 9, 16)));
let cliente25 = new Cliente('Ricardo Melo', 'Ricardo', 'M', new CPF('15975325874', new Date(1977, 5, 4)));
let cliente26 = new Cliente('Letícia Almeida', 'Letícia', 'F', new CPF('98745632174', new Date(1994, 2, 8)));
let cliente27 = new Cliente('Felipe Ferreira', 'Felipe', 'M', new CPF('45612378998', new Date(1981, 8, 29)));
let cliente28 = new Cliente('Isabela Gonçalves', 'Isabela', 'F', new CPF('32165498777', new Date(1996, 6, 15)));
let cliente29 = new Cliente('Rodrigo Fernandes', 'Rodrigo', 'M', new CPF('98765432101', new Date(1999, 11, 30)));

let clientes: Cliente[] = [
    cliente, cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10,
    cliente11, cliente12, cliente13, cliente14, cliente15, cliente16, cliente17, cliente18, cliente19, cliente20,
    cliente21, cliente22, cliente23, cliente24, cliente25, cliente26, cliente27, cliente28, cliente29
];

clientes.forEach((cliente) => {
    const quantidadeProdutos = _.random(1, produtos.length);
    const quantidadeServicos = _.random(1, servicos.length);

    const produtosConsumidos = _.sampleSize(produtos, quantidadeProdutos);
    const servicosConsumidos = _.sampleSize(servicos, quantidadeServicos);

    cliente.setProdutosConsumidos(produtosConsumidos);
    cliente.setServicosConsumidos(servicosConsumidos);
});  

let empresa = new Empresa(clientes, produtos, servicos);
let execucao = true;

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar Produto`);
    console.log(`4 - Listar todos os produtos`);
    console.log(`5 - Excluir um cliente`);
    console.log(`6 - Editar um cliente`);
    console.log(`7 - Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor.`);
    console.log(`8 - Listagem de todos os clientes por gênero.`);
    console.log(`9 - Listagem geral dos serviços ou produtos mais consumidos.`);
    console.log(`10 - Listagem dos serviços ou produtos mais consumidos por gênero.`);
    console.log(`11 - Listagem dos 10 clientes que menos consumiram produtos ou serviços.`);
    console.log(`12 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade.`);
    console.log(`0 - Sair`);

    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 4:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos, empresa.getClientes);
            listagemProdutos.listar();
            break;
        case 5:
            let cpf = entrada.receberTexto('Digite um cpf para exclusão: ');
            let selecionadorCliente = new Selecionador(empresa.getClientes);
            let cliente = selecionadorCliente.selecionar(cpf);

            let indice = empresa.getClientes.indexOf(cliente);
            delete empresa.getClientes[indice];
            break;
        case 6:
            let cpfEditar = entrada.receberTexto('Digite um cpf para edição: ');
            let selecionadorClienteEditar = new Selecionador(empresa.getClientes);
            let clienteEditar = selecionadorClienteEditar.selecionar(cpfEditar);

            let editor = new EditorCliente();
            editor.editar(clienteEditar);
            break;
        case 7:
            let listagemTopConsumo = new ListagemClientes(empresa.getClientes);
            listagemTopConsumo.listarTopConsumo();
            break;
        case 8:
            let listagemPorGen = new ListagemClientes(empresa.getClientes);
            listagemPorGen.listarPorGenero();
            break;
        case 9:
            let listagemProdutosTop = new ListagemProdutos(empresa.getProdutos, empresa.getClientes);
            listagemProdutosTop.listarMaisUtilizados();
            let listagemServicosTop = new ListagemServicos(empresa.getServicos, empresa.getClientes);
            listagemServicosTop.listarMaisUtilizados();
            break;
        case 10:
            let listagemProdutosPorGen = new ListagemProdutos(empresa.getProdutos, empresa.getClientes);
            listagemProdutosPorGen.listarMaisUtilizadosPorGenero();
            let listagemServicosPorGen = new ListagemServicos(empresa.getServicos, empresa.getClientes);
            listagemServicosPorGen.listarMaisUtilizadosPorGenero();
            break;
        case 11:
            let listagemMenosConsumiuProdServ = new ListagemClientes(empresa.getClientes);
            listagemMenosConsumiuProdServ.listarQuemMenosConsumiu();
            break;
        case 12:
            let listagemMaisConsumidosValor = new ListagemClientes(empresa.getClientes);
            listagemMaisConsumidosValor.listarQuemMaisConsumiuValor();
            break;
        case 0:
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}