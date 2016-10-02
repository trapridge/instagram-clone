import React from 'react'
import { Link } from 'react-router'

export default class Main extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <h1><Link to="/">Instagram clone</Link></h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}
