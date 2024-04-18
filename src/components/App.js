import React, { Component } from 'react'
import TarefaEntrada from './TarefaEntrada'
import TarefaLista from './TarefaLista'
export default class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            tarefa : '',
            lista: []
        }
    }
    
    digitarTarefa = (campoTarefa) =>{
        this.setState({[campoTarefa.target.name]:campoTarefa.target.value})
    }

    clicarBotao = (botao) => {
        botao.preventDefault()
        let copiaLista = [];
        for (let i = 0; i < this.state.lista.length; i++) {
            copiaLista[i] = this.state.lista[i];
        }
        copiaLista.push({
            'tarefa': this.state.tarefa
        })
        this.setState({lista: copiaLista})
        this.setState({tarefa:''})
    }

    render() {
        return(
            <div className="container mt-5 col-sm-12 col-md-6" >
                <div className="row">
                        <TarefaEntrada campoTarefa={this.state.tarefa} funcaoBotao={this.clicarBotao} funcaoTarefa={this.digitarTarefa}/>
                </div>
                <div className="row">
                        <TarefaLista dados={this.state.lista}/>
                </div>  
            </div>
        )
    }
}