import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {loginUser, loginError} from '../actions/login'
import { isAuthenticated } from '../utils/auth';

class AccountLogIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      hash: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  componentDidMount() {
    if(!isAuthenticated()){
      this.props.dispatch(loginError(''))
    }
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    let {username, hash} = this.state
    this.props.dispatch(loginUser({username, hash}))
  }
  render() {
    const {auth} = this.props
    return (
      <Fragment>
        <div className="vertical-center">
            {auth.errorMessage && <span className="m-5 alert alert-danger">{auth.errorMessage}</span>}
          <form className="form-signin rounded bg-light p-3" onSubmit={this.submit}>
            <h1 className="h3 mb-3 font-weight-normal text-center">Log In</h1>
            <hr />
            <label htmlFor="inputEmail" className="sr-only">Username</label>
              <input required className="form-control" placeholder="Username" type="text" name="username" onChange={this.updateDetails}/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
              <input required className="form-control" placeholder="Password" type="password" name="hash" onChange={this.updateDetails}/>
            <input className="btn btn-lg btn-primary btn-block" value='Login' type="submit" />
          </form>
        </div>

        <div className="row fixed-bottom bg-dark align-items-center">
          <Link to='/' className="btn btn-primary btn-lg my-2 ml-4">Home</Link>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(AccountLogIn)