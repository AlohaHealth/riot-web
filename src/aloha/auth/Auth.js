import auth0 from 'auth0-js'

// Using Matrix client's existing setup to get config values
let appConfig = {};
try {
    appConfig = require('../../../config.json');
} catch (e) {
    // it would be nice to check the error code here and bail if the config
    // is unparseable, but we get MODULE_NOT_FOUND in the case of a missing
    // file or invalid json, so node is just very unhelpful.
    // Continue with the defaults (ie. an empty config)
}

export default class Auth {

  auth0 = new auth0.WebAuth(appConfig.auth0)

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
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

  isAuthenticated() {
    let idTokenExp = JSON.parse(localStorage.getItem('ahn_expires_at')) * 1000;
    return new Date().getTime() < idTokenExp;
  }
}
