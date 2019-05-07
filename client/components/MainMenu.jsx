import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import {logoutUser} from '../actions/logout'
import { connect } from 'react-redux';

class MainMenu extends Component {

  constructor(props){
    super(props)

    this.state={}
    this.logOut = this.logOut.bind(this)
  }

  logOut(){
    this.props.dispatch(logoutUser())
  }

  render() {
    return (
      <Fragment>
          <div className="jumbotron mt-5 pt-5 pb-5">
          {this.props.isAuthenticated &&
            <div className="mt-n4 d-flex justify-content-between">
              <p className="lead">Admin, is logged in</p>
            </div>
          }
            <img src="/images/logo.png" className="mx-auto d-block" alt="logo"/>
            <h1 className="display-4 text-center">Nau mai, Haere mai</h1>
            <p className="lead text-center">We are your Iwi hauora provider</p>
            <hr className="my-4"/>
            <div className='row'>
                <div className='col d-flex justify-content-center'>
                    <Link to='/in' className="btn btn-primary btn-lg p-3">Sign In</Link>
                </div>
                <div className='col d-flex justify-content-center'>
                    <Link to='/out' className="btn btn-primary btn-lg p-3">Sign Out</Link>
                </div>
            </div>
            <div className="mt-5 d-flex justify-content-between">
            <div class="btn-group" role="group">
              <Link to='/login' className="btn btn-secondary">Log In</Link>
              <button type="button" className="btn btn-secondary" onClick={() => this.logOut()}>Log Out</button>
            </div>
              <Link to='/logs' className="btn btn-link">Logs</Link>
            </div>
        </div>

      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(MainMenu)