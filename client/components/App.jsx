import React, { Component } from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router, Route } from 'react-router-dom'

import {getTodos} from '../actions' 

import TodoList from './TodoList';
import Header from './Header';
import Completed from './Completed';
import NewTodo from './newTodo';
    
class App extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }


    componentDidMount(){
        this.props.dispatch(getTodos())
    }

    render() {
        return (
            <div className="container">
                <Router>
                    <React.Fragment>
                    <h1>Welcome to todo list</h1>
                    <Header />
                    {this.props.showTodo && <NewTodo />}
                    <Route exact path = '/' component={TodoList} />
                    <Route path = '/completed' component={Completed} />
                    </React.Fragment>
                </Router>

            </div>
    )
  }
}

function mapStateToProps(state){
    return {
        todos: state.todos,
        showTodo: state.showTodo
    }
}
export default connect(mapStateToProps)(App)