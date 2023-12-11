import { Component } from "react";

type props = {
  tema: string;
};

export default class listaServico extends Component<props> {
  render() {
    return (
      <div className="center-align">
        <table className="striped centered responsive-table">
          <thead>
            <tr>
              <th>Serviço</th>
              <th>Preço</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Corte Cabelo</td>
              <td>R$ 20,00</td>
            </tr>
            <tr>
              <td>Barba</td>
              <td>R$ 10,00</td>
            </tr>
            <tr>
              <td>Corte de Cabelo + Barba</td>
              <td>R$ 25,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
