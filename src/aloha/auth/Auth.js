import auth0 from 'auth0-js'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'aloha-dev.auth0.com',
    clientID: 'Z8fDjG8dkxigmdp5v4QwTzOw__zjiPQI',
    redirectUri: 'https://auth0-web.dev.aloha.cloud',
    responseType: 'token id_token',
    scope: 'openid profile',
  })

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    // this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        console.log(authResult);
        //history.replace('/home');
      } else if (err) {
        //history.replace('/home');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('ahn_access_token', authResult.accessToken);
    localStorage.setItem('ahn_id_token', authResult.idToken);
    localStorage.setItem('ahn_expires_at', expiresAt);
  }

  logout() {
    // Clear access token and ID token from local storage
    // localStorage.removeItem('ahn_id_tokenaccess_token');
    // localStorage.removeItem('ahn_id_token');
    // localStorage.removeItem('Ahn_expires_at');
  }

  /*
  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
  */
}
