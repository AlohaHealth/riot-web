import React from 'react';
import sdk from 'matrix-react-sdk/lib/index';
import PropTypes from 'prop-types';
import { _t } from 'matrix-react-sdk/lib/languageHandler';

module.exports = React.createClass({

    render: function() {
        return (
            <div className="aloha-homepage-banner clearfix">
                <a href="https://riot.im"><img src= "themes/weheal/img/logo.png" className="mx_HomePage_logo" /></a>
                <div className="aloha-welcome-message">
                    <h1>Welcome to WeHeal's Clinical Trial Search</h1>
                    <h2>Personalized search services powered by Aloha Health Network to help you find the best-matched clinical trials.</h2>
                </div>
            </div>
        );
    }
});