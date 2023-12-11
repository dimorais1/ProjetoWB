// listar
async function listarClientes(): Promise<any[]> {
  try {
    const response = await fetch('http://localhost:32832/clientes');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao obter clientes:', error);
    throw error;
  }
}

// cadastrar
async function cadastrarCliente(cliente: any): Promise<void> {
  try {
    const response = await fetch('http://localhost:32832/cliente/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente),
    });

    if (response.ok) {
      console.log('Cliente cadastrado com sucesso!');
    } else {
      console.error('Erro ao cadastrar cliente:', response.statusText);
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error);
    throw error;
  }
}

// excluir
async function excluirCliente(id: string): Promise<void> {
  try {
    const response = await fetch(`http://localhost:32832/cliente/excluir`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id": id
      }),
    });

    console.log(JSON.stringify(id));

    if (response.ok) {
      console.log('Cliente excluído com sucesso!');
    } else {
      console.error('Erro ao excluir cliente:', response.statusText);
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Erro ao excluir cliente:', error);
    throw error;
  }
}

// atualizar
async function atualizarCliente(id: string, cliente: any): Promise<void> {
  try {
    const response = await fetch(`http://localhost:32832/cliente/atualizar`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente),
    });

    if (response.ok) {
      console.log('Cliente atualizado com sucesso!');
    } else {
      console.error('Erro ao atualizar cliente:', response.statusText);
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Erro ao atualizar cliente:', error);
    throw error;
  }
}

// listar
async function listarServicos(): Promise<any[]> {
  try {
    const response = await fetch('http://localhost:32832/servicos');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao obter serviços:', error);
    throw error;
  }
}

// cadastrar
async function cadastrarServico(servico: any): Promise<void> {
  try {
    const response = await fetch('http://localhost:32832/servico/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(servico),
    });

    if (response.ok) {
      console.log('Serviço cadastrado com sucesso!');
    } else {
      console.error('Erro ao cadastrar serviço:', response.statusText);
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Erro ao cadastrar serviço:', error);
    throw error;
  }
}

// excluir
async function excluirServico(id: string): Promise<void> {
  try {
    const response = await fetch(`http://localhost:32832/servico/excluir`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id": id
      }),
    });

    console.log(JSON.stringify(id));

    if (response.ok) {
      console.log('Servico excluído com sucesso!');
    } else {
      console.error('Erro ao excluir serviço:', response.statusText);
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Erro ao excluir serviço:', error);
    throw error;
  }
}

// atualizar
async function atualizarServico(id: string, servico: any): Promise<void> {
  try {
    const response = await fetch(`http://localhost:32832/servico/atualizar`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(servico),
    });

    if (response.ok) {
      console.log('Serviço atualizado com sucesso!');
    } else {
      console.error('Erro ao atualizar serviço:', response.statusText);
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Erro ao atualizar serviço:', error);
    throw error;
  }
}


///////////////////////////////////////////////

// listar
async function listarProdutos(): Promise<any[]> {
  try {
    const response = await fetch('http://localhost:32832/produtos');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao obter produtos:', error);
    throw error;
  }
}

// cadastrar
async function cadastrarProduto(produto: any): Promise<void> {
  try {
    const response = await fetch('http://localhost:32832/produto/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    });

    if (response.ok) {
      console.log('Produto cadastrado com sucesso!');
    } else {
      console.error('Erro ao cadastrar produto:', response.statusText);
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    throw error;
  }
}

// excluir
async function excluirProduto(id: string): Promise<void> {
  try {
    const response = await fetch(`http://localhost:32832/produto/excluir`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id": id
      }),
    });

    console.log(JSON.stringify(id));

    if (response.ok) {
      console.log('Produto excluído com sucesso!');
    } else {
      console.error('Erro ao excluir produto:', response.statusText);
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Erro ao excluir produto:', error);
    throw error;
  }
}

// atualizar
async function atualizarProduto(id: string, produto: any): Promise<void> {
  try {
    const response = await fetch(`http://localhost:32832/produto/atualizar`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    });

    if (response.ok) {
      console.log('Produto atualizado com sucesso!');
    } else {
      console.error('Erro ao atualizar produto:', response.statusText);
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    throw error;
  }
}

export { listarClientes, cadastrarCliente, excluirCliente, atualizarCliente, listarServicos, cadastrarServico, excluirServico, atualizarServico, listarProdutos, cadastrarProduto, excluirProduto, atualizarProduto };