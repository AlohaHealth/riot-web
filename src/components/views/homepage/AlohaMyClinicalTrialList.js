import React from "react";
import sdk from "matrix-react-sdk/lib/index";
import PropTypes from "prop-types";
import { _t } from "matrix-react-sdk/lib/languageHandler";
import AlohaList from "aloha-react-sdk/lib/AlohaList";

module.exports = React.createClass({
  render: function() {
    const sampleData = [
      { item: 1, label: "My Matched Trials", count: 15 },
      { item: 1, label: "All Enrolling Trials", count: 275 },
      { item: 3, label: "My Favorite Trials", count: 8 }
    ];
    return (
      <div className="aloha-my-clinical-trial-list clearfix">
        <h2>My Clinical Trial Lists</h2>
        <AlohaList data={sampleData} />
      </div>
    );
  }
});
