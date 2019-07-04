import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { addLog } from '../actions/logs';
import { isAuthenticated } from '../utils/auth';


class Logs extends Component {
    constructor(props){
        super(props)

        this.state={
            name: '',
            service: '',
            reference: '',
            submit: false,
            navigate: false,
            other: false,
            otherService: '',
            staff:false,
            boardMember:false,
            exception:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
        if(event.target.name == 'service' && event.target.value == 'other'){
            this.setState({other:true})
        }
        if(event.target.name == 'service' && event.target.value == 'Staff'){
            this.setState({exception:true})
        }else if(event.target.name == 'service' && event.target.value == 'Board Member'){
            this.setState({exception:true})
        } else{
            this.setState({exception:false})
        }

    }

    onSubmit(event){
        event.preventDefault()
        let log = {
            name: this.state.name,
            reference: this.state.reference,
            owner: this.props.auth.user.username
        }

        if(this.state.otherService.length > 0){
            log.service = this.state.otherService
        } else {
            log.service = this.state.service
        }
        
        if(this.state.exception){
            log.reference = 'n/a'
        }

        if(isAuthenticated()){
            this.props.dispatch(addLog(log))
            .then(() => {
                this.setState({submit:true});
                setTimeout(() => {
                    this.setState({navigate:true})
                }, 5000);
            })
        }
    }

  render() {
    if(this.state.navigate){
          return <Redirect to="/" />
        }
    return (
      <Fragment>
        {!this.props.isAuthenticated && 
        <div class="m-5 alert alert-danger" role="alert">
            You are required to log in.
        </div>
        }
        {this.state.submit ? 
        <Fragment>
            <div className="jumbotron mt-5">
                <img src="/images/logo.png" className="mx-auto d-block" alt="logo"/>
                <h3 className="text-center">Hei kona</h3>
                <hr className="my-4"/>
                <p className="lead text-center">Please sign out before you leave...</p>
            </div>
        </Fragment>
        :
        <form className="m-5" onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className="form-control form-control-lg" id="name" onChange={this.handleChange} required/>
            </div>

            <div className="form-group">
                <label htmlFor="service">Service</label>
                <select name="service" onChange={this.handleChange} className="custom-select custom-select-lg" defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled> -- select an option -- </option>
                    <option value="AA">AA</option>
                    <option value="Board Member">Board Member</option>
                    <option value="Breakaway Holiday Programme">Breakaway Holiday Programme</option>
                    <option value="Family Start">Family Start</option>
                    <option value="Flinchlock Release">Flinchlock Release</option>
                    <option value="Fono">Fono</option>
                    <option value="Manawa Ora">Manawa Ora</option>
                    <option value="Outreach">Outreach</option>
                    <option value="Pou Hakinakina">Pou Hakinakina</option>
                    <option value="Rheumatic Fever Prevention">Rheumatic Fever Prevention</option>
                    <option value="Road Safety">Road Safety</option>
                    <option value="Rongoa">Rongoa</option>
                    <option value="Sanson and Associates">Sanson and Associates</option>
                    <option value="Staff">Staff</option>
                    <option value="Taake Ngakau">Taake Ngakau</option>
                    <option value="Toki Rau - Smoking Cessation">Toki Rau - Smoking Cessation</option>
                    <option value="Whanau Ora">Whanau Ora</option>
                    <option value="other">Other</option>
                </select>

                {this.state.other && 
                    <input type="text" name="otherService" className="form-control form-control-lg mt-3" id="otherService" onChange={this.handleChange} required/>
                }


                <small className="form-text text-muted">
                        E.g Family Start, Budgeting, Toki Rau...
                </small>
            </div>
            {!this.state.exception && 
            <div className="form-group">
                <label htmlFor="reference">Reference</label>
                <input type="text" name="reference" className="form-control form-control-lg" id="reference" placeholder="Who referred you?" onChange={this.handleChange} required/>
                <small id="referenceHelpBlock" className="form-text text-muted">
                    E.g Self, Government agencies, Iwi providers...
                </small>
            </div>
            }

            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
        </form>
        }
        <div className="row fixed-bottom bg-dark align-items-center">
          <Link to='/' className="btn btn-primary btn-lg my-2 ml-4">Home</Link>
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
