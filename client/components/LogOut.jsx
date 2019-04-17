import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { getLogs } from '../actions/logs';
const {DateTime} = require('luxon')


class Logs extends Component {
    constructor(props){
        super(props)

        this.state={
            pendingLogs : [],
            
        }
    }

    componentDidMount(){
        this.props.dispatch(getLogs())
        .then(() => {
            let pendingLogs = this.props.logs.filter(log => {
                return !log.time_out
            })
            this.setState({pendingLogs})
        })
    }

    signOut(){
        console.log('hit')
    }

  render() {
    return (
      <Fragment>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Service</th>
              <th scope="col">Name</th>
              <th scope="col">Reference</th>
              <th scope="col">Time In</th>
              <th scope="col">Time Out</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pendingLogs.reverse().map((log,i) => {
              return(
                <tr key={i} onClick={this.signOut}>
                  <th scope="row">{log.id}</th>
                  <td>{log.time_in ? DateTime.fromISO(log.time_in).toLocaleString() : 'invalid'}</td>
                  <td>{log.service}</td>
                  <td>{log.name}</td>
                  <td>{log.reference}</td>
                  <td>{log.time_in ? DateTime.fromISO(log.time_in).toLocaleString(DateTime.TIME_WITH_SECONDS) : 'invalid'}</td>
                  <td>Pending</td>
                </tr>
              )
            })}
          </tbody>
        </table>
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
