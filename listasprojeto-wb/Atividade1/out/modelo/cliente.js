"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nome, nomeSocial, genero, cpf) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.genero = genero;
        this.cpf = cpf;
        this.rgs = [];
        this.dataCadastro = new Date();
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }
    Object.defineProperty(Cliente.prototype, "getCpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getRgs", {
        get: function () {
            return this.rgs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getDataCadastro", {
        get: function () {
            return this.dataCadastro;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTelefones", {
        get: function () {
            return this.telefones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getProdutosConsumidos", {
        get: function () {
            return this.produtosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getServicosConsumidos", {
        get: function () {
            return this.servicosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.prototype.setProdutosConsumidos = function (produtos) {
        this.produtosConsumidos = produtos;
    };
    Cliente.prototype.setServicosConsumidos = function (servicos) {
        this.servicosConsumidos = servicos;
    };
    Object.defineProperty(Cliente.prototype, "getQtdServicosEProdutos", {
        get: function () {
            return this.getProdutosConsumidos.length + this.getServicosConsumidos.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getGenero", {
        get: function () {
            return this.genero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTotalGasto", {
        get: function () {
            var total = 0;
            this.produtosConsumidos.forEach(function (produto) {
                total += produto.valor;
            });
            this.servicosConsumidos.forEach(function (servico) {
                total += servico.valor;
            });
            return total;
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}());
exports.default = Cliente;
