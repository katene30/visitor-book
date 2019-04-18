import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { getLogs,signOut } from '../actions/logs';
const {DateTime} = require('luxon')


class Logs extends Component {
    constructor(props){
        super(props)

        this.state={
        }
    }

    componentDidMount(){
    }

  render() {
    return (
      <Fragment>
        <form>
            <div className="form-group">
                <label for="formGroupExampleInput">Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Name"/>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Service</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Service"/>
                <small id="passwordHelpBlock" className="form-text text-muted">
                    E.g Family Start, Budgeting, Toki Rau...
                </small>
            </div>
            <div className="form-group">
                <label for="formGroupExampleInput2">Reference</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Who referred you?"/>
                <small id="passwordHelpBlock" className="form-text text-muted">
                    E.g Self, Government agencies, Iwi providers...
                </small>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
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
