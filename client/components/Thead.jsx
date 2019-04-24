import React, { Component } from 'react'

export default class Thead extends Component {
  render() {
    return (
      <React.Fragment>
        <thead className="thead-dark">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Service</th>
            <th scope="col">Name</th>
            <th scope="col">Reference</th>
            <th scope="col">Time In</th>
            <th scope="col">Time Out</th>
            </tr>
        </thead>
      </React.Fragment>
    )
  }
}
