import React, { Component } from 'react'

export default class TarefaEntrada extends Component {
    render() {
      return (
          <div>
            <form onSubmit={this.props.funcaoBotao} className="row">
                <input  value={this.props.campoTarefa} type="text" className="form-control p-3 rounded-3 mb-2" name="tarefa" placeholder="Digite a descrição de uma nova tarefa" onChange={this.props.funcaoTarefa} />
                <input type="submit" value="OK" className="btn btn-primary p-2 mb-4"/>
            </form>
          </div>
      )
    }
  }