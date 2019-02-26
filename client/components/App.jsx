import React, { Component } from 'react'
import {connect} from 'react-redux'

import {getTodos} from '../actions' 
import TodoList from './TodoList';
    
class App extends Component {


    componentDidMount(){
        this.props.dispatch(getTodos())
    }

    render() {
        return (
            <div className="container">
                <h1>Welcome to todo list</h1>
                <TodoList />
            </div>
    )
  }
}

function mapStateToProps(state){
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps)(App)