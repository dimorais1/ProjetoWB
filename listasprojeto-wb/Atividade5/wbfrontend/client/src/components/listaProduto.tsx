import React, { useEffect, useState } from "react";
import { atualizarProduto, cadastrarProduto, excluirProduto, listarProdutos } from "../service/DataService";

function ProdutoComponent() {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [novoProduto, setNovoProduto] = useState<any>({});
  const [produtoSelecionado, setProdutoSelecionado] = useState<any | null>(
    null
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await listarProdutos();
        setProdutos(data);
      } catch (error) {
        console.error("Erro ao obter produtos:", error);
      }
    }

    fetchData();
  }, []);

  async function handleCadastrarProduto() {
    try {
      await cadastrarProduto(novoProduto);
      setNovoProduto({});
      const data = await listarProdutos();
      setProdutos(data);
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
    }
  }

  async function handleExcluirProduto(id: string) {
    try {
      await excluirProduto(id);
      const data = await listarProdutos();
      setProdutos(data);
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  }

  async function handleAtualizarProduto(id: string, produto: any) {
    try {
      await atualizarProduto(id, produto);
      const data = await listarProdutos();
      setProdutos(data);
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
    }
  }

  function handleSelecionarProduto(produto: any) {
    setProdutoSelecionado(produto);
  }

  return (
    <div className="container">
      <div className="editar-produto">
      <h2 className="subtitulo">Novo Produto</h2>
      <input
        type="text"
        placeholder="Nome"
        value={novoProduto.nome || ""}
        onChange={(e) =>
          setNovoProduto({ ...novoProduto, nome: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Preço"
        value={novoProduto.valor || ""}
        onChange={(e) =>
          setNovoProduto({ ...novoProduto, valor: e.target.value })
        }
      />
      <button className="botao-cadastrar" onClick={handleCadastrarProduto}>
        Cadastrar
      </button>
      </div>

      {produtoSelecionado && (
        <div className="editar-produto">
          <h2 className="subtitulo">Editar Produto</h2>
          <input
            type="text"
            placeholder="Nome"
            value={produtoSelecionado.nome || ""}
            onChange={(e) =>
              setProdutoSelecionado({
                ...produtoSelecionado,
                nome: e.target.value,
              })
            }
          />
          <input
            type="Email"
            placeholder="Preço"
            value={produtoSelecionado.valor || ""}
            onChange={(e) =>
              setProdutoSelecionado({
                ...produtoSelecionado,
                valor: e.target.value,
              })
            }
          />
          <button
            className="botao-atualizar"
            onClick={() =>
              handleAtualizarProduto(produtoSelecionado.id, produtoSelecionado)
            }
          >
            Atualizar
          </button>
        </div>
      )}

      <h1 className="titulo">Lista de Produtos</h1>
      {produtos.map((produto) => (
        <div
          className="produto-card"
          key={produto.id}
          onClick={() => handleSelecionarProduto(produto)}
        >
          <p>Nome: {produto.nome}</p>
          <p>Preço: {produto.valor}</p>
          <button
            className="botao-excluir"
            onClick={() => handleExcluirProduto(produto.id)}
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

        .produto-card {
          background-color: #f5f5f5;
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 10px;
          margin-bottom: 10px;
          cursor: pointer;
          height: 120px; /* Altura fixa adicionada */
          width: 650px;
        }

        .produto-card:hover {
          background-color: #e0e0e0;
        }

        .produto-card p {
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

        .editar-produto {
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

export default ProdutoComponent;
