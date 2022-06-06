import React, { Component } from 'react'
import pageHeader from '../template/pageHeader'

export default class Todo extends Component {
    render() {
        return (
            <div>
                <pageHeader name="Tarefas" small="Cadastro"></pageHeader>
            </div>
        )
    }
}