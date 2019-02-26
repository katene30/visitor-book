import React, { Component } from 'react'
import {connect} from 'react-redux'

import {getTodos} from '../actions' 
    
class App extends Component {


    componentDidMount(){
        this.props.dispatch(getTodos())
    }

    render() {
        return (
            <div>
                <h1>Welcome to todo list</h1>
                <ul>
                    {this.props.todos.map(todo => {
                        return(
                            <li>{todo.task}</li>
                        )
                    })}
                </ul>
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