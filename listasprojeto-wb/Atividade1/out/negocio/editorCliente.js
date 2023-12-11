"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var EditorCliente = /** @class */ (function () {
    function EditorCliente() {
        this.entrada = new entrada_1.default();
    }
    EditorCliente.prototype.editar = function (cliente) {
        console.log("\nIn\u00EDcio da edi\u00E7\u00E3o do cliente");
        var nome = this.entrada.receberTexto("Por favor informe o nome do cliente: ");
        cliente.nome = nome;
        console.log("\nEdi\u00E7\u00E3o conclu\u00EDda :)\n");
    };
    return EditorCliente;
}());
exports.default = EditorCliente;
