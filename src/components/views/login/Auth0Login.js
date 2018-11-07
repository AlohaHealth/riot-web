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

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import sdk from 'matrix-react-sdk/lib/index';
import { _t } from 'matrix-react-sdk/lib/languageHandler';
import SdkConfig from 'matrix-react-sdk/lib/SdkConfig';

import Auth from '../../../aloha/auth/Auth.js';

const auth = new Auth();

/**
 * A pure UI component which displays a Auth0 login button form.
 */
 module.exports = React.createClass({
     displayName: 'Auth0Login',

     _login: function() {
        console.log("----------- LoginAuth0 Button --------------");
        auth.login();

     },

     _logout: function() {
        // auth.logout();
     },

     render: function() {
         // const { isAuthenticated } = this.props.auth;
         auth.handleAuthentication();
         return (
             <div>
                <button onClick={this._login}>Sign in with Auth0</button>
             </div>
         );
     },

 });
