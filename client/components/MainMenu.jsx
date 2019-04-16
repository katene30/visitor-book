import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class MainMenu extends Component {
  render() {
    return (
      <Fragment>
          <div id='main-menu'>
          
            <div className='row'>
                <div className='col'>
                    <Link to='/in' className="btn btn-primary">IN</Link>
                </div>
                <div className='col'>
                    <Link to='/out' className="btn btn-primary">OUT</Link>
                </div>
            </div>
            <div className='row'>
                <div className='col main-menu'>
                    <Link to='/log' className="btn btn-primary">LOG</Link>
                </div>
            </div>
          </div>
      </Fragment>
    )
  }
}
