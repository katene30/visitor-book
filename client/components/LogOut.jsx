import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { getLogsByOwner,signOut } from '../actions/logs';
import Thead from './Thead'
import { isAuthenticated } from '../utils/auth';
const {DateTime} = require('luxon')


class Logs extends Component {
    constructor(props){
        super(props)

        this.state={
            pendingLogs : [],
            log: [],
            confirm: false
        }
        this.getLogs = this.getLogs.bind(this)
        this.signOut = this.signOut.bind(this)
        this.confirm = this.confirm.bind(this)
        this.inArray = this.inArray.bind(this)
    }

    componentDidMount(){
        if(isAuthenticated()){
            this.getLogs()
        }
    }

    getLogs(){
        this.props.dispatch(getLogsByOwner(this.props.auth.user.username))
        .then(() => {
            const pendingLogs = this.props.logs.filter(log => {
                return !log.time_out
            })
            this.setState({pendingLogs:pendingLogs.reverse()})
        })
    }

    inArray(log,logArr=this.state.log){
        for(i in logArr){
            if (logArr[i].id === log.id){
                log.active = false 
                logArr.splice(i,1)
                return true;
            }
        }
        return false;
    }

    signOut(log){
        let logArr = this.state.log
        if(!this.inArray(log,logArr)){
            log.active = true
            logArr.push(log)
            this.setState({log:logArr})
        }

        if(this.state.log.length > 0){
            this.setState({confirm:true})
        } else{
            this.setState({confirm:false})
        }

    }

    confirm(log){
        if(isAuthenticated()){
            for(i in log){
                this.props.dispatch(signOut(log[i]))
            }
                this.getLogs()
                this.setState({confirm:false})
        }
    }

  render() {
    return (
      <Fragment>
        {!this.props.isAuthenticated && 
            <div class="m-5 alert alert-danger" role="alert">
                You are required to log in.
            </div>
        }
        <table className="table table-hover table-fixed">
          <Thead />
          <tbody>
            {this.state.pendingLogs.map((log,i) => {
            return(
                <tr key={i} className={log.active ? 'table-success' : undefined} onClick={() => this.signOut(log)}>
                  <td>{log.id}</td>
                  <td>{log.time_in ? DateTime.fromISO(log.time_in,{locale: "en-GB"}).toLocaleString() : 'invalid'}</td>
                  <td>{log.name}</td>
                  <td>{log.service}</td>
                  <td>{log.reference}</td>
                  <td>{log.time_in ? DateTime.fromISO(log.time_in).toLocaleString(DateTime.TIME_WITH_SECONDS) : 'invalid'}</td>
                  <td>Pending</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className='row fixed-bottom bg-dark align-items-center'>
            {this.state.confirm &&
            <Fragment>
                <div className='col text-light mx-5 px-5'>
                    <h3>{this.state.log.name}</h3>
                </div>
                <div className='col text-left'>
                    <button className='btn btn-light' onClick={() => this.confirm(this.state.log)}>Sign Out</button>
                </div>
            </Fragment>
            }
            <div className='col'>
                <Link to='/' className="btn btn-primary btn-lg my-2 ml-2">Home</Link>
            </div>
        </div>
      </Fragment>
    )
  }
}


function mapStateToProps(state){
  return {
      logs: state.logs,
      isAuthenticated: state.auth.isAuthenticated,
      auth: state.auth
  }
}


export default connect(mapStateToProps)(Logs)
