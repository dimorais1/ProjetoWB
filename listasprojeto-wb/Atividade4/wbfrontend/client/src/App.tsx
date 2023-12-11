import React, { useEffect, useState } from "react";
import {
  listarClientes,
  cadastrarCliente,
  excluirCliente,
  atualizarCliente,
} from "./service/DataService";

function ClienteComponent() {
  const [clientes, setClientes] = useState<any[]>([]);
  const [novoCliente, setNovoCliente] = useState<any>({});
  const [clienteSelecionado, setClienteSelecionado] = useState<any | null>(
    null
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await listarClientes();
        setClientes(data);
      } catch (error) {
        console.error("Erro ao obter clientes:", error);
      }
    }

    fetchData();
  }, []);

  async function handleCadastrarCliente() {
    try {
      await cadastrarCliente(novoCliente);
      setNovoCliente({});
      const data = await listarClientes();
      setClientes(data);
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
    }
  }

  async function handleExcluirCliente(id: string) {
    try {
      await excluirCliente(id);
      const data = await listarClientes();
      setClientes(data);
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
    }
  }

  async function handleAtualizarCliente(id: string, cliente: any) {
    try {
      await atualizarCliente(id, cliente);
      const data = await listarClientes();
      setClientes(data);
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
    }
  }

  function handleSelecionarCliente(cliente: any) {
    setClienteSelecionado(cliente);
  }

  return (
    <div className="container">
      <h2 className="subtitulo">Novo Cliente</h2>
      <input
        type="text"
        placeholder="Nome"
        value={novoCliente.nome || ""}
        onChange={(e) =>
          setNovoCliente({ ...novoCliente, nome: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Email"
        value={novoCliente.email || ""}
        onChange={(e) =>
          setNovoCliente({ ...novoCliente, email: e.target.value })
        }
      />
      <button className="botao-cadastrar" onClick={handleCadastrarCliente}>
        Cadastrar
      </button>

      {clienteSelecionado && (
        <div className="editar-cliente">
          <h2 className="subtitulo">Editar Cliente</h2>
          <input
            type="text"
            placeholder="Nome"
            value={clienteSelecionado.nome || ""}
            onChange={(e) =>
              setClienteSelecionado({
                ...clienteSelecionado,
                nome: e.target.value,
              })
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={clienteSelecionado.email || ""}
            onChange={(e) =>
              setClienteSelecionado({
                ...clienteSelecionado,
                email: e.target.value,
              })
            }
          />
          <button
            className="botao-atualizar"
            onClick={() =>
              handleAtualizarCliente(clienteSelecionado.id, clienteSelecionado)
            }
          >
            Atualizar
          </button>
        </div>
      )}

      <h1 className="titulo">Lista de Clientes</h1>
      {clientes.map((cliente) => (
        <div
          className="cliente-card"
          key={cliente.id}
          onClick={() => handleSelecionarCliente(cliente)}
        >
          <p>Nome: {cliente.nome}</p>
          <p>Email: {cliente.email}</p>
          <button
            className="botao-excluir"
            onClick={() => handleExcluirCliente(cliente.id)}
          >
            Excluir
          </button>
        </div>
      ))}

      <style>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .titulo {
          color: #333;
          font-size: 24px;
          margin-bottom: 20px;
        }

        .cliente-card {
          background-color: #f5f5f5;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 10px;
          margin-bottom: 10px;
          cursor: pointer;
          height: 100px; /* Altura fixa adicionada */
          width: 650px;
        }

        .cliente-card:hover {
          background-color: #e0e0e0;
        }

        .cliente-card p {
          margin: 5px 0;
        }

        .botao-excluir {
          background-color: #f44336;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 5px 10px;
          margin-top: 10px;
          cursor: pointer;
        }

        .botao-excluir:hover {
          background-color: #d32f2f;
        }

        .subtitulo {
          color: #666;
          font-size: 18px;
          margin-top: 20px;
        }

        input {
          margin-top: 5px;
          padding: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
          width: 200px;
        }

        .botao-cadastrar {
          background-color: #4caf50;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 5px 10px;
          margin-top: 10px;
          cursor: pointer;
        }

        .botao-cadastrar:hover {
          background-color: #45a049;
        }

        .editar-cliente {
          margin-top: 20px;
        }

        .botao-atualizar {
          background-color: #2196f3;
          color: #fff;
          border: none;
          border-radius: 4px;
          padding: 5px 10px;
          margin-top: 10px;
          cursor: pointer;
        }

        .botao-atualizar:hover {
          background-color: #1976d2;
        }
      `}</style>
    </div>
  );
}

export default ClienteComponent;
