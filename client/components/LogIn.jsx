import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { addLog } from '../actions/logs';
import { isAuthenticated } from '../utils/auth';


class Logs extends Component {
    constructor(props){
        super(props)

        this.state={
            name: '',
            service: '',
            reference: '',
            submit: false,
            navigate: false
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

        if(isAuthenticated()){
            this.props.dispatch(addLog(log))
            .then(() => {
                this.setState({submit:true});
                setTimeout(() => {
                    this.setState({navigate:true})
                }, 5000);
            })
        }
    }

  render() {
    if(this.state.navigate){
          return <Redirect to="/" />
        }
    return (
      <Fragment>
        {!this.props.isAuthenticated && 
        <div class="m-5 alert alert-danger" role="alert">
            You are required to log in.
        </div>
        }
        {this.state.submit ? 
        <Fragment>
            <div className="jumbotron mt-5">
                <img src="/images/logo.png" className="mx-auto d-block" alt="logo"/>
                <h3 className="text-center">Hei kona</h3>
                <hr className="my-4"/>
                <p className="lead text-center">Please sign out before you leave...</p>
            </div>
        </Fragment>
        :
        <form className="m-5" onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Name</label>
                <input type="text" name="name" className="form-control" id="formGroupExampleInput" onChange={this.handleChange} required/>
            </div>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Service</label>
                <input type="text" name="service" className="form-control" id="formGroupExampleInput2" onChange={this.handleChange} required/>
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
        <div className="row fixed-bottom bg-dark align-items-center">
          <Link to='/' className="btn btn-primary btn-lg my-2 ml-4">Home</Link>
        </div>
      </Fragment>
    )
  }
}


function mapStateToProps(state){
  return {
      logs: state.logs,
      isAuthenticated: state.auth.isAuthenticated
  }
}


export default connect(mapStateToProps)(Logs)
