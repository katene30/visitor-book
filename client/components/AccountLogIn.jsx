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
        <form className="form box" onSubmit={this.submit}>
          <h1 className="title is-2">Login</h1>
          <hr />
          {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
          <label className="label is-large has-text-centered">Username
            <input required className="input has-text-centered is-large is-fullwidth" placeholder="User Name" type="text" name="username" onChange={this.updateDetails}/>
          </label>
          <label className="label is-large has-text-centered">Password
            <input required className="input has-text-centered is-large is-fullwidth" placeholder="password" type="password" name="hash" onChange={this.updateDetails}/>
          </label>
          <input className="button is-large is-fullwidth is-success" value='Login' type="submit" />
        </form>

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