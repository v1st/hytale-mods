import React, { Component } from 'react'

import './NotFound.scss';

export default class NotFound extends Component {
  render() {
    return (
      <div className="Error404">
        <h1 className="Error404__title--big">404</h1>
        <h1 className="Error404__title">That page doesn't exist!</h1>
        <img className="Error404__gif" src="" alt="" />
      </div>
    )
  }
}
