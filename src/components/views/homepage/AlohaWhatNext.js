import React from 'react'
import sdk from 'matrix-react-sdk/lib/index'
import PropTypes from 'prop-types'
import {_t} from 'matrix-react-sdk/lib/languageHandler'

module.exports = React.createClass({
  render: function() {
    return (
      <div className="aloha-whatnext clearfix">
        <h2>Complete your trial search:</h2>
        <ul>
          <li>Consent for your medical records pull</li>
          <li>Wait for your trial matches</li>
          <li>Review your matched trials</li>
          <li>Request referrals for trials you're interested in</li>
          <li>Wait for sponsor response</li>
        </ul>
      </div>
    )
  },
})
