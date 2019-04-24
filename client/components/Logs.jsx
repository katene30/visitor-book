import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { getLogs } from '../actions/logs'
import Thead from './Thead'
const {DateTime} = require('luxon')


class Logs extends Component {

  componentDidMount(){
    this.props.dispatch(getLogs())

  }

  render() {
    return (
      <Fragment>
          <table className="table-striped table table-fixed">
          <Thead/>
                <tbody>
                  {this.props.logs.reverse().map((log,i) => {
                    return(
                      <tr key={i}>
                        <td>{log.id}</td>
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
          </table>
        <div className="row fixed-bottom bg-dark align-items-center">
          <Link to='/' className="btn btn-primary btn-lg my-2 ml-4">Home</Link>
        </div>
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
