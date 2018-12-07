import React from 'react'
import sdk from 'matrix-react-sdk/lib/index'
import MatrixClientPeg from 'matrix-react-sdk/lib/MatrixClientPeg'
import PropTypes from 'prop-types'
import {_t} from 'matrix-react-sdk/lib/languageHandler'

import {ApolloProvider, Query, graphql} from 'react-apollo'
// import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-boost'
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {setContext} from 'apollo-link-context'
import {InMemoryCache} from 'apollo-cache-inmemory'
import gql from 'graphql-tag'

import AlohaClinicalTrialList from '@alohahealth/aloha-react-sdk/lib/AlohaClinicalTrialList'

module.exports = React.createClass({
  render: function() {
    /*
     * Retrieve user's matched clinical trials
     */
    const matrixUserId = MatrixClientPeg.get().credentials.userId

    const queryUserVariable = {
      matrixUserId: matrixUserId,
    }

    const httpLink = new HttpLink({
      uri: this.props.alohaTenantAPI,
    })

    const authLink = setContext((_, {headers}) => {
      // get the authentication token from local storage if it exists
      const token = localStorage.getItem('ahn_id_token')
      console.log(token)
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      }
    })

    const apolloClient = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    })

    // const apolloClient = new ApolloClient({
    //   link: httpLink,
    //   cache: new InMemoryCache(),
    // })

    const ClinicalTrialQuery = gql`
      query($matrixUserId: ID!) {
        user(id: $matrixUserId) {
          matched_trials {
            trial {
              id
              brief_title
              brief_summary
              conditions
              overall_status
              phase
              locations {
                facility {
                  name
                  address {
                    city
                    state
                    country
                  }
                }
              }
            }
          }
        }
      }
    `

    const AlohaClinicalTrialListWithData = graphql(ClinicalTrialQuery, {
      name: 'ClinicalTrialData',
      options: {variables: queryUserVariable},
    })(AlohaClinicalTrialList)

    return (
      <div className="aloha-matched-list-view clearfix">
        <h1 className="clearfix">My Clinical Trial List</h1>
        <ApolloProvider client={apolloClient}>
          <AlohaClinicalTrialListWithData />
        </ApolloProvider>
      </div>
    )
  },
})
