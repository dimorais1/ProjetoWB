"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var empresa_1 = __importDefault(require("../modelo/empresa"));
var cadastroCliente_1 = __importDefault(require("../negocio/cadastroCliente"));
var cadastroProduto_1 = __importDefault(require("../negocio/cadastroProduto"));
var listagemClientes_1 = __importDefault(require("../negocio/listagemClientes"));
var listagemProdutos_1 = __importDefault(require("../negocio/listagemProdutos"));
var listagemServicos_1 = __importDefault(require("../negocio/listagemServicos"));
var selecionador_1 = __importDefault(require("../negocio/selecionador"));
var editorCliente_1 = __importDefault(require("../negocio/editorCliente"));
var cliente_1 = __importDefault(require("../modelo/cliente"));
var cpf_1 = __importDefault(require("../modelo/cpf"));
var produto_1 = __importDefault(require("../modelo/produto"));
var servico_1 = __importDefault(require("../modelo/servico"));
var lodash_1 = __importDefault(require("lodash"));
console.log("Bem-vindo ao cadastro de clientes do Grupo World Beauty");
var produto = new produto_1.default();
produto.nome = 'Condicionador';
produto.valor = 25;
var produto1 = new produto_1.default();
produto1.nome = 'Shampoo';
produto1.valor = 20;
var produto2 = new produto_1.default();
produto2.nome = 'Sabonete';
produto2.valor = 5;
var produto3 = new produto_1.default();
produto3.nome = 'Creme dental';
produto3.valor = 8;
var produto4 = new produto_1.default();
produto4.nome = 'Desodorante';
produto4.valor = 15;
var produto5 = new produto_1.default();
produto5.nome = 'Perfume';
produto5.valor = 50;
var produto6 = new produto_1.default();
produto6.nome = 'Pente';
produto6.valor = 10;
var produto7 = new produto_1.default();
produto7.nome = 'Escova de cabelo';
produto7.valor = 12;
var produto8 = new produto_1.default();
produto8.nome = 'Papel higiênico';
produto8.valor = 6;
var produto9 = new produto_1.default();
produto9.nome = 'Escova de dentes';
produto9.valor = 7;
var produto10 = new produto_1.default();
produto10.nome = 'Creme hidratante';
produto10.valor = 30;
var produto11 = new produto_1.default();
produto11.nome = 'Protetor solar';
produto11.valor = 40;
var produtos = [
    produto, produto1, produto2, produto3, produto4, produto5, produto6,
    produto7, produto8, produto9, produto10, produto11
];
var servico1 = new servico_1.default();
servico1.nome = 'Corte de Cabelo';
servico1.valor = 30;
var servico2 = new servico_1.default();
servico2.nome = 'Coloração';
servico2.valor = 60;
var servico3 = new servico_1.default();
servico3.nome = 'Manicure';
servico3.valor = 20;
var servico4 = new servico_1.default();
servico4.nome = 'Pedicure';
servico4.valor = 25;
var servico5 = new servico_1.default();
servico5.nome = 'Limpeza de Pele';
servico5.valor = 50;
var servico6 = new servico_1.default();
servico6.nome = 'Massagem Relaxante';
servico6.valor = 70;
var servico7 = new servico_1.default();
servico7.nome = 'Depilação';
servico7.valor = 40;
var servico8 = new servico_1.default();
servico8.nome = 'Sobrancelha';
servico8.valor = 15;
var servico9 = new servico_1.default();
servico9.nome = 'Maquiagem';
servico9.valor = 50;
var servico10 = new servico_1.default();
servico10.nome = 'Penteado';
servico10.valor = 40;
var servico11 = new servico_1.default();
servico11.nome = 'Tratamento Capilar';
servico11.valor = 55;
var servico12 = new servico_1.default();
servico12.nome = 'Design de Unhas';
servico12.valor = 25;
var servicos = [
    servico1, servico2, servico3, servico4, servico5, servico6,
    servico7, servico8, servico9, servico10, servico11, servico12
];
var cliente = new cliente_1.default('José Silva', 'José', 'M', new cpf_1.default('12345678912', new Date(1950, 5, 15)));
var cliente1 = new cliente_1.default('Maria Silva', 'Maria', 'F', new cpf_1.default('12345858912', new Date(1958, 6, 2)));
var cliente2 = new cliente_1.default('João Souza', 'João', 'M', new cpf_1.default('98765432198', new Date(1985, 8, 10)));
var cliente3 = new cliente_1.default('Ana Santos', 'Ana', 'F', new cpf_1.default('45678912367', new Date(1990, 3, 25)));
var cliente4 = new cliente_1.default('Pedro Oliveira', 'Pedro', 'M', new cpf_1.default('78945612345', new Date(1982, 11, 7)));
var cliente5 = new cliente_1.default('Carla Mendes', 'Carla', 'F', new cpf_1.default('12378965423', new Date(1975, 7, 19)));
var cliente6 = new cliente_1.default('Márcio Alves', 'Márcio', 'M', new cpf_1.default('36985214725', new Date(1995, 1, 12)));
var cliente7 = new cliente_1.default('Sandra Costa', 'Sandra', 'F', new cpf_1.default('25896314789', new Date(1988, 9, 8)));
var cliente8 = new cliente_1.default('Rafaela Pereira', 'Rafaela', 'F', new cpf_1.default('96385274136', new Date(1978, 4, 30)));
var cliente9 = new cliente_1.default('Fernando Lima', 'Fernando', 'M', new cpf_1.default('14785236984', new Date(1980, 2, 3)));
var cliente10 = new cliente_1.default('Cristina Rodrigues', 'Cristina', 'F', new cpf_1.default('36974125896', new Date(1992, 6, 21)));
var cliente11 = new cliente_1.default('Gustavo Castro', 'Gustavo', 'M', new cpf_1.default('78965412385', new Date(1987, 10, 14)));
var cliente12 = new cliente_1.default('Luciana Ribeiro', 'Luciana', 'F', new cpf_1.default('12398745636', new Date(1973, 12, 28)));
var cliente13 = new cliente_1.default('Carlos Melo', 'Carlos', 'M', new cpf_1.default('14796325874', new Date(1998, 4, 9)));
var cliente14 = new cliente_1.default('Patrícia Almeida', 'Patrícia', 'F', new cpf_1.default('36914785263', new Date(1984, 8, 17)));
var cliente15 = new cliente_1.default('Roberto Ferreira', 'Roberto', 'M', new cpf_1.default('98732165474', new Date(1971, 11, 1)));
var cliente16 = new cliente_1.default('Camila Gonçalves', 'Camila', 'F', new cpf_1.default('12365478985', new Date(1993, 3, 6)));
var cliente17 = new cliente_1.default('Daniel Santos', 'Daniel', 'M', new cpf_1.default('74125896325', new Date(1976, 9, 24)));
var cliente18 = new cliente_1.default('Mariana Castro', 'Mariana', 'F', new cpf_1.default('32165498774', new Date(1989, 5, 13)));
var cliente19 = new cliente_1.default('Alexandre Carvalho', 'Alexandre', 'M', new cpf_1.default('96374185269', new Date(1979, 1, 18)));
var cliente20 = new cliente_1.default('Tatiana Cunha', 'Tatiana', 'F', new cpf_1.default('15935785296', new Date(1991, 7, 27)));
var cliente21 = new cliente_1.default('Vitor Paiva', 'Vitor', 'M', new cpf_1.default('45678912365', new Date(1986, 6, 11)));
var cliente22 = new cliente_1.default('Laura Lima', 'Laura', 'F', new cpf_1.default('74185296325', new Date(1974, 10, 5)));
var cliente23 = new cliente_1.default('Marcelo Ribeiro', 'Marcelo', 'M', new cpf_1.default('32165498774', new Date(1997, 4, 23)));
var cliente24 = new cliente_1.default('Camila Costa', 'Camila', 'F', new cpf_1.default('96385274139', new Date(1983, 9, 16)));
var cliente25 = new cliente_1.default('Ricardo Melo', 'Ricardo', 'M', new cpf_1.default('15975325874', new Date(1977, 5, 4)));
var cliente26 = new cliente_1.default('Letícia Almeida', 'Letícia', 'F', new cpf_1.default('98745632174', new Date(1994, 2, 8)));
var cliente27 = new cliente_1.default('Felipe Ferreira', 'Felipe', 'M', new cpf_1.default('45612378998', new Date(1981, 8, 29)));
var cliente28 = new cliente_1.default('Isabela Gonçalves', 'Isabela', 'F', new cpf_1.default('32165498777', new Date(1996, 6, 15)));
var cliente29 = new cliente_1.default('Rodrigo Fernandes', 'Rodrigo', 'M', new cpf_1.default('98765432101', new Date(1999, 11, 30)));
var clientes = [
    cliente, cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8, cliente9, cliente10,
    cliente11, cliente12, cliente13, cliente14, cliente15, cliente16, cliente17, cliente18, cliente19, cliente20,
    cliente21, cliente22, cliente23, cliente24, cliente25, cliente26, cliente27, cliente28, cliente29
];
clientes.forEach(function (cliente) {
    var quantidadeProdutos = lodash_1.default.random(1, produtos.length);
    var quantidadeServicos = lodash_1.default.random(1, servicos.length);
    var produtosConsumidos = lodash_1.default.sampleSize(produtos, quantidadeProdutos);
    var servicosConsumidos = lodash_1.default.sampleSize(servicos, quantidadeServicos);
    cliente.setProdutosConsumidos(produtosConsumidos);
    cliente.setServicosConsumidos(servicosConsumidos);
});
var empresa = new empresa_1.default(clientes, produtos, servicos);
var execucao = true;
while (execucao) {
    console.log("Op\u00E7\u00F5es:");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Cadastrar Produto");
    console.log("4 - Listar todos os produtos");
    console.log("5 - Excluir um cliente");
    console.log("6 - Editar um cliente");
    console.log("7 - Listagem dos 10 clientes que mais consumiram produtos ou servi\u00E7os, em quantidade, n\u00E3o em valor.");
    console.log("8 - Listagem de todos os clientes por g\u00EAnero.");
    console.log("9 - Listagem geral dos servi\u00E7os ou produtos mais consumidos.");
    console.log("10 - Listagem dos servi\u00E7os ou produtos mais consumidos por g\u00EAnero.");
    console.log("11 - Listagem dos 10 clientes que menos consumiram produtos ou servi\u00E7os.");
    console.log("12 - Listagem dos 5 clientes que mais consumiram em valor, n\u00E3o em quantidade.");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            var listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            var cadastroProduto = new cadastroProduto_1.default(empresa.getProdutos);
            cadastroProduto.cadastrar();
            break;
        case 4:
            var listagemProdutos = new listagemProdutos_1.default(empresa.getProdutos, empresa.getClientes);
            listagemProdutos.listar();
            break;
        case 5:
            var cpf = entrada.receberTexto('Digite um cpf para exclusão: ');
            var selecionadorCliente = new selecionador_1.default(empresa.getClientes);
            var cliente_2 = selecionadorCliente.selecionar(cpf);
            var indice = empresa.getClientes.indexOf(cliente_2);
            delete empresa.getClientes[indice];
            break;
        case 6:
            var cpfEditar = entrada.receberTexto('Digite um cpf para edição: ');
            var selecionadorClienteEditar = new selecionador_1.default(empresa.getClientes);
            var clienteEditar = selecionadorClienteEditar.selecionar(cpfEditar);
            var editor = new editorCliente_1.default();
            editor.editar(clienteEditar);
            break;
        case 7:
            var listagemTopConsumo = new listagemClientes_1.default(empresa.getClientes);
            listagemTopConsumo.listarTopConsumo();
            break;
        case 8:
            var listagemPorGen = new listagemClientes_1.default(empresa.getClientes);
            listagemPorGen.listarPorGenero();
            break;
        case 9:
            var listagemProdutosTop = new listagemProdutos_1.default(empresa.getProdutos, empresa.getClientes);
            listagemProdutosTop.listarMaisUtilizados();
            var listagemServicosTop = new listagemServicos_1.default(empresa.getServicos, empresa.getClientes);
            listagemServicosTop.listarMaisUtilizados();
            break;
        case 10:
            var listagemProdutosPorGen = new listagemProdutos_1.default(empresa.getProdutos, empresa.getClientes);
            listagemProdutosPorGen.listarMaisUtilizadosPorGenero();
            var listagemServicosPorGen = new listagemServicos_1.default(empresa.getServicos, empresa.getClientes);
            listagemServicosPorGen.listarMaisUtilizadosPorGenero();
            break;
        case 11:
            var listagemMenosConsumiuProdServ = new listagemClientes_1.default(empresa.getClientes);
            listagemMenosConsumiuProdServ.listarQuemMenosConsumiu();
            break;
        case 12:
            var listagemMaisConsumidosValor = new listagemClientes_1.default(empresa.getClientes);
            listagemMaisConsumidosValor.listarQuemMaisConsumiuValor();
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
