
import React from 'react';
import ReactDOM from 'react-dom';
import sdk from 'matrix-react-sdk/lib/index';
import dis from 'matrix-react-sdk/lib/dispatcher';
import Velocity from 'velocity-vector';
import 'velocity-vector/velocity.ui';
import SettingsStore from 'matrix-react-sdk/lib/settings/SettingsStore';

// Aloha's HelloWorld Button element
import AlohaHelloWorldButton from '../views/elements/AlohaHelloWorldButton';

const CALLOUT_ANIM_DURATION = 1000;

module.exports = React.createClass({
    displayName: 'AlohaBottomLeftMenu',
    statics: {
        replaces: 'BottomLeftMenu',
    },
    render: function() {
        const HomeButton = sdk.getComponent('elements.HomeButton');
        const StartChatButton = sdk.getComponent('elements.StartChatButton');
        const RoomDirectoryButton = sdk.getComponent('elements.RoomDirectoryButton');
        const CreateRoomButton = sdk.getComponent('elements.CreateRoomButton');
        const SettingsButton = sdk.getComponent('elements.SettingsButton');
        const GroupsButton = sdk.getComponent('elements.GroupsButton');

        const groupsButton = SettingsStore.getValue("TagPanel.disableTagPanel") ?
            <GroupsButton tooltip={true} /> : null;

        return (
            <div className="mx_BottomLeftMenu">
                <div className="mx_BottomLeftMenu_options">
                    <HomeButton tooltip={true} />
                    <AlohaHelloWorldButton tooltip={true} />
                    <div ref={this._collectPeopleButton}>
                        <StartChatButton tooltip={true} />
                    </div>
                    <div ref={this._collectDirectoryButton}>
                        <RoomDirectoryButton tooltip={true} />
                    </div>
                    <div ref={this._collectCreateRoomButton}>
                        <CreateRoomButton tooltip={true} />
                    </div>
                    { groupsButton }
                    <span className="mx_BottomLeftMenu_settings">
                        <SettingsButton tooltip={true} />
                    </span>
                </div>
            </div>
        );
    }
});
