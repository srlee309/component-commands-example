const rootMain = require('../../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.push('../../../../.storybook/main.js');
rootMain.stories.push(...['../ui/src/lib/**/*.stories.*'])

module.exports = rootMain;