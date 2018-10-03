import React from 'react';
import sdk from 'matrix-react-sdk/lib/index';
import PropTypes from 'prop-types';
import { _t } from 'matrix-react-sdk/lib/languageHandler';

module.exports = React.createClass({

    render: function() {
        return (
            <div className="aloha-my-clinical-trial-list clearfix">
                <h2>My Clinical Trial Lists</h2>
                <ul>
                    <li><i className="aloha-matched-trials"></i> My Matched Trials (0)</li>
                    <li><i className="fas fa-globe"></i> All Enrolling Trials (275)</li>
                    <li><i className="fas fa-star"></i> My Favorite Trials (8)</li>
                </ul>
            </div>
        );
    }
});