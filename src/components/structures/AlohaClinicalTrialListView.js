import React from 'react'
import sdk from 'matrix-react-sdk/lib/index'
import PropTypes from 'prop-types'
import {_t} from 'matrix-react-sdk/lib/languageHandler'

import {ApolloProvider, Query, graphql} from 'react-apollo'
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost'
import gql from 'graphql-tag'

// import apolloClient from "../../aloha/tenant_api/apolloClient"
import AlohaClinicalTrialList from '@alohahealth/aloha-react-sdk/lib/AlohaClinicalTrialList'

module.exports = React.createClass({
  render: function() {
    /*
     * Retrieve user's matched clinical trials
     */
    const apolloClient = new ApolloClient({
      link: new HttpLink({uri: this.props.alohaTenantAPI}),
      cache: new InMemoryCache(),
    })

    const ClinicalTrialQuery = gql`
      query ClinicalTrialQuery {
        trials {
          nct_id
          title
          conditions
        }
      }
    `
    const AlohaClinicalTrialListWithData = graphql(ClinicalTrialQuery, {
      name: 'ClinicalTrial',
    })(AlohaClinicalTrialList)

    return (
      <div className="aloha-matched-list-view clearfix">
        <h2 className="clearfix">My Clinical Trial List</h2>
        <ApolloProvider client={apolloClient}>
          <AlohaClinicalTrialListWithData />
        </ApolloProvider>
      </div>
    )
  },
})
