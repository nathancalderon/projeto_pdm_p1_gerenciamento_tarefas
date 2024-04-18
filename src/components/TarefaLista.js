import React, { Component } from 'react'

export default class TarefaLista extends Component{
    render(){
        return(
            <div className='bg-warning w-100 rounded-3 d-flex flex-column align-items-center py-3'>
                {this.props.dados.map((tarefa, indice) => {
                    return(
                        <div className='bg-light border border-black p-3 my-2 rounded-4 col-sm-12 col-lg-8 d-flex justify-content-center' key={indice}>
                            {tarefa}
                        </div>
                    )
                })}
            </div>
        )
    }
}