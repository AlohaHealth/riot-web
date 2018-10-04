import React from 'react';
import sdk from 'matrix-react-sdk/lib/index';
import PropTypes from 'prop-types';
import { _t } from 'matrix-react-sdk/lib/languageHandler';

module.exports = React.createClass({

    render: function() {
        return (
            <div className="aloha-homepage-quicklinks clearfix">
                <div>
                    <p><i className="fas fa-question-circle"></i></p>
                    <p>Pre-screening Questions</p>
                </div>
                <div>
                    <p><i className="fas fa-user-circle"></i></p>
                    <p>Profile and Consent</p>
                </div>
                <div>
                    <p><i className="fas fa-list-ul"></i></p>
                    <p>Trial Listings</p>
                </div>
                <div>
                    <p><i className="far fa-comments"></i></p>
                    <p>Advocate Chat</p>
                </div>
            </div>
        );
    }
});