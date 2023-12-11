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
var ListagemClientes = /** @class */ (function (_super) {
    __extends(ListagemClientes, _super);
    function ListagemClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemClientes.prototype.printarCliente = function (cliente) {
        console.log("Nome: " + cliente.nome);
        console.log("Nome social: " + cliente.nomeSocial);
        console.log("CPF: " + cliente.getCpf.getValor);
        console.log("--------------------------------------");
    };
    ListagemClientes.prototype.listar = function () {
        var _this = this;
        console.log("\nLista de todos os clientes:");
        this.clientes.forEach(function (cliente) {
            _this.printarCliente(cliente);
        });
        console.log("\n");
    };
    ListagemClientes.prototype.listarTopConsumo = function () {
        var _this = this;
        console.log("\nLista dos 10 clientes que consumiram mais produtos ou servi\u00E7os:");
        var topClientes = [];
        this.clientes.forEach(function (cliente) {
            if (topClientes.length < 10) {
                topClientes.push(cliente);
            }
            else {
                var menorConsumoIndex = 0;
                var menorConsumo = _this.calcularComprimentoTotal(topClientes[0]);
                for (var i = 1; i < topClientes.length; i++) {
                    var consumoAtual = _this.calcularComprimentoTotal(topClientes[i]);
                    if (consumoAtual < menorConsumo) {
                        menorConsumo = consumoAtual;
                        menorConsumoIndex = i;
                    }
                }
                var consumoCliente = _this.calcularComprimentoTotal(cliente);
                if (consumoCliente > menorConsumo) {
                    topClientes[menorConsumoIndex] = cliente;
                }
            }
        });
        topClientes.forEach(function (cliente) {
            _this.printarCliente(cliente);
        });
        console.log("\n");
    };
    ListagemClientes.prototype.calcularComprimentoTotal = function (cliente) {
        var produtos = cliente.getProdutosConsumidos;
        var servicos = cliente.getServicosConsumidos;
        return produtos.length + servicos.length;
    };
    ListagemClientes.prototype.listarPorGenero = function () {
        var _this = this;
        console.log("\nLista de todos os clientes por genero:");
        var clientesMasculinos = [];
        var clientesFemininos = [];
        this.clientes.forEach(function (cliente) {
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
            console.log("\nClientes femininos");
            clientesFemininos.forEach(function (cliente) {
                _this.printarCliente(cliente);
            });
        }
        if (clientesMasculinos.length > 0) {
            console.log("\nClientes masculinos");
            clientesMasculinos.forEach(function (cliente) {
                _this.printarCliente(cliente);
            });
        }
        console.log("\n");
    };
    ListagemClientes.prototype.listarQuemMenosConsumiu = function () {
        console.log("\nLista dos 10 clientes que menos consumiram produtos ou servi\u00E7os:");
        var clientesOrdenados = this.clientes.sort(function (a, b) { return a.getQtdServicosEProdutos - b.getQtdServicosEProdutos; });
        var clientesMenosConsumiram = clientesOrdenados.slice(0, 10);
        var contador = 1;
        clientesMenosConsumiram.forEach(function (cliente) {
            console.log("".concat(contador, "\u00B0 servi\u00E7o: ").concat(cliente.nome));
            contador += 1;
        });
    };
    ListagemClientes.prototype.listarQuemMaisConsumiuValor = function () {
        console.log("\nLista dos 5 clientes que mais consumiram produtos ou servi\u00E7os em valor:");
        var clientesOrdenados = this.clientes.sort(function (a, b) { return b.getTotalGasto - a.getTotalGasto; });
        var clientesMaisConsumiram = clientesOrdenados.slice(0, 5);
        var contador = 1;
        clientesMaisConsumiram.forEach(function (cliente) {
            console.log("".concat(contador, "\u00B0 cleinte: ").concat(cliente.nome));
            contador += 1;
        });
    };
    return ListagemClientes;
}(listagem_1.default));
exports.default = ListagemClientes;
