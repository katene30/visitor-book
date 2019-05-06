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
            <Route exact path="/" component={AccountLogIn} />
            <Route path="/in" component={LogIn} />
            <Route path="/out" component={LogOut} />
            <Route path="/logs" component={Logs} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}
export default connect(mapStateToProps)(App);
