import React from 'react'
import sdk from 'matrix-react-sdk/lib/index'
import PropTypes from 'prop-types'
import {_t} from 'matrix-react-sdk/lib/languageHandler'

import dis from 'matrix-react-sdk/lib/dispatcher'

// @AHN: This should be a `aloha-react-sdk` component
// import AlohaList from "aloha-react-sdk/lib/AlohaList";

module.exports = React.createClass({
  onClinicalTrialListClick: function(ev) {
    const eventAction = ev.currentTarget.dataset.action
    ev.stopPropagation()
    //Analytics.trackEvent('My Clinical Trial List', 'click', this.props.action);
    dis.dispatch({action: eventAction})
  },

  render: function() {
    return (
      <div className="aloha-left-nav">
        <h2 className="mx_RoomSubList_label">Clinical Trials</h2>
        <ul className="aloha-clinical-trial-nav">
          <li data-action="view_my_clinical_trials" onClick={this.onClinicalTrialListClick} title="My Matched Trials">
            <i />
            <span className="item-label">My Matched Trials</span>
          </li>
          <li data-action="view_my_clinical_consent" onClick={this.onClinicalTrialListClick} title="My Consent">
            <i />
            <span className="item-label">My Consent</span>
          </li>
          <li data-action="view_my_clinical_profile" onClick={this.onClinicalTrialListClick} title="My Clinical Profile">
            <i />
            <span className="item-label">My Clinical Profile</span>
          </li>
        </ul>
      </div>
    )
  },
})
