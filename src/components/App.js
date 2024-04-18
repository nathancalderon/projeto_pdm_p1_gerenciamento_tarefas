import React, { Component } from 'react'
import TarefaEntrada from './TarefaEntrada'
import TarefaLista from './TarefaLista'
export default class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            lista: ['Preparar aula de programação', 'Fazer feira', 'Preparar marmitas']
        }
    }

    render() {
        return(
            <div className="container mt-5 col-sm-12 col-md-6" >
                <div className="row">
                        <TarefaEntrada/>
                </div>
                <div className="row">
                        <TarefaLista dados={this.state.lista}/>
                </div>  
            </div>
        )
    }
}