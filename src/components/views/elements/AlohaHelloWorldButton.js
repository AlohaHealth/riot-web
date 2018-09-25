import React from 'react';
import sdk from 'matrix-react-sdk/lib/index';
import PropTypes from 'prop-types';
import { _t } from 'matrix-react-sdk/lib/languageHandler';

const AlohaHelloWorldButton = function(props) {
    const ActionButton = sdk.getComponent('elements.ActionButton');
    return (
        <ActionButton action=""
            label={_t("Hello world!")}
            iconPath="img/icons-share.svg"
            size={props.size}
            tooltip={props.tooltip}
        />
    );
};

AlohaHelloWorldButton.propTypes = {
    size: PropTypes.string,
    tooltip: PropTypes.bool,
};

export default AlohaHelloWorldButton;
