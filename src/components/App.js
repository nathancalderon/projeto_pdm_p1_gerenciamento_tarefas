import React, { Component } from 'react'
import TarefaEntrada from './TarefaEntrada'

export default class App extends Component {
    render() {
        return(
            <div className="container mt-5 w-50" >
                <div className="row">
                    <TarefaEntrada/>
                </div>
                <div className="row">
                </div>  
            </div>
        )
    }
}