import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { getLogs } from '../actions/logs';
const {DateTime} = require('luxon')


class Logs extends Component {

  componentDidMount(){
    this.props.dispatch(getLogs())

  }

  render() {
    return (
      <Fragment>
          <table className="table-striped table">
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
            <div className="anyClass">
                <tbody>
                  {this.props.logs.reverse().map((log,i) => {
                    return(
                      <tr key={i}>
                        <th scope="row">{log.id}</th>
                        <td>{log.time_in ? DateTime.fromISO(log.time_in).toLocaleString() : 'invalid'}</td>
                        <td>{log.service}</td>
                        <td>{log.name}</td>
                        <td>{log.reference}</td>
                        <td>{log.time_in ? DateTime.fromISO(log.time_in).toLocaleString(DateTime.TIME_WITH_SECONDS) : 'invalid'}</td>
                        <td>{log.time_out ? DateTime.fromISO(log.time_out).toLocaleString(DateTime.TIME_WITH_SECONDS) : 'invalid'}</td>
                      </tr>
                    )
                  })}
                </tbody>
            </div>
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
