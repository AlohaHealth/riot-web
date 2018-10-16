"use strict";

import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase/app";
import "firebase/auth";

import AlohaFirebaseAuth from "@alohahealth/aloha-react-sdk/lib/AlohaFirebaseAuth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
};
firebase.initializeApp(firebaseConfig);

// Initialize FirebaseUI
const firebaseUIConfig = {
  // signInSuccessUrl: process.env.signInSuccessUrl,
  signInSuccessUrl: "/#/home",
  signInFlow: "popup",
  signInOptions: [
    // Choose the providers and display order you want to offer users:
    // {
    //   provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //   // Whether the display name should be displayed in the Sign Up page.
    //   requireDisplayName: true,
    // },

    // {
    //   provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    //   // Invisible reCAPTCHA with image challenge and bottom left badge.
    //   recaptchaParameters: {
    //     type: "image",
    //     size: "invisible",
    //     badge: "bottomleft",
    //   },
    // },

    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // Required to enable this provider in One-Tap Sign-up.
      authMethod: "https://accounts.google.com",
      // Required to enable ID token credentials for this provider.
      clientId: "172138303154-0rp78630b48i9a9g20mqv7l9vde8539q.apps.googleusercontent.com",
    },

    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],

  callbacks: {
    // Avoid redirects after sign-in.
    // signInSuccessWithAuthResult: (authResult, redirectUrl) => {
    //   console.log(authResult, redirectUrl);
    //   return false;
    // },
  },

  // Terms of service url/callback.
  tosUrl: process.env.tosUrl,

  // Privacy policy url/callback.
  privacyPolicyUrl: function() {
    window.location.assign(process.env.privacyPolicyUrl);
  },
};

const DEFAULT_LOGO_URI = "themes/weheal/img/logo.png";

module.exports = React.createClass({
  displayName: "AlohaLoginPage",
  statics: {
    replaces: "LoginPage",
  },
  propTypes: {
    icon: PropTypes.string,
  },

  render: function() {
    return (
      <div className="mx_Login">
        <div className="mx_Login_box">
          <div className="mx_Login_header">
            <div className="mx_Login_logo">
              <img src={this.props.icon || DEFAULT_LOGO_URI} alt="Riot" />
            </div>
          </div>
          <AlohaFirebaseAuth firebase={firebase} firebaseUIConfig={firebaseUIConfig} />
        </div>
      </div>
    );
  },
});
