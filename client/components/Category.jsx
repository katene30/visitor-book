import React, { Component } from 'react'
import {connect} from 'react-redux'

import {getTodosByCategory} from '../actions'

class Category extends Component {

    componentDidMount(){
        var category = this.props.match.params.category
        this.props.dispatch(getTodosByCategory(category))
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.category != this.props.match.params.category){
            var category = this.props.match.params.category
            this.props.dispatch(getTodosByCategory(category))
        }
    }


  render() {
    return (
      <div>
        <div>
        <ul className="list-group">
            {this.props.todos.map(todo => {
                return(
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-sm">
                                {(() => {
                                    switch(todo.priority) {
                                    case 1:
                                        return <img src="/images/priority-1.png" alt="1" />;
                                    case 2:
                                        return <img src="/images/priority-2.png" alt="2" />;
                                    case 3:
                                        return <img src="/images/priority-3.png" alt="3" />;
                                    case 4:
                                        return <img src="/images/priority-4.png" alt="4" />;
                                    case 5:
                                        return <img src="/images/priority-5.png" alt="5" />;
                                    default:
                                        return <img src="/images/standard priority.png" alt="priority"/>;
                                    }
                                })()}
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    due: {todo.due_at}
                                </div>
                                    <div className="row">
                                        {todo.task}
                                    </div>
                                </div>
                            <div className="col-sm"><input type="checkbox" checked={todo.is_complete ? 'checked' : ''} onClick={() => this.props.dispatch(toggleCompleted(todo.id,!todo.is_complete,true))}/></div>
                        </div>
                    </li>
                )
            })}
        </ul>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps)(Category)