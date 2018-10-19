import React from 'react'
import sdk from 'matrix-react-sdk/lib/index'
import PropTypes from 'prop-types'
import {_t} from 'matrix-react-sdk/lib/languageHandler'

module.exports = React.createClass({
  render: function() {
    return (
      <div className="aloha-matched-list-view clearfix">
        <h2 className="clearfix">My Clinical Trial List</h2>
        <div>
          <table className="aloha-clinical-trial-matches">
            <thead className="">
              <tr className="">
                <th className="">
                  <input type="checkbox" />
                </th>
                <th className="">
                  <div className="trial-description">Description</div>
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="">
                <td className="">
                  <input type="checkbox" />
                </td>
                <td className="">
                  <div className="trial-heading">
                    <span className="">
                      <input type="radio" />
                    </span>
                    <span>Lorem ipsum dolor sit amet</span>
                  </div>
                  <div className="trial-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nunc tempus, sodales nisl at,
                    cursus nunc. Aenean tellus erat, tristique at sapien eu, venenatis venenatis libero. Nunc gravida,
                    nibh quis tristique suscipit, lacus purus tempor sapien, accumsan faucibus purus ante vel ante.
                    Quisque ac ante posuere, pharetra elit vel, hendrerit erat. Curabitur posuere tempus vestibulum.
                    Nulla facilisi. Proin id massa tincidunt, posuere orci finibus, ullamcorper felis. Nunc a dolor
                    lorem. Mauris rutrum, nulla vel tristique egestas, velit nisl tempus diam, eu euismod sapien lorem
                    rhoncus enim. Pellentesque non efficitur tellus. Fusce sed velit lorem. Donec diam neque, aliquam
                    nec tempus lobortis, ornare viverra dolor. Aenean viverra faucibus interdum.
                  </div>
                </td>
              </tr>
              <tr className="">
                <td className="">
                  <input type="checkbox" />
                </td>
                <td className="">
                  <div className="trial-heading">
                    <span>
                      <input type="radio" />
                    </span>
                    <span>Lorem ipsum dolor sit amet</span>
                  </div>
                  <div className="trial-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nunc tempus, sodales nisl at,
                    cursus nunc. Aenean tellus erat, tristique at sapien eu, venenatis venenatis libero. Nunc gravida,
                    nibh quis tristique suscipit, lacus purus tempor sapien, accumsan faucibus purus ante vel ante.
                    Quisque ac ante posuere, pharetra elit vel, hendrerit erat. Curabitur posuere tempus vestibulum.
                    Nulla facilisi. Proin id massa tincidunt, posuere orci finibus, ullamcorper felis. Nunc a dolor
                    lorem. Mauris rutrum, nulla vel tristique egestas, velit nisl tempus diam, eu euismod sapien lorem
                    rhoncus enim. Pellentesque non efficitur tellus. Fusce sed velit lorem. Donec diam neque, aliquam
                    nec tempus lobortis, ornare viverra dolor. Aenean viverra faucibus interdum.
                  </div>
                </td>
              </tr>
              <tr className="">
                <td className="">
                  <input type="checkbox" />
                </td>
                <td className="">
                  <div className="trial-heading">
                    <span>
                      <input type="radio" />
                    </span>
                    <span>Lorem ipsum dolor sit amet</span>
                  </div>
                  <div className="trial-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nunc tempus, sodales nisl at,
                    cursus nunc. Aenean tellus erat, tristique at sapien eu, venenatis venenatis libero. Nunc gravida,
                    nibh quis tristique suscipit, lacus purus tempor sapien, accumsan faucibus purus ante vel ante.
                    Quisque ac ante posuere, pharetra elit vel, hendrerit erat. Curabitur posuere tempus vestibulum.
                    Nulla facilisi. Proin id massa tincidunt, posuere orci finibus, ullamcorper felis. Nunc a dolor
                    lorem. Mauris rutrum, nulla vel tristique egestas, velit nisl tempus diam, eu euismod sapien lorem
                    rhoncus enim. Pellentesque non efficitur tellus. Fusce sed velit lorem. Donec diam neque, aliquam
                    nec tempus lobortis, ornare viverra dolor. Aenean viverra faucibus interdum.
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
})
