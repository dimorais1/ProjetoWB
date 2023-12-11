import { Component } from "react";

type props = {
  tema: string;
};

export default class FormularioCadastroCliente extends Component<props> {
  render() {
    let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`;
    return (
      <div className="container principal">
        <form className="col s12">
          <div className="input-field col s6">
            <input id="full_name" type="text" className="validate" />
            <label htmlFor="full_name">Nome</label>
          </div>
          <div className="input-field col s6">
            <input id="social_name" type="text" className="validate" />
            <label htmlFor="social_name">Nome Social</label>
          </div>
          <div className="input-field col s6">
            <input id="telefone" type="text" className="validate" />
            <label htmlFor="telefone">Telefone</label>
          </div>
          <div className="input-field col s6">
            <input id="gender" type="text" className="validate" />
            <label htmlFor="gender">Gênero</label>
          </div>
          <div className="input-field col s6">
            <input id="cpf" type="text" className="validate" />
            <label htmlFor="cpf">CPF</label>
          </div>
          <div className="input-field col s6">
            <input id="rg" type="text" className="validate" />
            <label htmlFor="rg">RG</label>
          </div>
          <div className="col s12 center">
            <button className={estiloBotao} type="submit" name="action">
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
