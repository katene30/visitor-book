import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class MainMenu extends Component {
  render() {
    return (
      <Fragment>
          <div className="jumbotron mt-5 pt-5 pb-5">
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
            <div className="d-flex justify-content-end">
              <Link to='/logs' className="btn btn-link">Logs</Link>
            </div>
        </div>

      </Fragment>
    )
  }
}
