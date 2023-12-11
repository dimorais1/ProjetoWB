/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    render() {
        return (
            <div className="center-align">
            <table className="striped centered responsive-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Telefone</th>
                  <th>Gênero</th>
                </tr>
              </thead>
    
              <tbody>
                <tr>
                  <td>Yago</td>
                  <td>123.456.789-00</td>
                  <td>12 987654321</td>
                  <td>Masculino</td>
                </tr>
                <tr>
                  <td>Camila</td>
                  <td>123.456.789-00</td>
                  <td>12 987654321</td>
                  <td>Femenino</td>
                </tr>
                <tr>
                  <td>João</td>
                  <td>123.456.789-00</td>
                  <td>12 987654321</td>
                  <td>Masculino</td>
                </tr>
              </tbody>
            </table>
          </div>
        )
    }
}