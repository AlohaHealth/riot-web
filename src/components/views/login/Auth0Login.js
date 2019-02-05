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
import auth0 from 'auth0-js'

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
      Auth0Config: this.props.auth0AHNConfig
    }

    this.onAuth0MatrixLogin = this.onAuth0MatrixLogin.bind(this)
    this.auth = this.auth.bind(this)
    this.login = this.login.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  auth() {
    return new auth0.WebAuth(this.state.Auth0Config)
  }

  onAuth0MatrixLogin(auth0Response) {
    this.setState({
      isAuth0Authenticated: auth0Response,
    })
    this.props.onAuth0MatrixLogin()
  }

  login() {
    this.auth().authorize({
      prompt: 'login'
    });
  }

  /*
   * At the moment, we fall back on Matrix to manage the session
   * and Matrix session timeout is set the same as Auth0 exp
   */
  logout() {
    // Clear access token and ID token from local storage
    // localStorage.removeItem('ahn_access_token');
    // localStorage.removeItem('ahn_id_token');
    // localStorage.removeItem('ahn_expires_at');
  }

  handleAuthentication() {
    this.auth().parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        //history.replace('/home');
      } else if (err) {
        //history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the id token will expire at
    let idTokenExp = JSON.stringify(authResult.idTokenPayload.exp);
    localStorage.setItem('ahn_access_token', authResult.accessToken);
    localStorage.setItem('ahn_id_token', authResult.idToken);
    localStorage.setItem('ahn_expires_at', idTokenExp);
  }

  isAuthenticated() {
    let idTokenExp = JSON.parse(localStorage.getItem('ahn_expires_at')) * 1000;
    return new Date().getTime() < idTokenExp;
  }

  componentDidMount() {
    this.handleAuthentication()
    this.timerID = setTimeout(() => {
      const ahnIsAuthenticated = this.isAuthenticated()
      if (ahnIsAuthenticated) {
        this.onAuth0MatrixLogin(ahnIsAuthenticated)
      }
    }, 1000)
  }

  render() {
    const Loader = sdk.getComponent('elements.Spinner')
    const isAuthenticated = this.state.isAuth0Authenticated !== null ? true : false

    return (
      <div className="ahn-sign-in">
        {!isAuthenticated && <button className="mx_UserSettings_button" id="ahn-auth0-login" onClick={this.login}>Sign in</button>}
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
  auth0AHNConfig: PropTypes.object
}

module.exports = Auth0Login
