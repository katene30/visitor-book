import React, { Component,Fragment } from "react";
import { connect } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <Router>
          <Fragment>
            <h1>Logs</h1>
            <p>hello world!</p>
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
