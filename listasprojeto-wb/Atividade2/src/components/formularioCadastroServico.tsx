import { Component } from "react"

type props = {
    tema: string
}

export default class FormularioCadastroServico extends Component<props>{
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="container principal">
            <form className="col s12">
              <div className="input-field col s6">
                <input id="service_name" type="text" className="validate" />
                <label htmlFor="service_name">Nome do Serviço</label>
              </div>
              <div className="input-field col s6">
                <input id="service_price" type="text" className="validate" />
                <label htmlFor="service_price">Preço</label>
              </div>
              <div className="col s12 center">
                <button className={estiloBotao} type="submit" name="action">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        )
    }
}
