ALOHA
=====

This is Aloha's customisation for whitelabeling, theming and components.


How to create a theme for a tenant in `riot-web`
=====================================================

1. Create a tenant's theme folder in /riot-web/res/themes/ (eg. weheal.org's theme)

### Directory layout

    .
    themes/
    ├── weheal                           # Tenant's name
    │   ├── css                          # sass files
    |       └──main.scss                 # This imports the tenant's or Aloha's default blue theme from `matrix-react-sdk` and overrides
    │   ├── fonts                        # fonts specific
    │   └── img                          # images
    |       └── logo.png                 # The app picks this up 

Example of `/riot-web/res/themes/weheal/css/main.scss`

```css
/*
 * import the component theme installed in `matrix-react-sdk`
 * The theme could be any theme installed in the `matrix-react-sdk/res/themes` folder
 * By default this theme should be the Aloha's whitelabled theme
 */
@import "../../AlohaBlue/css/main.scss";

/*
 * weheal.org's style overrides here
 */
body {
  background-color: #2ebdbc; // the page background color overrides
}

/*
 * Import other tenant's specific 
 */

@import "Login.scss";

```

2. Add this new tenant's theme in `webpack.congig.js`. 

Example: theme in `webpack.congig.js` 

```json
  "theme-weheal":  "./res/themes/weheal/css/main.scss",
```

> Note: The `./res/themes/weheal/css/main.scss` inherits the Aloha's blue theme which is defined in the `matrix-react-sdk`. 

3. Update the `default_theme` in `config.json`

Example:

```json
"default_theme": "weheal"
```

4. Manual updates required at this stage to pull in the tenant's theme

* Homepage: update logo/assets in `/riot-web/res/home.html`. Note: We plan to have this as the tenant's landing page eventually.
* Index: `src/vector/index.html`

5. Minor modification in Header `src/components/views/login/VectorLoginHeader.js` to dynamically load the tenant's logo.

```javascript
import {default_theme} from './../../../../config';
const DEFAULT_LOGO_URI = "themes/" + default_theme + "/img/logo.png";
```


How to create theme in `matrix-react-sdk`
========================================================

At the moment, the `riot-web` app uses themes from the `matrix-react-skd`

1. Clone the `/matrix-react-sdk/res/themes/light` to `/matrix-react-sdk/res/themes/{newTheme}`
2. Rename `light.scss` to `main.scss`
3. Update sass variables values in `_base.scss` for tenant's specific color theme etc.

> Note: the default's theme in `matrix-react-skd` is `AlohaBlue`


How to create custom Aloha's components in `riot-web`
=====================================================

`riot-web` uses the `matrix-react-sdk` component generation script to map `structures` & `views`. In order to create a custom component, clone a component in `matrix-react-sdk` and save it in `riot-web`. A custom component can be used to override the base component or add extra features that are outside of the `matrix-react-sdk` scopes.

### Overriding base components

1. Clone the compment in `matrix-react-sdk` that you would like to customise and save it in `riot-web/src/components/`, be sure to follow the same folder structure that you clone the component from the `matrix-react-sdk`.

2. Update all the `import` or component's dependencies relative path to `matrix-react-sdk/lib` accordingly.

Example:

From

```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';
    import sdk from '../../index';
    import dis from '../../dispatcher';
    import Velocity from 'velocity-vector';
    import 'velocity-vector/velocity.ui';
    import SettingsStore from '../../settings/SettingsStore';
```

To 

```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';
    import sdk from 'matrix-react-sdk/lib/index';
    import dis from 'matrix-react-sdk/lib/dispatcher';
    import Velocity from 'velocity-vector';
    import 'velocity-vector/velocity.ui';
    import SettingsStore from 'matrix-react-sdk/lib/settings/SettingsStore';
```


3. Instruct the application to use the new custom component by adding this in the component Class

```javascript
    module.exports = React.createClass({
        displayName: 'AlohaBottomLeftMenu',
        statics: {
            replaces: 'BottomLeftMenu',
        },
        .
        .
        .
    }  
```

Examples: `/riot-web/src/components/structures/AlohaBottomLeftMenu.js` & `/riot-web/src/components/structures/AlohaRoomView.js`

4. Customise component's methods: We can override the base component for Aloha's or tenant's-specific tweaks by calling the same methods in the custom components with overriding code, eg. render() method.

Example: Removing "Groups" button from the menu

From

```javascript  
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
```

To

```javascript
    render: function() {
        const HomeButton = sdk.getComponent('elements.HomeButton');
        const StartChatButton = sdk.getComponent('elements.StartChatButton');
        const RoomDirectoryButton = sdk.getComponent('elements.RoomDirectoryButton');
        const CreateRoomButton = sdk.getComponent('elements.CreateRoomButton');
        const SettingsButton = sdk.getComponent('elements.SettingsButton');

        return (
            <div className="mx_BottomLeftMenu">
                <div className="mx_BottomLeftMenu_options">
                    <HomeButton tooltip={true} />
                    <div ref={this._collectPeopleButton}>
                        <StartChatButton tooltip={true} />
                    </div>
                    <div ref={this._collectDirectoryButton}>
                        <RoomDirectoryButton tooltip={true} />
                    </div>
                    <div ref={this._collectCreateRoomButton}>
                        <CreateRoomButton tooltip={true} />
                    </div>
                    <span className="mx_BottomLeftMenu_settings">
                        <SettingsButton tooltip={true} />
                    </span>
                </div>
            </div>
        );
    }
```

### Add new features to the custom component

We can create our own component, for example Aloha's `HelloWorld` button, and add it to the custom `BottomLeftMenu`

1. Go through step 1 to 3 in the "Overriding base components" section
2. Create our own component `AlohaHelloWorldButton.js`
3. Import the `AlohaHelloWorldButton` in the new custom component

Example: `AlohaBottomLeftMenu.js`

```javascript
.
.
.
// Aloha's HelloWorld Button element
import AlohaHelloWorldButton from '../views/elements/AlohaHelloWorldButton';

.
.
.

module.exports = React.createClass({
    displayName: 'AlohaBottomLeftMenu',
    statics: {
        replaces: 'BottomLeftMenu',
    },
    render: function() {

        return (
            <div className="mx_BottomLeftMenu">
                <div className="mx_BottomLeftMenu_options">
                    .
                    .
                    .
                    <AlohaHelloWorldButton tooltip={true} />
                    .
                    .
                    .
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
```
