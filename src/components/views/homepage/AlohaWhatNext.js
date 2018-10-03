import React from 'react';
import sdk from 'matrix-react-sdk/lib/index';
import PropTypes from 'prop-types';
import { _t } from 'matrix-react-sdk/lib/languageHandler';

module.exports = React.createClass({

    render: function() {
        return (
            <div className="aloha-whatnext clearfix">
                <h2>What to do next</h2>
                <p><i className="fas fa-question-circle"></i>Answer pre-screeening questions so that Aloha can best-match you to enrolling-trials.</p>
            </div>
        );
    }
});