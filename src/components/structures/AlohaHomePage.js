/*
Copyright 2016 OpenMarket Ltd
Copyright 2017 Vector Creations Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import HomePage from 'matrix-react-sdk/lib/components/structures/HomePage';
import sanitizeHtml from 'sanitize-html';
import request from 'browser-request';
import { _t } from 'matrix-react-sdk/lib/languageHandler';
import sdk from 'matrix-react-sdk/lib/index';

import AlohaWelcomeBanner from '../views/homepage/AlohaWelcomeBanner';
import AlohaWhatNext from '../views/homepage/AlohaWhatNext';

class AlohaHomePage extends HomePage {
    static displayName = 'AlohaHomePage';
    static replaces = 'HomePage';

    // we're overriding the base component here, for Riot-specific tweaks
    translate(s) {
        s = sanitizeHtml(_t(s));
        // ugly fix for https://github.com/vector-im/riot-web/issues/4243
        s = s.replace(/Riot\.im/, '<a href="https://riot.im" target="_blank" rel="noopener">Riot.im</a>');
        s = s.replace(/\[matrix\]/, '<a href="https://matrix.org" target="_blank" rel="noopener"><img width="79" height="34" alt="[matrix]" style="padding-left: 1px;vertical-align: middle" src="home/images/matrix.svg"/></a>');
        return s;
    }

    render() {
        const GeminiScrollbarWrapper = sdk.getComponent("elements.GeminiScrollbarWrapper");
        return (
            <GeminiScrollbarWrapper autoshow={true} className="mx_HomePage">
                <div className="mx_HomePage_body">
                    <div className="mx_HomePage_container">
                        <AlohaWelcomeBanner />
                        <AlohaWhatNext />
                    </div>
                </div>
            </GeminiScrollbarWrapper>
        );
    }
}

module.exports = AlohaHomePage;
