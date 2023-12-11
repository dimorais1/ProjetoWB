import { Component } from "react";

type props = {
  tema: string;
};

export default class FormularioCadastroProduto extends Component<props> {
  render() {
    let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`;
    return (
      <div className="container principal">
        <form className="col s12">
          <div className="input-field col s6">
            <input id="product_name" type="text" className="validate" />
            <label htmlFor="product_name">Nome do Produto</label>
          </div>
          <div className="input-field col s6">
            <input id="product_price" type="text" className="validate" />
            <label htmlFor="product_price">Preço</label>
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
