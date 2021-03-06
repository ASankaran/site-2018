import React, { Component } from 'react'

import styles from './registerNav.scss'

class RegisterNav extends Component {
  render() {
    // Variables setup
    const step = this.props.step


    return(
      <ul className="navBar">
        <li className={ step == 0 ? 'active' : null}>
          <div className="title">
            PERSONAL <br/>
            INFORMATION
          </div>
        </li>
        <li className={ step == 1 ? 'active' : null}>
          <div className="title">
            PROFESSIONAL <br/>
            INFORMATION
          </div>
        </li>
        <li className={ step == 2 ? 'active' : null}>
          <div className="title">
            TEAM
          </div>
        </li>
        <li className={ step == 3 ? 'active' : null}>
          <div className="title">
            CODE OF CONDUCT
          </div>
        </li>
        <li className={ step == 4 ? 'active' : null}>
          <div className="title">
            OPTIONAL INFORMATION
          </div>
        </li>
      </ul>
    )
  }
}

export default RegisterNav
