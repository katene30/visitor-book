import React, { Component,Fragment } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

import MainMenu from "./MainMenu";
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import Logs from "./Logs";
import AccountLogIn from "./AccountLogIn";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container h-100">

        <Router>
          <Fragment>
            {this.props.isAuthenticated ? 
              <Fragment>
                <Route exact path="/" component={MainMenu} />
                <Route path="/in" component={LogIn} />
                <Route path="/out" component={LogOut} />
                <Route path="/logs" component={Logs} />
              </Fragment>
              :
              <Route path="/" component={AccountLogIn} />
          }
          </Fragment>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
}
export default connect(mapStateToProps)(App);
