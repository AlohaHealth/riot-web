import React from 'react';
import sdk from 'matrix-react-sdk/lib/index';
import { _t } from 'matrix-react-sdk/lib/languageHandler';

const AlohaClinicalTrialList = function() {
    const ActionButton = sdk.getComponent('elements.ActionButton');
    return (
        <div>
            <ul>
                <li>Clinical Trial 1</li>
                <li>Clinical Trial 2</li>
                <li>Clinical Trial 3</li>
            </ul>
        </div>
    );
};
export default AlohaClinicalTrialList;
