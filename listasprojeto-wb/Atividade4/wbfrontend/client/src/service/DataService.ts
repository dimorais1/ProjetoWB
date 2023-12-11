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

export { listarClientes, cadastrarCliente, excluirCliente, atualizarCliente };