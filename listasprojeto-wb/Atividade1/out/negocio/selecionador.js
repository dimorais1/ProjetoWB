"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = __importDefault(require("../modelo/cliente"));
var cpf_1 = __importDefault(require("../modelo/cpf"));
var Selecionador = /** @class */ (function () {
    function Selecionador(clientes) {
        this.clientes = clientes;
    }
    Selecionador.prototype.selecionar = function (numeroCpf) {
        var cpf = new cpf_1.default('', new Date());
        var clienteAlvo = new cliente_1.default('', '', '', cpf);
        this.clientes.forEach(function (cliente) {
            if (numeroCpf === cliente.getCpf.getValor) {
                clienteAlvo = cliente;
            }
        });
        return clienteAlvo;
    };
    return Selecionador;
}());
exports.default = Selecionador;
