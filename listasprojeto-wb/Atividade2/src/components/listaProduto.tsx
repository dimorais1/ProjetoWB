import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'

type props = {
    tema: string
}

export default class listaProduto extends Component<props> {
    render(){
        return (
            <div className="center-align">
            <table className="striped centered responsive-table">
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                </tr>
              </thead>
    
              <tbody>
                <tr>
                  <td>Shampoo para Calvo</td>
                  <td>R$ 20,00</td>
                </tr>
                <tr>
                  <td>Gel</td>
                  <td>R$ 8,00</td>
                </tr>
                <tr>
                  <td>Pomada para Barba</td>
                  <td>R$ 12,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    }
}