import React, { Component } from 'react'
import { connect } from "react-redux";

import { addTodo,showForm } from "../actions";

class NewTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task:"",
            category:"",
            due:"",
            priority:null
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event){
        event.preventDefault()

        var todo = {
            task:this.state.task,
            category:this.state.category,
            due_at:this.state.due,
            priority:Number(this.state.priority),
            is_complete:false
        }

        this.props.dispatch(addTodo(todo))
        .then(({id}) => {
            this.props.dispatch(showForm(!this.props.showTodo))
        })
    }

  render() {
    return (
        <React.Fragment>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Task:</label>
                <input name="task" type="text" className="form-control" placeholder="Enter your task" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <label>Category:</label>
                <input name="category" type="text" className="form-control" placeholder="Category" onChange={this.handleChange}/>
                <small className="form-text text-muted">eg. Home, holiday, leisure...</small>
            </div>
            <div className="form-group">
                <label>Due:</label>
                <input type="date" name="due" className="form-control" placeholder="When is it due?" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <label>Priority:</label>
                <input name="priority" type="range" className="custom-range" min="1" max="5" step="1" onChange={this.handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <br/>
        </React.Fragment>
    )
  }
}

function mapStateToProps(state){
    return {
        showTodo: state.showTodo
    }
  } 

export default connect(mapStateToProps)(NewTodo);