import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default class Todo extends Component {
    handleAdd(){
       console.log(this) 

    }
    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm handleAdd={this.handleAdd}/>
                <TodoList/>

            </div>
        )
    }
}