import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class MainMenu extends Component {
  render() {
    return (
      <Fragment>
          <div className="jumbotron mt-5">
            <img src="/images/logo.png" className="mx-auto d-block" alt="logo"/>
            <h1 className="display-4">Welcome to Te Hau Ora O Ngāpuhi</h1>
            <p className="lead">We are the Iwi hauora provider based in the main centre of Kaikohe</p>
            <hr className="my-4"/>
            <div className='row'>
                <div className='col d-flex justify-content-center'>
                    <Link to='/in' className="btn btn-primary btn-lg p-3">Signing In</Link>
                </div>
                <div className='col d-flex justify-content-center'>
                    <Link to='/out' className="btn btn-primary btn-lg p-3">Signing Out</Link>
                </div>
            </div>

            <div className='row'>
                <div className='col d-flex justify-content-center'>
                    <Link to='/logs' className="btn btn-primary btn-lg p-3">Logs</Link>
                </div>
                
            </div>
        </div>

      </Fragment>
    )
  }
}
