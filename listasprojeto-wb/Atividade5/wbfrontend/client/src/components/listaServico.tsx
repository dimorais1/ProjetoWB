import React, { useEffect, useState } from "react";
import { atualizarServico, cadastrarServico, excluirServico, listarServicos } from "../service/DataService";

function ServicoComponent() {
  const [servicos, setServicos] = useState<any[]>([]);
  const [novoServico, setNovoServico] = useState<any>({});
  const [servicoSelecionado, setServicoSelecionado] = useState<any | null>(
    null
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await listarServicos();
        setServicos(data);
      } catch (error) {
        console.error("Erro ao obter serviços:", error);
      }
    }

    fetchData();
  }, []);

  async function handleCadastrarServico() {
    try {
      await cadastrarServico(novoServico);
      setNovoServico({});
      const data = await listarServicos();
      setServicos(data);
    } catch (error) {
      console.error("Erro ao cadastrar serviço:", error);
    }
  }

  async function handleExcluirServico(id: string) {
    try {
      await excluirServico(id);
      const data = await listarServicos();
      setServicos(data);
    } catch (error) {
      console.error("Erro ao excluir serviço:", error);
    }
  }

  async function handleAtualizarServico(id: string, servico: any) {
    try {
      await atualizarServico(id, servico);
      const data = await listarServicos();
      setServicos(data);
    } catch (error) {
      console.error("Erro ao atualizar serviço:", error);
    }
  }

  function handleSelecionarServico(servico: any) {
    setServicoSelecionado(servico);
  }

  return (
    <div className="container">
      <div className="editar-servico">
      <h2 className="subtitulo">Novo Serviço</h2>
      <input
        type="text"
        placeholder="Nome"
        value={novoServico.nome || ""}
        onChange={(e) =>
          setNovoServico({ ...novoServico, nome: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Preço"
        value={novoServico.valor || ""}
        onChange={(e) =>
          setNovoServico({ ...novoServico, valor: e.target.value })
        }
      />
      <button className="botao-cadastrar" onClick={handleCadastrarServico}>
        Cadastrar
      </button>
      </div>

      {servicoSelecionado && (
        <div className="editar-servico">
          <h2 className="subtitulo">Editar Servico</h2>
          <input
            type="text"
            placeholder="Nome"
            value={servicoSelecionado.nome || ""}
            onChange={(e) =>
              setServicoSelecionado({
                ...servicoSelecionado,
                nome: e.target.value,
              })
            }
          />
          <input
            type="Email"
            placeholder="Preço"
            value={servicoSelecionado.valor || ""}
            onChange={(e) =>
              setServicoSelecionado({
                ...servicoSelecionado,
                valor: e.target.value,
              })
            }
          />
          <button
            className="botao-atualizar"
            onClick={() =>
              handleAtualizarServico(servicoSelecionado.id, servicoSelecionado)
            }
          >
            Atualizar
          </button>
        </div>
      )}

      <h1 className="titulo">Lista de Serviços</h1>
      {servicos.map((servico) => (
        <div
          className="servico-card"
          key={servico.id}
          onClick={() => handleSelecionarServico(servico)}
        >
          <p>Nome: {servico.nome}</p>
          <p>Preço: {servico.valor}</p>
          <button
            className="botao-excluir"
            onClick={() => handleExcluirServico(servico.id)}
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

        .servico-card {
          background-color: #f5f5f5;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 10px;
          margin-bottom: 10px;
          cursor: pointer;
          height: 120px; /* Altura fixa adicionada */
          width: 650px;
        }

        .servico-card:hover {
          background-color: #e0e0e0;
        }

        .servico-card p {
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

        .editar-servico {
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

export default ServicoComponent;
