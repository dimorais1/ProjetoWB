"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var listagem_1 = __importDefault(require("./listagem"));
var ListagemProdutos = /** @class */ (function (_super) {
    __extends(ListagemProdutos, _super);
    function ListagemProdutos(produtos, clientes) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.clientes = clientes;
        return _this;
    }
    ListagemProdutos.prototype.listar = function () {
        console.log("\nLista de todos os produtos:");
        this.produtos.forEach(function (produto) {
            console.log("Nome do produto: ".concat(produto.nome));
        });
        console.log("\n");
    };
    ListagemProdutos.prototype.ordenarPorMaisUtilizados = function (produtos) {
        var frequencia = {};
        produtos.forEach(function (produto) {
            var nome = produto.nome;
            frequencia[nome] = (frequencia[nome] || 0) + 1;
        });
        var elementosOrdenados = Object.keys(frequencia).sort(function (a, b) { return frequencia[b] - frequencia[a]; });
        var produtosMaisUtilizados = elementosOrdenados.slice(0, 5);
        return produtosMaisUtilizados;
    };
    ListagemProdutos.prototype.concatenarProdutos = function () {
        var produtos = [];
        this.clientes.forEach(function (cliente) {
            cliente.getProdutosConsumidos.forEach(function (produto) {
                produtos.push(produto);
            });
        });
        return produtos;
    };
    ListagemProdutos.prototype.concatenarProdutosPorGenero = function (clientes) {
        var produtos = [];
        clientes.forEach(function (cliente) {
            cliente.getProdutosConsumidos.forEach(function (produto) {
                produtos.push(produto);
            });
        });
        return produtos;
    };
    ListagemProdutos.prototype.listarMaisUtilizados = function () {
        console.log("\nLista dos 5 produtos mais utilizados:");
        var nomeprodutos = this.ordenarPorMaisUtilizados(this.concatenarProdutos());
        for (var index = 0; index < nomeprodutos.length; index++) {
            console.log("".concat(index + 1, "\u00B0 servi\u00E7o: ").concat(nomeprodutos[index]));
        }
        console.log("\n");
    };
    ListagemProdutos.prototype.listarMaisUtilizadosPorGenero = function () {
        console.log("\nLista dos 5 produtos mais utilizados por genero:");
        var clientesMasculinos = [];
        var clientesFemininos = [];
        this.clientes.forEach(function (cliente) {
            switch (cliente.getGenero) {
                case "M":
                    clientesMasculinos.push(cliente);
                case "F":
                    clientesFemininos.push(cliente);
            }
        });
        var nomeprodutosH = this.ordenarPorMaisUtilizados(this.concatenarProdutosPorGenero(clientesMasculinos));
        var nomeprodutosM = this.ordenarPorMaisUtilizados(this.concatenarProdutosPorGenero(clientesFemininos));
        console.log("- MASCULINO");
        for (var index = 0; index < nomeprodutosH.length; index++) {
            console.log("".concat(index + 1, "\u00B0 servi\u00E7o: ").concat(nomeprodutosH[index]));
        }
        console.log("- FEMININO");
        for (var index = 0; index < nomeprodutosM.length; index++) {
            console.log("".concat(index + 1, "\u00B0 servi\u00E7o: ").concat(nomeprodutosM[index]));
        }
        console.log("\n");
    };
    return ListagemProdutos;
}(listagem_1.default));
exports.default = ListagemProdutos;
