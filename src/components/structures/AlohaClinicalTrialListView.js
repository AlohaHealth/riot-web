import React from "react";
import sdk from "matrix-react-sdk/lib/index";
import PropTypes from "prop-types";
import { _t } from "matrix-react-sdk/lib/languageHandler";

module.exports = React.createClass({
    render: function() {
        return (
            <div className="clearfix">
                <h2>My Clinical Trial List</h2>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                </ul>
            </div>
        );
    }
});
