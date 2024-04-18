import React, { Component } from 'react'

export default class TarefaEntrada extends Component {
  render() {
    return (
        <div>
          <form className="row">
              <input type="text" className="form-control p-3 rounded-3 mb-2" placeholder="Digite a descrição de uma nova tarefa"/>
              <input type="submit" value="OK" className="btn btn-primary p-2 mb-4"/>
          </form>
        </div>
    )
  }
}