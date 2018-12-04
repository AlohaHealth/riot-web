/*
Copyright 2015, 2016 OpenMarket Ltd
Copyright 2017 Vector Creations Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import sdk from 'matrix-react-sdk/lib/index'
import {_t} from 'matrix-react-sdk/lib/languageHandler'
import SdkConfig from 'matrix-react-sdk/lib/SdkConfig'

import Auth from '../../../aloha/auth/Auth.js'

const auth = new Auth()

/**
 * A pure UI component which displays a Auth0 login button form.
 */

class Auth0Login extends React.Component {
  static displayName = 'Auth0Login'

  static defaultProps = {
    onAuth0MatrixLogin: function() {},
    initialAuth0: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      isAuth0Authenticated: this.props.initialAuth0,
    }

    this.onAuth0MatrixLogin = this.onAuth0MatrixLogin.bind(this)
  }

  componentDidMount() {
    auth.handleAuthentication()
    this.timerID = setTimeout(() => {
      const ahn_token_expires = localStorage.getItem('ahn_expires_at')
      if (ahn_token_expires !== null) {
        this.onAuth0MatrixLogin(ahn_token_expires)
      }
    }, 1000)
  }

  onAuth0MatrixLogin(auth0Response) {
    this.setState({
      isAuth0Authenticated: auth0Response,
    })
    this.props.onAuth0MatrixLogin(auth0Response)
  }

  _login() {
    auth.login()
  }

  _logout() {
    // auth.logout();
  }

  render() {
    const Loader = sdk.getComponent('elements.Spinner')
    const isAuthenticated = this.state.isAuth0Authenticated !== null ? true : false

    return (
      <div>
        {!isAuthenticated && <button onClick={this._login}>Sign in with Auth0</button>}
        {isAuthenticated && (
          <div className="mx_Login_loader">
            <Loader />
          </div>
        )}
      </div>
    )
  }
}

Auth0Login.propTypes = {
  onAuth0MatrixLogin: PropTypes.func,
}

module.exports = Auth0Login
