import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { getLogs,signOut } from '../actions/logs';
import { addLog } from '../actions/logs';
const {DateTime} = require('luxon')


class Logs extends Component {
    constructor(props){
        super(props)

        this.state={
            name: '',
            service: '',
            reference: '',
            submit: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event){
        event.preventDefault()
        
        let log = {
            name: this.state.name,
            service: this.state.service,
            reference: this.state.reference
        }

        this.props.dispatch(addLog(log))
        .then(() => {
            this.setState({submit:true})
        })
    }

  render() {
    return (
      <Fragment>
        {this.state.submit ? 
        <h3>Thanks!</h3>
        :
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Name</label>
                <input type="text" name="name" className="form-control" id="formGroupExampleInput" placeholder="Name" onChange={this.handleChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Service</label>
                <input type="text" name="service" className="form-control" id="formGroupExampleInput2" placeholder="Service" onChange={this.handleChange} required/>
                <small id="passwordHelpBlock" className="form-text text-muted">
                    E.g Family Start, Budgeting, Toki Rau...
                </small>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Reference</label>
                <input type="text" name="reference" className="form-control" id="formGroupExampleInput2" placeholder="Who referred you?" onChange={this.handleChange} required/>
                <small id="passwordHelpBlock" className="form-text text-muted">
                    E.g Self, Government agencies, Iwi providers...
                </small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        }
        <Link to='/' className="btn btn-primary">Home</Link>
      </Fragment>
    )
  }
}


function mapStateToProps(state){
  return {
      logs: state.logs
  }
}


export default connect(mapStateToProps)(Logs)
