import auth0 from 'auth0-js'

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'aloha-dev.auth0.com',
    clientID: 'Z8fDjG8dkxigmdp5v4QwTzOw__zjiPQI',
    redirectUri: 'https://auth0-web.dev.aloha.cloud/',
    responseType: 'token id_token',
    scope: 'openid profile',
  })

  login() {
    this.auth0.authorize()
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        // this.setSession(authResult);
        // history.replace('/home');
        console.log(authResult)
      } else if (err) {
        // history.replace('/home');
        console.log(err)
        alert(`Error: ${err.error}. Check the console for further details.`)
      }
    })
  }
}
